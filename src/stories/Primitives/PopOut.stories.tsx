import React, { useState } from 'react'
import { Button, Card, Flex, PopOut, Text } from '../../'

export default {
  title: 'Primitives/PopOut',
  component: PopOut,
  argTypes: {
    trigger: {
      control: {
        type: 'select',
        options: ['hover', 'click', 'hidden', 'visible'],
      },
    },
    align: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
    },
  },
}

export const Hover = props => {
  return (
    <Flex width={400}>
      <PopOut
        {...props}
        content={
          <Card shadow bg="lights.4" px={2} py={1}>
            <Text>This is a permanent pop-out.</Text>
          </Card>
        }>
        <Button>Hover Me!</Button>
      </PopOut>
    </Flex>
  )
}
Hover.args = {
  trigger: 'hover',
  align: 'left',
  offset: 16,
  underlay: false,
  closeOnClick: false,
}
