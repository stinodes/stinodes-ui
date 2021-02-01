import React from 'react'
import { Row, Col } from '@stinodes-ui/grid'
import { Box } from '@stinodes-ui/box'

export default {
  title: 'Wrappers/Grid',
  component: Row,
}

const GridTemplate = ({ columns, gutter, ...props }) => {
  const cols = [...Array(columns).keys()]
  return (
    <Box bg="lights.1">
      <Row {...props} gutter={gutter}>
        {cols.map((_, i) => (
          <Col width={1 / columns}>
            <Box height={200} bg={i % 2 === 0 ? 'greens.3' : 'blues.3'} />
          </Col>
        ))}
      </Row>
    </Box>
  )
}
export const Example = GridTemplate.bind({})
Example.args = {
  columns: 3,
  gutter: 3,
}
