import styled from '@emotion/styled'
import { tint, shade, transparentize } from 'polished'
import { Theme, themeSpace, themeColor } from '@stinodes-ui/theme'
import { Flex } from '@stinodes-ui/flex'

const outlineWidth = 4

const outlineSize = radius => {
  return `
    :before { 
      top: -${outlineWidth}px;
      right: -${outlineWidth}px;
      bottom: -${outlineWidth}px;
      left: -${outlineWidth}px;
      border-radius: ${radius + outlineWidth}px;
      border-width: ${outlineWidth}px;
    }
  `
}
const size = props => {
  switch (props.size) {
    case 'circle':
      return `
        width: 48px;
        height: 48px;
        border-radius: 24px;
        ${outlineSize(24)}
      `
    case 'small':
      return `
        padding: 
        ${themeSpace(1, props.theme)}px 
        ${themeSpace(2, props.theme)}px;
        border-radius: 2px;
        font-size: 16px;
        ${outlineSize(2)}
      `
    case 'large':
    default:
      return `
        padding: 
        ${themeSpace(2, props.theme)}px 
        ${themeSpace(3, props.theme)}px;
        border-radius: 2px;
        font-size: 20px;
        ${outlineSize(2)}
      `
  }
}

const colorVariant = props => {
  const bg = themeColor(props.bg, props.theme)
  const hover = tint(0.2, bg)
  const active = shade(0.1, bg)

  return `
    position: relative;
    background-color: ${bg};
    transition: color 0.3s ease, background-color 0.3s ease;
    :hover {
      background-color: ${hover};
    }
    :active {
      background-color: ${active};
    }
    :before {
      content: " ";
      pointer-events: none;
      position: absolute;
      border-color: ${transparentize(0.3, bg)};
      border-style: solid;
      transition: opacity .3s ease;
      opacity: 0;
    }
    :focus {
      :before { 
        opacity: 1;
      }
    }
  `
}

type Props = {}
const Button = styled(Flex.withComponent('button'))<Props>`
  font-family: ${props => (props.theme as Theme).fontFamily};
  font-size: 14px;
  border: none;
  font-weight: 600;
  outline: none;
  ${size}
  ${colorVariant}
`
Button.defaultProps = {
  bg: 'primary',
  color: 'lights.4',
}

export { Button }
