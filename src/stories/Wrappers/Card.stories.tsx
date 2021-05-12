import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
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

const CardTemplate = ({ spacings, shadow, border, ...props }) => {
  const spacingProps = stringToProps(spacings)

  return (
    <Box p={4} bg="lights.2">
      <Card {...props} {...spacingProps} shadow={shadow} border={border} />{' '}
    </Box>
  )
}

export const Example = CardTemplate.bind({})
Example.args = {
  bg: 'lights.4',
  shadow: 'darks.2',
  border: 'darks.2',
  width: 200,
  height: 200,
  spacings: '',
}
