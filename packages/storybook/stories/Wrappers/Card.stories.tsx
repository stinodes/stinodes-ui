import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Card } from '@stinodes-ui/card'
import { themeColor } from '@stinodes-ui/theme/src'
import { createTheme } from '@stinodes-ui/theme'
import { Box } from '@stinodes-ui/box'

const theme = createTheme({})

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
  const shadowRef = useRef<boolean | string>(shadow)
  const borderRef = useRef<boolean | string>(border)
  const spacingProps = stringToProps(spacings)

  const shadowVal = useMemo(() => {
    try {
      const v = themeColor(shadow, { colorName: 'darks.2', alpha: 0.1 })({
        theme,
      })
      console.log(v, shadow, theme)
      return shadow
    } catch (e) {
      return Example.args.shadow
    }
  }, [shadow])

  const borderVal = useMemo(() => {
    try {
      themeColor(border, { colorName: 'darks.2', alpha: 0.05 })({ theme })
      return border
    } catch (e) {
      return Example.args.border
    }
  }, [border])

  return (
    <Box p={4} bg="lights.2">
      <Card
        {...props}
        {...spacingProps}
        shadow={shadowVal}
        border={borderVal}
      />
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
