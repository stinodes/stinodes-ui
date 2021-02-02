import { transparentize } from 'polished'
import { Theme } from '@emotion/react'
import { themeColor } from '@stinodes-ui/theme'

const outlineWidth = 4
export const boxShadowOutline = (props: {
  bg?: string
  theme: Theme
  showOutline?: boolean
}) => {
  const color = themeColor(props.bg || 'primary', props.theme)
  return `
      box-shadow: 0 0 0 ${3}px ${
    props.showOutline ? transparentize(0.3, color) : 'transparent'
  };
      transition: box-shadow .3s ease;
      :focus {
        box-shadow: 0 0 0 ${3}px ${transparentize(0.3, color)};
      }
    `
}
export const outline = (props: {
  bg?: string
  size?: 'circle' | string
  theme: Theme
  showOutline?: boolean
}) => {
  const borderRadius = props.size === 'circle' ? '50%' : `${4 + outlineWidth}px`
  const color = themeColor(props.bg || 'primary', props.theme)
  return `
    position: relative;
    :before {
      content: " ";
      pointer-events: none;
      position: absolute;
      border-color: ${transparentize(0.3, color)};
      border-style: solid;
      transition: opacity .3s ease;
      opacity: ${props.showOutline ? 1 : 0};
      top: -${outlineWidth}px;
      right: -${outlineWidth}px;
      bottom: -${outlineWidth}px;
      left: -${outlineWidth}px;
      border-radius: ${borderRadius};
      border-width: ${outlineWidth}px;
    }
    :focus {
      :before { 
        opacity: 1;
      }
    }
  `
}
