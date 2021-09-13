import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
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
    const colorString = color ? themeColor(color, theme) : ''
    const sizeNumber = size || 0
    return {
      border: `${sizeNumber * 0.13}px solid ${transparentize(
        0.8,
        colorString,
      )}`,
      borderLeftColor: colorString,
      width: size,
      height: size,
    }
  },
)
Spinner.defaultProps = {
  size: 24,
  color: 'primary',
}
