import { createTheme, UIThemeProvider, convertToDark, Box } from '../src'

const theme = convertToDark(createTheme({}))
// const theme = createTheme({})

export const decorators = [
  Story => (
    <UIThemeProvider theme={theme}>
      <Box bg="surfaces.4" minHeight={500}>
        <Story />
      </Box>
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
