import styled from '@emotion/styled'
import { ComponentProps } from 'react'
import { Flex } from '@stinodes-ui/flex'
import { Theme, themeColor } from '@stinodes-ui/theme'

type Props = ComponentProps<typeof Flex> & {
  shadow?: boolean | string
  border?: boolean | string
  theme: Theme
}

const cardBorder = ({ border, theme }: Props) => {
  if (!border) return undefined
  const borderColorName = border === true ? 'darks.2' : border
  const color = themeColor(borderColorName, theme)
  return `border: ${color} 1px solid`
}
const cardShadow = ({ shadow, theme }: Props) => {
  if (!shadow) return undefined
  const shadowColorName = shadow === true ? 'darks.2' : shadow
  const color = themeColor(shadowColorName, theme)
  return `boxShadow: ${color} 0 8px 24px`
}

export const Card = styled(Flex)<Props>`
  border-radius: 4px;
  ${cardBorder}
  ${cardShadow}
`
