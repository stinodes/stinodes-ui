import { ComponentType, HTMLAttributes } from 'react'
import { Flex, FlexBoxProps } from './Flex'

type GridProps = {
  gutter?: number
}
type ElProps = HTMLAttributes<HTMLDivElement>

type RowProps = GridProps &
  Omit<FlexBoxProps, 'mx' | 'ml' | 'mr' | 'flexWrap'> &
  ElProps
export const Row: ComponentType<RowProps> = ({ gutter = 3, ...props }) => (
  <Flex {...props} mx={-gutter} flexWrap="wrap" />
)
Row.displayName = 'Row'

type ColProps = GridProps &
  Omit<FlexBoxProps, 'mx' | 'ml' | 'mr' | 'flexWrap'> &
  ElProps
export const Col: ComponentType<ColProps> = ({ gutter = 3, ...props }) => (
  <Flex flexDirection="column" {...props} px={gutter} />
)
Col.displayName = 'Col'
