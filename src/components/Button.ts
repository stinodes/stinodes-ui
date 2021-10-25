import styled, { StyledComponent } from '@emotion/styled'
import { tint, shade, transparentize } from 'polished'
import { Theme } from '@emotion/react'
import { space, SpaceProps } from 'styled-system'
import { themeFont, themeSpace, themeColor } from '../theme'
import { boxShadowOutline } from '../utils'
import { Flex, FlexBoxProps } from './Flex'
import { HTMLAttributes } from 'react'

type ButtonSizeProps = {
  size?: 'circle' | 'small' | 'large'
}
const size = (props: ButtonSizeProps & { theme: Theme }) => {
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
        height: 38px;
        border-radius: 4px;
        font-size: 14px;
      `
    case 'large':
    default:
      return `
        padding: 
        ${themeSpace(1, props.theme)}px 
        ${themeSpace(3, props.theme)}px;
        height: 52px;
        border-radius: 4px;
        font-size: 16px;
      `
  }
}

type ColorVariantProps = {
  color?: string
  bg?: string
}
const colorVariant = (props: ColorVariantProps & { theme: Theme }) => {
  const color = themeColor(props.color || 'white', props.theme)
  const bg = themeColor(props.bg || 'primary', props.theme)
  const hover = tint(0.2, bg)
  const active = shade(0.1, bg)

  return `
    color: ${color};
    background: ${bg};
    border: 2px ${bg} solid;
    :hover {
      background-color: ${hover};
      border-color: ${hover};
    }
    :active {
      background-color: ${active};
      border-color: ${active};
    }
  `
}

type ShadowProps = {
  shadow?: boolean
  important?: boolean
  bg?: string
  showOutline?: boolean
  outlineColor?: string
}
const shadow = (props: ShadowProps & { theme: Theme }) => {
  const shadows = []

  if (props.shadow) {
    const color = themeColor('darks.2', props.theme)
    shadows.push(`${transparentize(0.7, color)} 0 8px 24px`)
  }
  if (props.important) {
    const color = themeColor(props.bg || 'primary', props.theme)
    shadows.push(`${transparentize(0.3, color)} 0 0 24px`)
  }

  return boxShadowOutline(props, shadows.join(', '))
}

export type ButtonProps = ButtonSizeProps &
  ColorVariantProps &
  ShadowProps &
  SpaceProps

const Button: StyledComponent<
  ButtonProps,
  HTMLAttributes<HTMLButtonElement>
> = styled.button`
  font-family: ${themeFont};
  font-size: 14px;
  font-weight: 600;
  border: none;
  outline: none;
  text-align: center;
  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease,
    border-color 0.3s ease;
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

export type FlexButtonProps = ColorVariantProps & ShadowProps & FlexBoxProps
export const FlexButton: StyledComponent<
  FlexButtonProps,
  HTMLAttributes<HTMLButtonElement>
> = styled(Flex.withComponent('button'))`
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
