import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { themeColor } from '../theme'
import { Flex } from './Flex'

export const Underlay: typeof Flex = styled(Flex)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${props => {
    if (props.bg) {
      const background = themeColor(props.bg as string, props.theme)
      return `background-color: ${transparentize(0.3, background)};`
    }
    return ''
  }}
`
