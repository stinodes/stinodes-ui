import styled from '@emotion/styled'
import { typography, color, layout } from 'styled-system'
import { themeFont, themeColor, Theme } from '../theme'
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

type Props = { error?: boolean; border?: string; highlight?: boolean }

export const Input = styled.input<Props>`
  display: flex;
  border-radius: 4px;
  outline: 0;
  padding: 8px;
  font-size: 16px;
  font-family: ${themeFont};
  color: ${themeColor('darks.1')};
  ${inputBorder}
  ${typography}
  ${layout}
`
Input.displayName = 'Input'

export const TextArea = styled(Input.withComponent('textarea'))`
  resize: none;
`
TextArea.displayName = 'TextArea'
