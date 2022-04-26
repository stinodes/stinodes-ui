import { Story } from '@storybook/react'
import { useState } from 'react'
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

const Template: Story<{
  color: string
  error: boolean
  highlight: boolean
  placeholder: string
}> = props => {
  const [state, setState] = useState<number | null>(null)
  return (
    <Select
      {...props}
      options={options}
      onChange={(value: number) => setState(value)}
      value={state}
    />
  )
}
export const Example = Template.bind({})
Example.args = {
  color: 'typography.1',
  error: false,
  highlight: false,
  placeholder: 'Placeholder text...',
}
