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
import { assoc, not } from 'ramda'
import { Underlay } from './Underlay'
import { Portal } from './Portal'
import { useMixedState } from '../hooks/useMixedState'

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

type BaseProps = {
  underlay?: boolean
  children: ReactNode
  content: ReactNode
  align?: Align
  trigger?: Trigger
  closeOnClick?: boolean
  offset?: number
  component?: string | ReactElement
}

type ControlledProps = BaseProps & {
  visible: boolean
  onClose: () => any
}
type UncontrolledProps = BaseProps & {
  visible?: void
  onClose?: void
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
}: ControlledProps | UncontrolledProps) => {
  const ref = useRef<null | HTMLDivElement>(null)
  // const positionRef = useRef<
  //  Partial<{ top: number; left: number; right: number; bottom: number }>
  // >({})

  const [visible, setVisible] = useMixedState<boolean>(false, {
    state: props.visible,
    setState: props.onClose && (newState => !newState && props.onClose()),
  })

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

  const open = useCallback(() => setVisible(true), [
    calculatePosition,
    setVisible,
  ])
  const close = useCallback(() => setVisible(false), [setVisible])
  const toggle = useCallback(() => setVisible(not), [
    calculatePosition,
    setVisible,
  ])

  const containerProps = useMemo(() => {
    if (trigger === 'click') {
      return {
        onClick: () => {
          toggle()
        },
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
    if (trigger === 'visible') {
      open()
      return close
    }
  }, [trigger, open, close])

  const element = useMemo(
    () =>
      typeof component === 'string'
        ? createElement(component, null, null)
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
              closeOnClick && close()
            }}>
            {underlay && <Underlay onClick={close} />}
            <Container style={calculatePosition()}>{content}</Container>
          </div>
        </CSSTransition>
      </Portal>,
    ],
  )
}
