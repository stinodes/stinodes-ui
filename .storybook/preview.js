import { Provider } from '../src'

export const decorators = [
  Story => (
    <Provider>
      <Story />
    </Provider>
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
