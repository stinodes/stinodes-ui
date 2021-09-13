import { Story } from '@storybook/react'
import { Icon } from '../../'

export default {
  title: 'Primitives/Icons',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
  },
}

const Template: Story<{
  color: string
  icon: string
  size: number
}> = props => {
  return <Icon {...props} />
}
export const Example = Template.bind({})
Example.args = {
  color: 'primary',
  icon: 'compass',
  size: 32,
}
