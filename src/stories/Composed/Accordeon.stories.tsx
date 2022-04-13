import { Story } from '@storybook/react'
import { useState } from 'react'
import { Accordeon } from '../../components/Accordeon'
import { Card } from '../../components/Card'
import { Paragraph } from '../../components/Typography'

export default {
  title: 'Composed/Accordeon',
  component: Accordeon,
  argTypes: {},
}

const Template: Story<{ text: string }> = ({ text: textProp }) => {
  const [state, setState] = useState<boolean>(false)
  const [text, setText] = useState(textProp)
  return (
    <div>
      <Card width={400} p={2} mb={4} bg="lights.2" flexDirection="column">
        <Accordeon
          visible={state}
          onChange={setState}
          header={`${state ? 'Close' : 'Open'} accordeon`}>
          <Paragraph>{text}</Paragraph>
        </Accordeon>
      </Card>
      <textarea value={text} onChange={e => setText(e.target.value)} />
    </div>
  )
}
export const Example = Template.bind({})
Example.args = {
  text: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    `,
}
