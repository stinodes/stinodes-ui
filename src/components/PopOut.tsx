import React, {
  cloneElement,
  ComponentType,
  createElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSTransition } from 'react-transition-group'
import { assoc } from 'ramda'
import { Underlay } from './Underlay'
import { Portal } from './Portal'

const Container = styled.div`
  position: fixed;
`

type Align = 'left' | 'right' | 'center'
type Trigger = 'click' | 'hover' | 'hide' | 'visible'

const transitionStyles = css`
  > div {
    transition: opacity 0.2s ease;
  }
  &.enter > div {
    opacity: 0;
  }
  &.enter-active > div {
    opacity: 1;
  }
  &.exit > div {
    opacity: 1;
  }
  &.exit-active > div {
    opacity: 0;
  }
`

type Props = {
  underlay?: boolean
  onClose?: () => any
  children: ReactNode
  content: ReactNode
  align?: Align
  trigger?: Trigger
  closeOnClick?: boolean
  offset?: number
  component?: string | ReactElement
}

export const PopOut = ({
  underlay,
  children,
  content,
  trigger = 'hover',
  closeOnClick = false,
  align = 'left',
  offset = 16,
  component = 'div',
  ...props
}: Props) => {
  const ref = useRef<null | HTMLDivElement>(null)
  const [{ visible, position }, setState] = useState<null | {
    position: {
      left?: number
      top?: number
      right?: number
      bottom?: number
    }
    visible: boolean
  }>({ visible: false, position: {} })

  const calculatePosition = useCallback(() => {
    if (ref.current) {
      const measurement = ref.current.getBoundingClientRect()
      const top = measurement.top + measurement.height + offset

      if (align === 'left') {
        return { top, left: measurement.left }
      }
      if (align === 'center') {
        return {
          top,
          left: measurement.left,
          right: window.innerWidth - (measurement.left + measurement.width),
          display: 'flex',
          justifyContent: 'center',
        }
      }
      return {
        top,
        right: window.innerWidth - (measurement.left + measurement.width),
      }
    }
  }, [ref])

  const open = useCallback(
    () => setState({ position: calculatePosition(), visible: true }),
    [calculatePosition, setState],
  )
  const close = useCallback(() => setState(assoc('visible', false)), [setState])
  const toggle = useCallback(
    () =>
      setState(state =>
        state.visible
          ? { visible: false, ...state }
          : { visible: true, position: calculatePosition() },
      ),
    [calculatePosition, setState],
  )

  const containerProps = useMemo(() => {
    if (trigger === 'click') {
      return {
        onClick: toggle,
      }
    }
    if (trigger === 'hover') {
      return {
        onMouseEnter: open,
        onMouseLeave: close,
      }
    }
    return {}
  }, [toggle, open, close, trigger])

  useEffect(() => {
    if (trigger === 'visible' && !position) {
      open()
      return close
    }
  }, [trigger, open, close])

  const element = useMemo(
    () =>
      typeof component === 'string'
        ? createElement('div', null, null)
        : component,
    [component],
  )

  return cloneElement(
    element,
    {
      ref,
      ...containerProps,
      ...props,
    } as {},
    [
      children,
      <Portal>
        <CSSTransition in={visible} unmountOnExit timeout={400}>
          <div
            css={transitionStyles}
            onClick={e => {
              e.stopPropagation()
              closeOnClick && setState(state => ({ ...state, visible: false }))
            }}>
            {underlay && <Underlay onClick={close} />}
            <Container style={position}>{content}</Container>
          </div>
        </CSSTransition>
      </Portal>,
    ],
  )
}
