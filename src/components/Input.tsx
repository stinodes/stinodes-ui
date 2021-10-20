import styled from '@emotion/styled'
import { typography, color, layout } from 'styled-system'
import { themeFont, themeColor, Theme, themeSpace } from '../theme'
import { boxShadowOutline } from '../utils'

export const Label = styled.label`
  font-family: ${themeFont};
  color: ${themeColor('darks.4')};
  ${typography}
  ${color}
`
const inputBorder = (props: Props & { theme: Theme }) => {
  const highlightColor = themeColor(props.border || 'primaries.2', props.theme)
  let color = themeColor('lights.0', props.theme)

  if (props.error) color = themeColor('error', props.theme)
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

const size = (props: Props & { theme: Theme }) => {
  switch (props.size) {
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

type Props = {
  error?: boolean
  border?: string
  highlight?: boolean
  size: 'small' | 'large'
}

export const Input = styled.input<Props>`
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

export const TextArea = styled(Input.withComponent('textarea'))`
  resize: none;
`
TextArea.displayName = 'TextArea'
