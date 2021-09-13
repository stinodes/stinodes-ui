import { Story } from '@storybook/react'
import { FlexboxProps, LayoutProps } from 'styled-system'
import { Flex } from '../../'

export default {
  title: 'Wrappers/Flex',
  component: Flex,
}

const stringToProps = (string: string) =>
  string.split(',').reduce((prev, v) => {
    if (!v) return prev
    const [key, val] = v.split(':')
    return { ...prev, [key]: parseInt(val) }
  }, {})

type FlexTemplateProps = { spacings: string; bg: string } & FlexboxProps &
  LayoutProps

const FlexTemplate: Story<FlexTemplateProps> = ({ spacings, ...props }) => {
  const spacingProps = stringToProps(spacings)

  return (
    <Flex {...props} {...spacingProps}>
      <Flex width={100} height={100} bg="blues.3" />
      <Flex width={100} height={100} bg="greens.3" />
    </Flex>
  )
}
export const Example = FlexTemplate.bind({})
Example.args = {
  bg: 'lights.1',
  width: 400,
  height: 200,
  spacings: 'px:100,mt:50',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
}
