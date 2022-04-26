import styled, { StyledComponent } from '@emotion/styled'
import { HTMLAttributes } from 'react'
import {
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import { themeFont, themeColor } from '../theme'

const typoStyling = compose(typography, space, color)

export type TextProps = TypographyProps & ColorProps & SpaceProps

export const Text: StyledComponent<
  TextProps,
  HTMLAttributes<HTMLSpanElement>
> = styled.span`
  font-family: ${themeFont};
  margin: 0;
  color: ${themeColor('typography.1')};
  line-height: 1.3;
  ${typoStyling};
`

export const Paragraph: StyledComponent<
  TextProps,
  HTMLAttributes<HTMLParagraphElement>
> = styled(Text.withComponent('p'))`
  font-size: 16px;
`
type HeadingComponent = StyledComponent<
  TextProps,
  HTMLAttributes<HTMLHeadingElement>
>
export const H1: HeadingComponent = styled(Text.withComponent('h1'))`
  font-size: 28px;
`
export const H2: HeadingComponent = styled(Text.withComponent('h2'))`
  font-size: 24px;
`
export const H3: HeadingComponent = styled(Text.withComponent('h3'))`
  font-size: 20px;
`
export const H4: HeadingComponent = styled(Text.withComponent('h4'))`
  font-size: 16px;
`
