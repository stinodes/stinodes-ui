import {
  Children,
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
} from 'react'
import styled from '@emotion/styled'
import { typography, TypographyProps } from 'styled-system'
import { css } from '@emotion/react'
import { assoc } from 'ramda'
import { CSSTransition } from 'react-transition-group'

import { themeColor, themeFont } from '../theme'
import { H2 } from './Typography'
import { Underlay } from './Underlay'
import { Flex } from './Flex'
import { Card } from './Card'
import { Portal } from './Portal'

const Body = styled(Flex)<TypographyProps>`
  font-family: ${themeFont};
  ${typography}
`
Body.defaultProps = {
  color: 'darks.1',
  fontSize: 16,
  p: 3,
  flexDirection: 'column',
}
Body.displayName = 'Body'

const Header = styled(H2)`
  border-bottom: 1px solid ${themeColor('lights.1')};
`
Header.defaultProps = { px: 3, py: 2 }
Header.displayName = 'Header'

const Footer = styled(Flex)`
  border-top: 1px solid ${themeColor('lights.1')};
`
Footer.defaultProps = { p: 3, py: 2 }
Footer.displayName = 'Footer'

const transitionStyles = css`
  transition: opacity 0.4s ease;
  .modal-card {
    transition: transform 0.4s ease;
  }
  &.enter {
    opacity: 0;
    .modal-card {
      transform: translateY(100%);
    }
  }
  &.enter-active {
    opacity: 1;
    .modal-card {
      transform: translateY(0%);
    }
  }
  &.exit {
    opacity: 1;
    .modal-card {
      transform: translateY(0%);
    }
  }
  &.exit-active {
    opacity: 0;
    .modal-card {
      transform: translateY(100%);
    }
  }
`

type Props = ComponentPropsWithoutRef<typeof Card> & {
  visible: boolean
  onClose?: () => any
  children: ReactNode
}
export const Modal = ({ visible, onClose, children, ...props }: Props) => {
  const childrenArr = Children.toArray(children) as ReactElement<any>[]
  const { header, body, footer } = childrenArr.reduce(
    (prev, child) => {
      const type = child && child.type ? child.type : 'Body'
      if (type === Modal.Header) return assoc('header', child, prev)
      if (type === Modal.Footer) return assoc('footer', child, prev)
      return assoc('body', [...prev.body, child], prev)
    },
    { header: null, body: [], footer: null },
  )

  return (
    <Portal>
      <CSSTransition in={visible} unmountOnExit timeout={400}>
        <Underlay
          css={transitionStyles}
          onClick={onClose}
          bg="darks.4"
          alignItems="center"
          p={3}
          flexDirection="column">
          <Card {...props} flexDirection="column" className="modal-card">
            {header}
            <Body>{body}</Body>
            {footer}
          </Card>
        </Underlay>
      </CSSTransition>
    </Portal>
  )
}
Modal.defaultProps = {
  bg: 'lights.4',
  maxWidth: 496,
  width: 1,
  shadow: true,
  border: true,
}

Modal.Header = Header
Modal.Footer = Footer
