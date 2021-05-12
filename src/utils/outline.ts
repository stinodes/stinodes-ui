import { transparentize } from 'polished'
import { Theme } from '@emotion/react'
import { themeColor } from '../theme'

const outlineWidth = 4
export const boxShadowOutline = (
  props: {
    outlineColor?: string
    bg?: string
    theme: Theme
    showOutline?: boolean
  },
  shadow?: string,
) => {
  const color = themeColor(
    props.outlineColor || props.bg || 'primary',
    props.theme,
  )
  return `
    box-shadow: ${shadow}${shadow && ', '}0 0 0 ${outlineWidth}px ${
    props.showOutline ? transparentize(0.6, color) : 'transparent'
  };
    :focus {
      box-shadow: ${shadow}${
    shadow && ', '
  }0 0 0 ${outlineWidth}px ${transparentize(0.6, color)};

    }
  `
}
