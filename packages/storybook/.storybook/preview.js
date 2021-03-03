import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { createTheme } from '@stinodes-ui/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const withTheme = Story => (
  <ThemeProvider
    theme={createTheme({
      fontFamily: `"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif`,
    })}>
    <Story />
  </ThemeProvider>
)

const withPortalRoot = Story => (
  <>
    <Story />
    <div id="portal-root" />
  </>
)

export const decorators = [withTheme, withPortalRoot]
