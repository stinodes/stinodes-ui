import styled, { StyledComponent } from '@emotion/styled'
import { HTMLProps } from 'react'
import {
  typography,
  color,
  layout,
  TypographyProps,
  LayoutProps,
} from 'styled-system'
import { themeFont, themeColor, Theme, themeSpace } from '../theme'
import { boxShadowOutline } from '../utils'

export type InputStyleProps = {
  border?: string
  highlight?: boolean
  size?: 'small' | 'large'
} & TypographyProps &
  LayoutProps

type UnsafeProps = 'size' | 'height' | 'width' | 'compact'
export type SafeInputProps<El = HTMLInputElement> = Omit<
  HTMLProps<El>,
  UnsafeProps
>

export const Label = styled.label`
  font-family: ${themeFont};
  color: ${themeColor('darks.4')};
  ${typography}
  ${color}
`

const inputBorder = (props: InputStyleProps & { theme: Theme }) => {
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

const size = (props: InputStyleProps & { theme: Theme }) => {
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

export const Input: StyledComponent<
  InputStyleProps,
  SafeInputProps<HTMLInputElement>
> = styled.input<InputStyleProps>`
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
  InputStyleProps,
  SafeInputProps<HTMLTextAreaElement>
> = styled(Input.withComponent('textarea'))`
  resize: none;
`
TextArea.displayName = 'TextArea'
