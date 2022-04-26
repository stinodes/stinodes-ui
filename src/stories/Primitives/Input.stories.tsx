import { Story } from '@storybook/react'
import { Input, TextArea } from '../../'

export default {
  title: 'Primitives/Input',
  component: Input,
  argTypes: {
    border: { control: 'color' },
    color: { control: 'color' },
    size: {
      control: { type: 'select', options: ['large', 'small'] },
    },
  },
}

const Template: Story<{
  color: string
  error: boolean
  highlight: boolean
  placeholder: string
}> = props => {
  return <Input {...props} />
}

export const TextInput: Story<{
  color: string
  error: boolean
  highlight: boolean
  placeholder: string
}> = Template.bind({})
TextInput.args = {
  color: 'typography.1',
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
  color: 'typography.1',
  error: false,
  highlight: false,
  placeholder: 'Placeholder text...',
}
