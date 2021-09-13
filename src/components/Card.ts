import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Flex, FlexProps } from './Flex'
import { Theme, themeColor } from '../theme'

type Props = FlexProps & {
  shadow?: boolean | string
  border?: boolean | string
}

const cardBorder = ({ border, theme }: Props & { theme: Theme }) => {
  if (!border) return undefined
  const borderColorName = border === true ? 'darks.2' : border
  const color = themeColor(borderColorName, theme)
  return `border: ${transparentize(0.9, color)} 1px solid;`
}

const cardShadow = ({ shadow, theme }: Props & { theme: Theme }) => {
  if (!shadow) return undefined
  const shadowColorName = shadow === true ? 'darks.2' : shadow
  const color = themeColor(shadowColorName, theme)
  return `box-shadow: ${transparentize(0.7, color)} 0 8px 24px;`
}

export const Card = styled(Flex)<Props>`
  border-radius: 4px;
  ${cardBorder}
  ${cardShadow}
`
