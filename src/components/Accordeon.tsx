import styled from '@emotion/styled'
import {
  Fragment,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useRef,
} from 'react'
import { useMixedState } from '../hooks/useMixedState'
import { Box } from './Box'
import { FlexButton } from './Button'

const AccordeonContent = styled(Box)`
  height: ${props => props.height || 0}px;
  transition: height 0.2s ease;
  overflow: hidden;
`

type BaseProps = {
  children: ReactNode
  content: ReactNode
}
type ControlledProps = {
  visible: boolean
  onChange: (v: boolean) => void
}
type UncontrolledProps = {
  visible?: void
  onChange?: void
}

type Props = BaseProps & (ControlledProps | UncontrolledProps)

export const Accordeon = ({
  children,
  content,
  visible: visibleProp,
  onChange,
}: Props) => {
  const contentRef = useRef<null | HTMLDivElement>(null)
  const [visible, setVisible] = useMixedState<boolean>(visibleProp || false, {
    state: visibleProp,
    setState: onChange as undefined | Dispatch<SetStateAction<boolean>>,
  })

  const height = useMemo(() => {
    if (!visible || !contentRef.current) return 0
    const box = contentRef.current.getBoundingClientRect()
    return box.height
  }, [visible, contentRef])

  return (
    <Fragment>
      <FlexButton onClick={() => setVisible(!visible)}>{children}</FlexButton>
      <AccordeonContent height={height}>
        <div ref={contentRef}>{content}</div>
      </AccordeonContent>
    </Fragment>
  )
}