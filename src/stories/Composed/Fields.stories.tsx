import { useState } from 'react'
import { SelectField, TextAreaField, TextField } from '../../'

export default {
  title: 'Composed/Form Fields',
  component: null,
  argTypes: {
    size: {
      control: { type: 'select', options: ['large', 'small'] },
    },
  },
}

export const TextInput = (props: {
  label: string
  help: string
  error: boolean | string
}) => {
  const [value, setValue] = useState<undefined | string>()
  return (
    <TextField
      {...props}
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
    />
  )
}
TextInput.args = {
  label: 'Text Input',
  help: '',
  error: '',
}

export const TextArea = (props: {
  label: string
  help: string
  error: boolean | string
}) => {
  const [value, setValue] = useState<undefined | string>()
  return (
    <TextAreaField
      {...props}
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
    />
  )
}
TextArea.args = {
  label: 'Text Area',
  help: '',
  error: '',
}

export const Select = (props: {
  label: string
  help: string
  error: boolean | string
}) => {
  const [value, setValue] = useState<null | string>(null)
  return (
    <SelectField
      {...props}
      options={['Option 1', 'Option 2', 'Option 3']}
      value={value}
      onChange={setValue}
    />
  )
}
Select.args = {
  label: 'Select',
  help: '',
  error: '',
}
