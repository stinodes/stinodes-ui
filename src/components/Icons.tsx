import { ComponentPropsWithoutRef } from 'react'
import { ResponsiveValue } from 'styled-system'
import { Text } from './Typography'

const I: typeof Text = Text.withComponent('i')

type IconProps = {
  icon: string
  size?: ResponsiveValue<number>
  className?: string
}

export const Icon = ({
  icon,
  className,
  ...props
}: IconProps & ComponentPropsWithoutRef<typeof Text>) => (
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
