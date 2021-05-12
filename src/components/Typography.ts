import styled from '@emotion/styled'
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

type Props = TypographyProps & ColorProps & SpaceProps

export const Text = styled.span<Props>`
  font-family: ${themeFont};
  margin: 0;
  color: ${themeColor('darks.1')};
  line-height: 1.3;
  ${typoStyling};
`

export const Paragraph = styled(Text.withComponent('p'))<Props>`
  font-size: 16px;
`
export const H1 = styled(Text.withComponent('h1'))<Props>`
  font-size: 28px;
`
export const H2 = styled(Text.withComponent('h2'))<Props>`
  font-size: 24px;
`
export const H3 = styled(Text.withComponent('h3'))<Props>`
  font-size: 20px;
`
export const H4 = styled(Text.withComponent('h4'))<Props>`
  font-size: 16px;
`
