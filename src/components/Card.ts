import styled, { StyledComponent } from '@emotion/styled'
import { transparentize } from 'polished'
import { Flex, FlexBoxProps } from './Flex'
import { Theme, themeColor } from '../theme'
import { HTMLAttributes } from 'react'

type CardBorderProps = {
  border?: boolean | string
}
const cardBorder = ({
  border,
  theme,
}: CardBorderProps & { bg?: any; theme: Theme }) => {
  if (!border) return undefined
  const borderColorName = border === true ? 'shadow' : border
  const color = themeColor(borderColorName, theme)
  return `border: ${transparentize(0.7, color)} 1px solid;`
}

type CardShadowProps = {
  shadow?: boolean | string
}
const cardShadow = ({ shadow, theme }: CardShadowProps & { theme: Theme }) => {
  if (!shadow) return undefined
  const shadowColorName = shadow === true ? 'shadow' : shadow
  const color = themeColor(shadowColorName, theme)
  if (!color) return `box-shadow: ${transparentize(0.3, color)} 0 8px 24px;`
  return `box-shadow: ${transparentize(0.7, color)} 0 8px 24px;`
}

export type CardProps = FlexBoxProps & CardBorderProps & CardShadowProps
export const Card: StyledComponent<
  CardProps,
  HTMLAttributes<HTMLElement>
> = styled(Flex)`
  border-radius: 4px;
  ${cardBorder}
  ${cardShadow}
`
Card.displayName = 'Card'
