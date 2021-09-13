import { Story } from '@storybook/react'
import { LayoutProps } from 'styled-system'
import { Box } from '../../'

export default {
  title: 'Wrappers/Box',
  component: Box,
}

const stringToProps = (string: string) =>
  string.split(',').reduce((prev, v) => {
    if (!v) return prev
    const [key, val] = v.split(':')
    return { ...prev, [key]: parseInt(val) }
  }, {})

type BoxTemplateProps = { spacings: string; bg: string } & LayoutProps

const BoxTemplate: Story<BoxTemplateProps> = ({ spacings, ...props }) => {
  const spacingProps = stringToProps(spacings)

  return (
    <Box {...props} {...spacingProps}>
      <Box width={100} height={100} bg="blues.3" />
      <Box width={100} height={100} bg="greens.3" />
    </Box>
  )
}
export const Example = BoxTemplate.bind({})
Example.args = {
  bg: 'lights.1',
  width: 400,
  height: 200,
  spacings: 'px:100,mt:50',
}
