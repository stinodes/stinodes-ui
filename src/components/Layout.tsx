import {
  Fragment,
  Children,
  ReactNode,
  cloneElement,
  ReactElement,
} from 'react'
import { ResponsiveValue } from 'styled-system'
import { Box } from './Box'
import { Flex, FlexBoxProps } from './Flex'

type LayoutProps = Omit<FlexBoxProps, 'color'> & {
  direction?: 'column' | 'row'
  spacing?: ResponsiveValue<string | number>
  children: ReactNode
}

export const Layout = ({
  direction,
  spacing,
  children,
  ...props
}: LayoutProps) => {
  const flexProps = props
  const childrenArray = Children.toArray(children) as ReactElement[]
  const spaceProps = {
    pr: direction === 'row' ? spacing : null,
    pb: direction === 'column' ? spacing : null,
  }

  return (
    <Flex {...flexProps} flexDirection={direction}>
      {childrenArray.map((child, i) => (
        <Fragment key={i}>
          {cloneElement(child, { key: `${i}-element` })}
          {child && i < childrenArray.length - 1 && (
            <Box {...spaceProps} key={`${i}-spacing`} />
          )}
        </Fragment>
      ))}
    </Flex>
  )
}
Layout.defaultProps = {
  direction: 'column',
}
