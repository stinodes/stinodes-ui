import styled, { StyledComponent } from '@emotion/styled'
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
import { HTMLAttributes } from 'react'

export type FlexBoxProps = LayoutProps & SpaceProps & ColorProps & FlexboxProps
const flexFunc = compose(layout, space, color, flexbox)
export const Flex: StyledComponent<
  FlexBoxProps,
  HTMLAttributes<HTMLDivElement>
> = styled('div', { shouldForwardProp })`
  display: flex;
  box-sizing: border-box;
  ${flexFunc}
`
Flex.displayName = 'Flex'
