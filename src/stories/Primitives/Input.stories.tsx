import { Story } from '@storybook/react'
import { Input, TextArea } from '../../'

export default {
  title: 'Primitives/Input',
  component: Input,
  argTypes: {
    border: { control: 'color' },
    color: { control: 'color' },
  },
}

const Template: Story<{
  color: string
  error: boolean
  highlight: boolean
  placeholder: string
}> = props => {
  //   return <button />
  return <Input {...props} />
}

export const TextInput: Story<{
  color: string
  error: boolean
  highlight: boolean
  placeholder: string
}> = Template.bind({})
TextInput.args = {
  color: 'darks.1',
  error: false,
  highlight: false,
  placeholder: 'Placeholder text...',
}

export const TextAreaInput: Story<{
  color: string
  error: boolean
  highlight: boolean
  placeholder: string
}> = props => {
  return <TextArea {...props} />
}
TextAreaInput.args = {
  color: 'darks.1',
  error: false,
  highlight: false,
  placeholder: 'Placeholder text...',
}