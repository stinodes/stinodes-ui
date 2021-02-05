import React from 'react'

import { Button } from '@stinodes-ui/button'

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

const Template = props => {
  //   return <button />
  return <Button {...props} />
}
export const Example = Template.bind({})
Example.args = {
  bg: 'primary',
  color: 'white',
  size: 'large',
  shadow: false,
  important: false,
  children: 'Click me!',
}
