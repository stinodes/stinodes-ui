import { Story } from '@storybook/react'
import { Box, Row, Col } from '../../'

export default {
  title: 'Wrappers/Grid',
  component: Row,
}

type GridTemplateProps = {
  columns: number
  gutter: number
}
const GridTemplate: Story<GridTemplateProps> = ({
  columns,
  gutter,
  ...props
}) => {
  const cols = Array(columns).fill(null)
  return (
    <Box bg="lights.1">
      <Row {...props} gutter={gutter}>
        {cols.map((_, i) => (
          <Col key={i} width={1 / columns}>
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
