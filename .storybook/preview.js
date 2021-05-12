import { ThemeProvider } from '@emotion/react'
import { createTheme } from '../src'

export const decorators = [
  Story => (
    <ThemeProvider theme={createTheme({})}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
