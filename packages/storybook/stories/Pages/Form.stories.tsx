import React from 'react'

import { Button } from '@stinodes-ui/button'
import { Flex } from '@stinodes-ui/flex'
import { H2 } from '@stinodes-ui/typography'
import { Col, Row } from '@stinodes-ui/grid'
import { Input, TextArea } from '@stinodes-ui/input'

export default {
  title: 'Page Examples/Forms',
  component: null,
}

export const Simple = props => {
  return (
    <Flex flexDirection="column" maxWidth={496} mx="auto">
      <H2>Create a post:</H2>
      <Row mt={2} gutter={1}>
        <Col width={1} mb={2} gutter={1}>
          <Input error={props.error} placeholder="Post title" />
        </Col>
        <Col width={1} mb={2} gutter={1}>
          <TextArea
            error={props.error}
            placeholder="Write some content here..."
          />
        </Col>
        <Col width={1 / 2} gutter={1}>
          <Button bg="lights.0" color="darks.0">
            Cancel
          </Button>
        </Col>
        <Col width={1 / 2} gutter={1}>
          <Button important>Submit</Button>
        </Col>
      </Row>
    </Flex>
  )
}
Simple.args = {
  error: false,
}
