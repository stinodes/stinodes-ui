import styled from '@emotion/styled'
import { color, compose, space, typography } from 'styled-system'
import { themeFont, themeColor } from '@stinodes-ui/theme'

const typoStyling = compose(typography, space, color)

export const Text = styled.span`
  font-family: ${themeFont};
  margin: 0;
  color: ${themeColor('darks.1')};
  line-height: 1.3;
  ${typoStyling};
`

export const Paragraph = styled(Text.withComponent('p'))`
  font-size: 16px;
`
export const H1 = styled(Text.withComponent('h1'))`
  font-size: 28px;
`
export const H2 = styled(Text.withComponent('h2'))`
  font-size: 24px;
`
export const H3 = styled(Text.withComponent('h3'))`
  font-size: 20px;
`
export const H4 = styled(Text.withComponent('h4'))`
  font-size: 16px;
`
