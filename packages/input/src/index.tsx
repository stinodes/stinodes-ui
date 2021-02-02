import styled from '@emotion/styled'
import { typography, color } from 'styled-system'
import { themeFont, themeColor } from '@stinodes-ui/theme'
import { boxShadowOutline } from '@stinodes-ui/utils/lib/outline'

export const Label = styled.label`
  font-family: ${themeFont};
  color: ${themeColor('darks.4')};
  ${typography}
  ${color}
`
const inputBorder = props => {
  const highlightColor = themeColor(props.border || 'primaries.2', props.theme)
  let color = themeColor('lights.0', props.theme)

  if (props.error) color = themeColor('error', props.theme)
  if (props.highlight) color = highlightColor

  return `
    border: 2px solid;
    border-color: ${color};
    transition: border-color .2s ease;
    :focus, :hover {
      border-color: ${highlightColor}
    }
    ${boxShadowOutline({ ...props, bg: props.border || 'primaries.2' })}
    `
}

export const Input = styled.input`
  display: flex;
  border-radius: 4px;
  outline: 0;
  padding: 8px;
  font-size: 16px;
  font-family: ${themeFont};
  color: ${themeColor('darks.1')};
  ${inputBorder}
`
