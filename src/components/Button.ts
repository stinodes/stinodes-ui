import styled from '@emotion/styled'
import { tint, shade, transparentize } from 'polished'
import { Theme } from '@emotion/react'
import { color, space } from 'styled-system'
import { themeFont, themeSpace, themeColor } from '../theme'
import { boxShadowOutline } from '../utils'
import { Flex } from './Flex'

const size = props => {
  switch (props.size) {
    case 'circle':
      return `
        width: 48px;
        height: 48px;
        border-radius: 24px;
      `
    case 'small':
      return `
        padding: 
        ${themeSpace(1, props.theme)}px 
        ${themeSpace(2, props.theme)}px;
        border-radius: 4px;
        font-size: 14px;
      `
    case 'large':
    default:
      return `
        padding: 
        ${themeSpace(2, props.theme)}px 
        ${themeSpace(3, props.theme)}px;
        border-radius: 4px;
        font-size: 16px;
      `
  }
}

const colorVariant = props => {
  const bg = themeColor(props.bg, props.theme)
  const hover = tint(0.2, bg)
  const active = shade(0.1, bg)

  return `
    :hover {
      background-color: ${hover};
    }
    :active {
      background-color: ${active};
    }
  `
}

const shadow = (props: Props & { theme: Theme }) => {
  const shadows = []

  if (props.shadow) {
    const color = themeColor('darks.2', props.theme)
    shadows.push(`${transparentize(0.7, color)} 0 8px 24px`)
  }
  if (props.important) {
    const color = themeColor(props.bg, props.theme)
    shadows.push(`${transparentize(0.3, color)} 0 0 24px`)
  }

  return boxShadowOutline(props, shadows.join(', '))
}

type Props = {
  shadow?: boolean
  important?: boolean
  bg?: string
  color?: string
  size?: 'large' | 'small' | 'circle'
  showOutline?: boolean
  outlineColor?: string
}
const Button = styled.button<Props>`
  font-family: ${themeFont};
  font-size: 14px;
  font-weight: 600;
  border: none;
  outline: none;
  text-align: center;
  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  ${color}
  ${space}
  ${size}
  ${colorVariant}
  ${shadow}
`
Button.defaultProps = {
  bg: 'primary',
  color: 'lights.4',
}
Button.displayName = 'Button'

export const FlexButton = styled(Flex.withComponent('button'))`
  font-family: ${themeFont};
  font-size: 14px;
  font-weight: 600;
  outline: none;
  border: none;
  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  ${colorVariant}
  ${shadow}
`
FlexButton.displayName = 'FlexButton'

export { Button }
