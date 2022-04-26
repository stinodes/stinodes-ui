import { Story } from '@storybook/react'
import { Box, Layout } from '../../'

export default {
  title: 'Wrappers/Layout',
  component: Layout,
}

type LayoutTemplateProps = {
  direction: 'column' | 'row'
  spacing: number | string
}
const LayoutTemplate: Story<LayoutTemplateProps> = ({ ...props }) => {
  const cols = Array(5).fill(null)
  return (
    <Layout {...props} bg="surfaces.3">
      {cols.map((_, i) => (
        <Box key={i} bg="primary" width={200} height={200} />
      ))}
    </Layout>
  )
}
export const Example = LayoutTemplate.bind({})
Example.args = { spacing: 2 }
