import { Story } from '@storybook/react'
import { useState } from 'react'
import { Accordeon } from '../../components/Accordeon'
import { Paragraph } from '../../components/Typography'

export default {
  title: 'Composed/Accordeon',
  component: Accordeon,
  argTypes: {},
}

const Template: Story<{}> = () => {
  const [state, setState] = useState<boolean>(false)
  return (
    <Accordeon
      visible={state}
      onChange={setState}
      header={`${state ? 'Close' : 'Open'} accordeon`}>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </Accordeon>
  )
}
export const Example = Template.bind({})
Example.args = {}
