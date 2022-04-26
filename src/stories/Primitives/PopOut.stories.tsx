import { Story } from '@storybook/react'
import { not } from 'ramda'
import { useState } from 'react'
import { Button, Card, Flex, PopOut, Text } from '../../'

export default {
  title: 'Primitives/PopOut',
  component: PopOut,
  argTypes: {
    trigger: {
      control: {
        type: 'select',
        options: ['hover', 'click', 'hide', 'visible'],
      },
    },
    align: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
    },
  },
}

export const Uncontrolled: Story<{
  trigger: 'hover' | 'click' | 'hide' | 'visible'
  align: 'left' | 'center' | 'right'
  offset: number
  underlay: boolean
  closeOnClick: boolean
}> = props => {
  return (
    <Flex width={400}>
      <PopOut
        {...props}
        content={
          <Card shadow bg="surfaces.4" px={2} py={1}>
            <Text>This is a pop-out.</Text>
          </Card>
        }>
        <Button>Hover Me!</Button>
      </PopOut>
    </Flex>
  )
}
Uncontrolled.args = {
  trigger: 'hover',
  align: 'left',
  offset: 16,
  underlay: false,
  closeOnClick: false,
}

export const Controlled: Story<{
  trigger: 'hover' | 'click' | 'hide' | 'visible'
  align: 'left' | 'center' | 'right'
  offset: number
  underlay: boolean
  closeOnClick: boolean
}> = props => {
  const [state, setState] = useState(false)
  return (
    <Flex width={400} alignItems="center">
      <Button onClick={() => setState(not)} size="small" mr={2}>
        Toggle
      </Button>
      <PopOut
        {...props}
        visible={state}
        onClose={() => setState(false)}
        content={
          <Card shadow bg="surfaces.4" px={2} py={1}>
            <Text>This is a controlled pop-out.</Text>
          </Card>
        }>
        <Card shadow bg="surfaces.4" p={3}>
          <Text>I am a card with a controlled pop-out</Text>
        </Card>
      </PopOut>
    </Flex>
  )
}
Controlled.args = {
  trigger: 'hover',
  align: 'left',
  offset: 16,
  underlay: false,
  closeOnClick: false,
}
