import { Story } from '@storybook/react'
import { ComponentPropsWithoutRef } from 'react'
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

export const Example: Story<ComponentPropsWithoutRef<typeof Button>> =
  props => {
    return <Button {...props} />
  }
Example.args = {
  bg: 'primary',
  color: 'white',
  size: 'large',
  shadow: false,
  important: false,
  children: 'Click me!',
  loading: false,
}

export const FlexButtonExample: Story<{
  bg: string
  shadow: boolean
  important: boolean
  loading: boolean
}> = props => {
  return (
    <FlexButton {...props} width={400} height={250} p={3}>
      <Text>Some content in my flex container</Text>
    </FlexButton>
  )
}
FlexButtonExample.args = {
  bg: 'surfaces.4',
  shadow: false,
  important: false,
  loading: false,
}
