import React, { useState } from 'react'

import { Button } from '@stinodes-ui/button'
import { Flex } from '@stinodes-ui/flex'
import { H2 } from '@stinodes-ui/typography'
import { Col, Row } from '@stinodes-ui/grid'
import { Input, TextArea } from '@stinodes-ui/input'
import { Checkbox } from '../../../checkbox/src'
import { Select } from '@stinodes-ui/select'

export default {
  title: 'Page Examples/Forms',
  component: null,
}

export const Simple = props => {
  const [state, setState] = useState({
    title: '',
    content: '',
    category: '',
    publish: false,
  })
  const changeField = (key: string, value: any) =>
    setState(state => ({ ...state, [key]: value }))

  return (
    <Flex flexDirection="column" maxWidth={496} mx="auto">
      <H2>Create a post:</H2>
      <Row mt={2} gutter={1}>
        <Col width={1} mb={2} gutter={1}>
          <Input
            error={props.error}
            placeholder="Post title"
            value={state.title}
            onChange={e => changeField('title', e.target.value)}
          />
        </Col>
        <Col width={1} mb={2} gutter={1}>
          <TextArea
            error={props.error}
            placeholder="Write some content here..."
            value={state.content}
            onChange={e => changeField('content', e.target.value)}
          />
        </Col>
        <Col width={1 / 2} mb={2} gutter={1}>
          <Select
            error={props.error}
            placeholder="Category"
            options={['Development', 'Lifestyle', 'Epic Gamer Moments']}
            value={state.category}
            onSelect={v => changeField('category', v)}
          />
        </Col>
        <Col width={1 / 2} mb={2} gutter={1} justifyContent="center">
          <Checkbox
            error={props.error}
            checked={state.publish}
            onChange={e => changeField('publish', e.target.checked)}>
            Publish Post
          </Checkbox>
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
