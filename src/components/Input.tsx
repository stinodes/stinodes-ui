import styled, { StyledComponent } from '@emotion/styled'
import { HTMLAttributes } from 'react'
import {
  typography,
  color,
  layout,
  TypographyProps,
  LayoutProps,
  ColorProps,
} from 'styled-system'
import { themeFont, themeColor, Theme, themeSpace } from '../theme'
import { boxShadowOutline } from '../utils'

type LabelProps = ColorProps & TypographyProps
export const Label: StyledComponent<
  LabelProps,
  HTMLAttributes<HTMLLabelElement>
> = styled.label`
  font-family: ${themeFont};
  color: ${themeColor('darks.4')};
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
  let color = themeColor('lights.0', props.theme)

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
        border-radius: 4px;
        font-size: 14px;
      `
    case 'large':
    default:
      return `
        padding: 
        ${themeSpace(2, props.theme)}px 
        ${themeSpace(2, props.theme)}px;
        border-radius: 4px;
        font-size: 16px;
      `
  }
}

export type InputProps = { readOnly?: boolean } & InputBorderProps &
  InputSizeProps &
  TypographyProps &
  LayoutProps

export const Input: StyledComponent<
  InputProps,
  HTMLAttributes<HTMLInputElement>
> = styled.input<InputProps>`
  display: flex;
  outline: 0;
  font-family: ${themeFont};
  color: ${themeColor('darks.1')};
  ${size}
  ${inputBorder}
  ${typography}
  ${layout}
`
Input.displayName = 'Input'

export const TextArea: StyledComponent<
  InputProps,
  HTMLAttributes<HTMLTextAreaElement>
> = styled(Input.withComponent('textarea'))`
  resize: none;
`
TextArea.displayName = 'TextArea'
