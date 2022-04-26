import styled, { StyledComponent } from '@emotion/styled'
import { HTMLAttributes, InputHTMLAttributes } from 'react'
import {
  typography,
  color,
  TypographyProps,
  ColorProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  BackgroundColorProps,
} from 'styled-system'
import { themeFont, themeColor, Theme, themeSpace } from '../theme'
import { boxShadowOutline } from '../utils'

type LabelProps = ColorProps & TypographyProps
export const Label: StyledComponent<
  LabelProps,
  HTMLAttributes<HTMLLabelElement>
> = styled.label`
  font-family: ${themeFont};
  color: ${themeColor('typography.4')};
  ${typography}
  ${color}
`

type InputBorderProps = {
  border?: string
  highlight?: boolean
  outlineColor?: string
  showOutline?: boolean
}
const inputBorder = (props: InputBorderProps & { theme: Theme }) => {
  const highlightColor = themeColor(props.border || 'primaries.2', props.theme)
  let color = themeColor('surfaces.0', props.theme)

  if (props.highlight) color = highlightColor

  return `
    border: 2px solid;
    border-color: ${color};
    :focus, :hover {
      border-color: ${highlightColor};
    }
    ${boxShadowOutline({ ...props, bg: props.border }, '')}
    transition: box-shadow .3s ease, border-color .3s ease;
    `
}

type InputSizeProps = {
  size?: 'small' | 'large'
}
const size = (props: InputSizeProps & { theme: Theme }) => {
  switch (props.size) {
    case 'small':
      return `
        padding: 
        ${themeSpace(1, props.theme)}px 
        ${themeSpace(1, props.theme)}px;
        min-height: 38px;
        border-radius: 4px;
        font-size: 14px;
      `
    case 'large':
    default:
      return `
        padding: 
        ${themeSpace(1, props.theme)}px 
        ${themeSpace(2, props.theme)}px;
        min-height: 52px;
        border-radius: 4px;
        font-size: 16px;
      `
  }
}

export type InputProps = { readOnly?: boolean } & InputBorderProps &
  InputSizeProps &
  TypographyProps &
  BackgroundColorProps &
  WidthProps &
  MaxWidthProps

export const Input: StyledComponent<
  InputProps,
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputProps>
> = styled.input<InputProps>`
  display: flex;
  outline: 0;
  font-family: ${themeFont};
  ${color}
  ${width}
  ${maxWidth}
  ${size}
  ${inputBorder}
  ${typography}
`
Input.displayName = 'Input'
Input.defaultProps = {
  bg: 'surfaces.4',
  color: 'typography.1',
}

export const TextArea: StyledComponent<
  InputProps,
  InputHTMLAttributes<HTMLTextAreaElement>
> = styled(Input.withComponent('textarea'))`
  resize: none;
`
TextArea.defaultProps = {
  bg: 'surfaces.4',
  color: 'typography.1',
}
TextArea.displayName = 'TextArea'
