import React from 'react'
import { Input, TextArea } from '../../'

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
export const TextInput = Template.bind({})
TextInput.args = {
  color: 'darks.1',
  error: false,
  highlight: false,
  placeholder: 'Placeholder text...',
}

export const TextAreaInput = props => {
  return <TextArea {...props} />
}
TextAreaInput.args = {
  color: 'darks.1',
  error: false,
  highlight: false,
  placeholder: 'Placeholder text...',
}
