import React from 'react'

import { Input } from '@stinodes-ui/input'

export default {
  title: 'Primitives/Input',
  component: Input,
  argTypes: {
    border: { control: 'color' },
    color: { control: 'color' },
  },
}

const Template = props => {
  //   return <button />
  return <Input {...props} />
}
export const Example = Template.bind({})
Example.args = {
  color: 'darks.1',
  error: false,
  highlight: false,
  placeholder: 'Placeholder text...',
  value: '',
}
