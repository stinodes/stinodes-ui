import React from 'react'

import { Checkbox } from '@stinodes-ui/checkbox'

export default {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  argTypes: {
    border: { control: 'color' },
    color: { control: 'color' },
  },
}

const Template = props => {
  return <Checkbox {...props} />
}
export const Example = Template.bind({})
Example.args = {
  color: 'darks.3',
  border: 'primary',
  error: false,
  highlight: false,
  children: 'Checkbox label',
}
