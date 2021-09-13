import { ComponentProps } from 'react'
import { Flex } from './Flex'

type GridProps = ComponentProps<typeof Flex> & {
  gutter?: number
}
export const Row = ({ gutter = 3, ...props }: GridProps) => (
  <Flex {...props} mx={-gutter} flexWrap="wrap" />
)
export const Col = ({ gutter = 3, ...props }: GridProps) => (
  <Flex flexDirection="column" {...props} px={gutter} />
)
