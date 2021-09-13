import styled from '@emotion/styled'
import {
  compose,
  layout,
  space,
  color,
  LayoutProps,
  SpaceProps,
  ColorProps,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

type Props = LayoutProps & SpaceProps & ColorProps
const boxFunc = compose(layout, space, color)
export const Box = styled('div', { shouldForwardProp })<Props>(
  { boxSizing: 'border-box' },
  boxFunc,
)

