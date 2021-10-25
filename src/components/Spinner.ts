import { keyframes } from '@emotion/react'
import styled, { StyledComponent } from '@emotion/styled'
import { transparentize } from 'polished'
import { HTMLAttributes } from 'react'
import { themeColor } from '../theme'

const animation = keyframes({
  from: {
    transform: 'rotate(0)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

type SpinnerProps = { size?: number; color?: string }
export const Spinner: StyledComponent<
  SpinnerProps,
  HTMLAttributes<HTMLDivElement>
> = styled.div<SpinnerProps>`
  border-radius: 50%;
  background: transparent;
  animation: ${animation} 1s linear infinite;
  ${({ theme, size, color }) => {
    const colorString = color ? themeColor(color, theme) : ''
    const sizeNumber = size || 0
    return `
      border: ${sizeNumber * 0.13}px solid ${transparentize(0.8, colorString)};
      border-left-color: ${colorString};
      width: ${size}px;
      height: ${size}px;
   `
  }};
`
Spinner.displayName = 'Spinner'
Spinner.defaultProps = {
  size: 24,
  color: 'primary',
}
