import { Story } from '@storybook/react'
import { useState } from 'react'
import { Button, Checkbox, Col, Flex, H2, Row } from '../../'
import { SelectField, TextAreaField, TextField } from '../../components/Field'

export default {
  title: 'Page Examples/Forms',
  component: null,
}

export const Simple: Story<{ error: boolean }> = props => {
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
          <TextField
            label="Title"
            error={props.error}
            placeholder="Post title"
            value={state.title}
            onChange={e => changeField('title', e.currentTarget.value)}
          />
        </Col>
        <Col width={1} mb={2} gutter={1}>
          <TextAreaField
            label="Content"
            error={props.error}
            placeholder="Write some content here..."
            value={state.content}
            onChange={e => changeField('content', e.currentTarget.value)}
          />
        </Col>
        <Col width={1 / 2} mb={2} gutter={1}>
          <SelectField
            label="Category"
            help="This will be used to filter content for viewers."
            error={props.error}
            placeholder="Category"
            options={['Development', 'Lifestyle', 'Epic Gamer Moments']}
            value={state.category}
            onChange={(v: string) => changeField('category', v)}
          />
        </Col>
        <Col width={1 / 2} mb={2} gutter={1} justifyContent="center">
          <Checkbox
            error={props.error}
            checked={state.publish}
            onChange={e => changeField('publish', e.currentTarget.checked)}>
            Publish Post
          </Checkbox>
        </Col>
        <Col width={1 / 2} gutter={1}>
          <Button bg="surfaces.0" color="typography.0">
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
