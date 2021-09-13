import { Story } from '@storybook/react'
import { Spinner } from '../../'

export default {
  title: 'Primitives/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
  },
}

const Template: Story<{ color: string; size: number }> = props => {
  return <Spinner {...props} />
}
export const Example = Template.bind({})
Example.args = {
  color: 'primary',
  size: 24,
}
