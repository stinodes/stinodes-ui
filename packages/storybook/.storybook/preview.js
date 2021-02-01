import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { createTheme } from '@stinodes-ui/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const withTheme = Story => (
  <ThemeProvider theme={createTheme({})}>
    <Story />
  </ThemeProvider>
)
export const decorators = [withTheme]
