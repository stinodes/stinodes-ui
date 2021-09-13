import { Story } from '@storybook/react'
import { ComponentPropsWithoutRef } from 'react'
import { Checkbox } from '../../'

export default {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  argTypes: {
    border: { control: 'color' },
    color: { control: 'color' },
  },
}

const Template: Story<ComponentPropsWithoutRef<typeof Checkbox>> = props => {
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
