import styled from '@emotion/styled'
import {
  compose,
  layout,
  space,
  color,
  flexbox,
  LayoutProps,
  SpaceProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

type Props = LayoutProps & SpaceProps & ColorProps & FlexboxProps
const flexFunc = compose(layout, space, color, flexbox)
export const Flex = styled('div', { shouldForwardProp })<Props>(
  { display: 'flex', boxSizing: 'border-box' },
  flexFunc,
)

export type { Props as FlexProps }
