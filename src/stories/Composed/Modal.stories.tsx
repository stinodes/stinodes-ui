import React, { useState } from 'react'
import { Button, Card, Flex, Modal } from '../../'

export default {
  title: 'Composed/Modal',
  component: Modal,
  argTypes: {},
}

export const Simple = props => {
  const [visible, setVisible] = useState(true)
  return (
    <Flex>
      <Button onClick={() => setVisible(true)}>Show Me!</Button>
      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        onClick={e => e.stopPropagation()}>
        Some Text
      </Modal>
    </Flex>
  )
}
Simple.args = {}

export const Extended = props => {
  const [visible, setVisible] = useState(true)
  return (
    <Flex>
      <Button onClick={() => setVisible(true)}>Show Me!</Button>
      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        onClick={e => e.stopPropagation()}>
        <Modal.Header>Extended Modal</Modal.Header>
        This is an extended modal, using multiple children and premade elements
        <Card bg="primaries.4" color="lights.4" p={2} mt={2}>
          PSA: This is pretty damn cool.
        </Card>
        <Modal.Footer justifyContent="flex-end">
          <Button onClick={() => setVisible(false)}>Okay!</Button>
        </Modal.Footer>
      </Modal>
    </Flex>
  )
}
Extended.args = {}
