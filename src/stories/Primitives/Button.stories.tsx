import React from 'react'
import { Button, FlexButton, Text } from '../../'

export default {
  title: 'Primitives/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select', options: ['large', 'small', 'circle'] },
    },
    bg: { control: 'color' },
    color: { control: 'color' },
  },
}

export const Example = props => {
  return <Button {...props} />
}
Example.args = {
  bg: 'primary',
  color: 'white',
  size: 'large',
  shadow: false,
  important: false,
  children: 'Click me!',
}

export const FlexButtonExample = props => {
  return (
    <FlexButton {...props} width={400} height={250} p={3}>
      <Text>Some content in my flex container</Text>
    </FlexButton>
  )
}
FlexButtonExample.args = {
  bg: 'lights.4',
  shadow: false,
  important: false,
}
