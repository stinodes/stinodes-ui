import { ComponentType, InputHTMLAttributes, ReactNode } from 'react'
import styled from '@emotion/styled'
import { tint, transparentize } from 'polished'
import { ResponsiveValue } from 'styled-system'
import { Theme, themeColor } from '../theme'
import { Icon } from './Icons'
import { Text } from './Typography'

type BorderColorProps = {
  border?: string
  error?: boolean
  highlight?: boolean
}
const borderColor = (props: BorderColorProps & { theme: Theme }) => {
  const highlightColor = themeColor(props.border || 'primaries.2', props.theme)
  let color = themeColor('surfaces.0', props.theme)

  if (props.error) color = themeColor('error', props.theme)
  if (props.highlight) color = highlightColor

  return `
    span.checkbox {
      border: ${color} 2px solid;
      box-shadow: 0 0 4px transparent;
    }
    input:hover ~ span.checkbox,
    span.checkbox:hover {
      border-color: ${highlightColor};
    }
    input:checked:hover ~ span.checkbox,
    input:checked ~ span.checkbox:hover {
      border-color: ${tint(0.2, highlightColor)};
      background-color: ${tint(0.2, highlightColor)};
    }
    input:focus ~ span.checkbox {
      border-color: ${highlightColor};
      box-shadow: 0 0 0 4px
        ${transparentize(0.6, highlightColor)};
    }
    input:checked ~ span.checkbox {
      background-color: ${highlightColor};
      border-color: ${highlightColor};
    }
    `
}

const StyledCheckbox = styled.label<BorderColorProps>`
  position: relative;
  display: flex;
  align-items: center;
  input {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
  }
  span.checkbox {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease,
      background-color 0.3s ease;
    margin-right: 8px;

    i {
      opacity: 0;
      font-size: 16px;
      transition: opacity 0.3s ease;
      color: ${themeColor('surfaces.4')};
    }
  }
  input:checked ~ span.checkbox {
    i {
      opacity: 1;
    }
  }
  ${borderColor}
`

type InputProps = InputHTMLAttributes<HTMLInputElement>
type TextProps = {
  color?: ResponsiveValue<string>
  fontSize?: ResponsiveValue<string | number>
  children: ReactNode
}
type CheckboxProps = InputProps & TextProps & BorderColorProps

export const Checkbox: ComponentType<CheckboxProps> = ({
  border,
  error,
  highlight,
  children,
  color,
  fontSize,
  ...props
}) => (
  <StyledCheckbox border={border} error={error} highlight={highlight}>
    <input {...props} type="checkbox" />
    <span className="checkbox">
      <Icon icon="check" />
    </span>
    <Text color={color || 'typography.3'} fontSize={fontSize}>
      {children}
    </Text>
  </StyledCheckbox>
)
Checkbox.displayName = 'Checkbox'
