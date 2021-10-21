import { UIThemeProvider } from '../src'

export const decorators = [
  Story => (
    <UIThemeProvider>
      <Story />
    </UIThemeProvider>
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
