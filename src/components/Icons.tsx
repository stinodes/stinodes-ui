import { ComponentPropsWithoutRef, ComponentType } from 'react'
import { ResponsiveValue } from 'styled-system'
import { Text } from './Typography'

const I: typeof Text = Text.withComponent('i')

type IconProps = {
  icon: string
  size?: ResponsiveValue<number>
  className?: string
}

export const Icon: ComponentType<
  IconProps & ComponentPropsWithoutRef<typeof Text>
> = ({ icon, className, ...props }) => (
  <I
    fontSize={props.size}
    {...props}
    className={`feather icon-${icon} ${className}`}
  />
)
Icon.displayName = 'Icon'
Icon.defaultProps = {
  size: 16,
  color: 'inherit',
}
