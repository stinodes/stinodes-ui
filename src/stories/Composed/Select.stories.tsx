import React, { useState } from 'react'
import { Select } from '../../'

export default {
  title: 'Composed/Select',
  component: Select,
  argTypes: {
    border: { control: 'color' },
    color: { control: 'color' },
  },
}

const options = [...Array(10)].map((__, n) => ({
  label: 'Option ' + n,
  value: n,
}))
const Template = props => {
  const [state, setState] = useState(null)
  return (
    <Select {...props} options={options} onSelect={setState} value={state} />
  )
}
export const Example = Template.bind({})
Example.args = {
  color: 'darks.1',
  error: false,
  highlight: false,
  placeholder: 'Placeholder text...',
}
