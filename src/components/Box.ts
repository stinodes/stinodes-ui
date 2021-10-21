import styled, { StyledComponent } from '@emotion/styled'
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
import { HTMLAttributes } from 'react'

export type BoxProps = LayoutProps & SpaceProps & ColorProps

const boxFunc = compose(layout, space, color)

export const Box: StyledComponent<
  BoxProps,
  HTMLAttributes<HTMLDivElement>
> = styled('div', { shouldForwardProp })`
  box-sizing: border-box;
  ${boxFunc}
`
Box.displayName = 'Box'
