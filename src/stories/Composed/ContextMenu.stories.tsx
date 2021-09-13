import { ContextButton, Text } from '../../'

export default {
  title: 'Composed/Context Menu',
  component: ContextButton,
  argTypes: {},
}

export const Simple = () => {
  return (
    <div style={{ position: 'absolute', top: 32, right: 32 }}>
      <ContextButton>
        <ContextButton.Item>Option 1</ContextButton.Item>
        <ContextButton.Item>Option 2</ContextButton.Item>
        <ContextButton.Item>Option 3</ContextButton.Item>
        <ContextButton.Item>Option 4</ContextButton.Item>
      </ContextButton>
    </div>
  )
}
Simple.args = {}

export const ExtendedProps = () => {
  return (
    <div style={{ position: 'absolute', top: 32, right: 32 }}>
      <ContextButton
        cardProps={{ bg: 'darks.4', p: 3 }}
        buttonProps={{ bg: 'primary', color: 'white' }}>
        <Text>This is a menu from a customized context menu</Text>
      </ContextButton>
    </div>
  )
}
ExtendedProps.args = {}
