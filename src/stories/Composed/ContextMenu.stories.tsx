import { ContextMenu, Text } from '../../'

export default {
  title: 'Composed/Context Menu',
  component: ContextMenu,
  argTypes: {},
}

export const Simple = () => {
  return (
    <div style={{ position: 'absolute', top: 32, right: 32 }}>
      <ContextMenu>
        <ContextMenu.Item>Option 1</ContextMenu.Item>
        <ContextMenu.Item>Option 2</ContextMenu.Item>
        <ContextMenu.Item>Option 3</ContextMenu.Item>
        <ContextMenu.Item>Option 4</ContextMenu.Item>
      </ContextMenu>
    </div>
  )
}
Simple.args = {}

export const ExtendedProps = () => {
  return (
    <div style={{ position: 'absolute', top: 32, right: 32 }}>
      <ContextMenu
        cardProps={{ bg: 'surfaces.3', p: 3 }}
        buttonProps={{ bg: 'primary', color: 'white' }}>
        <Text>This is a menu from a customized context menu</Text>
      </ContextMenu>
    </div>
  )
}
ExtendedProps.args = {}
