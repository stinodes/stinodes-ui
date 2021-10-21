import { ReactNode } from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import { createTheme, Theme } from '../theme'

export const UIThemeProvider = (props: {
  children: ReactNode
  theme?: Theme
}) => {
  const theme = props.theme || createTheme({})
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            font-family: ${theme.fontFamily};
          }
          * {
            box-sizing: border-box;
          }
        `}
      />
      {props.children}
    </ThemeProvider>
  )
}
