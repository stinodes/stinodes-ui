import { Story } from '@storybook/react'
import { FlexboxProps, LayoutProps } from 'styled-system'
import { Box, Card } from '../../'

export default {
  title: 'Wrappers/Card',
  component: Card,
}

const stringToProps = (string: string) =>
  string.split(',').reduce((prev, v) => {
    if (!v) return prev
    const [key, val] = v.split(':')
    return { ...prev, [key]: parseInt(val) }
  }, {})

type CardTemplateProps = {
  spacings: string
  shadow: string
  border: string
  bg: string
} & FlexboxProps &
  LayoutProps

const CardTemplate: Story<CardTemplateProps> = ({
  spacings,
  shadow,
  border,
  ...props
}) => {
  const spacingProps = stringToProps(spacings)

  return (
    <Box p={4} bg="surfaces.2">
      <Card {...props} {...spacingProps} shadow={shadow} border={border} />{' '}
    </Box>
  )
}

export const Example = CardTemplate.bind({})
Example.args = {
  bg: 'surfaces.4',
  shadow: 'typography.2',
  border: 'typography.2',
  width: 200,
  height: 200,
  spacings: '',
}
