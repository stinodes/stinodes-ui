import React from 'react'

import { Flex } from '@stinodes-ui/flex'

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

const FlexTemplate = ({ spacings, ...props }) => {
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
