import React from 'react'

import { Icon } from '@stinodes-ui/icons'

export default {
  title: 'Primitives/Icons',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
  },
}

const Template = props => {
  return <Icon {...props} />
}
export const Example = Template.bind({})
Example.args = {
  color: 'primary',
  icon: 'compass',
  size: 32,
}
