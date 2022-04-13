import styled from '@emotion/styled'
import {
  Fragment,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react'
import { useMixedState } from '../hooks/useMixedState'
import { Box } from './Box'
import { Paragraph } from './Typography'

const EmptyButton = styled(Paragraph.withComponent('button'))`
  display: flex;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`
const AccordeonContent = styled(Box)`
  height: ${props => props.height || 0}px;
  transition: height 0.2s ease;
  overflow: hidden;
`

type BaseProps = {
  children: ReactNode
  header: ReactNode
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
  header,
  visible: visibleProp,
  onChange,
}: Props) => {
  const contentRef = useRef<null | HTMLDivElement>(null)
  const [visible, setVisible] = useMixedState<boolean>(visibleProp || false, {
    state: visibleProp,
    setState: onChange as undefined | Dispatch<SetStateAction<boolean>>,
  })
  const [height, setHeight] = useState<null | number>(0)
  const observer = useMemo(
    () =>
      new ResizeObserver(entries => setHeight(entries[0].contentRect.height)),
    [setHeight],
  )

  useEffect(() => {
    const content = contentRef.current
    if (visible && content) {
      observer.observe(content)
      return () => {
        observer.unobserve(content)
      }
    }
  }, [contentRef, visible])

  return (
    <Fragment>
      <EmptyButton type="button" onClick={() => setVisible(!visible)}>
        {header}
      </EmptyButton>
      <AccordeonContent height={visible ? height : 0}>
        <div ref={contentRef}>{children}</div>
      </AccordeonContent>
    </Fragment>
  )
}
