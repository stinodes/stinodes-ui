import { keyframes } from '@emotion/core'
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

export const Spinner = styled.div<{ size?: number; color?: string }>(
  {
    borderRadius: '50%',
    background: 'transparent',
    animation: `${animation} 1s linear infinite`,
  },
  ({ theme, size, color }) => {
    const colorStyle = themeColor(color, theme)
    return {
      border: `${24 * 0.13}px solid ${transparentize(0.8, colorStyle)}`,
      borderLeftColor: colorStyle,
      width: size,
      height: size,
    }
  },
)
Spinner.defaultProps = {
  size: 24,
  color: 'primary',
}
