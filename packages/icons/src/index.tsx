import React, { ComponentProps } from 'react'
import { Text } from '@stinodes-ui/typography'
import { ResponsiveValue } from 'styled-system'

const I = Text.withComponent('i')

type TextProps = ComponentProps<typeof Text>
type Props = TextProps & { icon: string; size?: ResponsiveValue<number> }

export const Icon = ({ icon, className, ...props }: Props) => (
  <I
    color="inherit"
    fontSize={props.size || 16}
    {...props}
    className={`feather icon-${icon} ${className}`}
  />
)
