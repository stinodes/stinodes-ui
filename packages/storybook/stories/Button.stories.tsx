import React from 'react'

import { Button } from '@stinodes-ui/button'

export default {
  title: 'Primitives/Button',
  component: Button,
}

const Template = props => {
  //   return <button />
  return <Button {...props} />
}
export const Example = Template.bind({})
Example.args = {
  bg: 'primary',
  size: 'large',
  children: 'Click me!',
}
