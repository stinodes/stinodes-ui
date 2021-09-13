import '@emotion/react'
import { Theme as StyledSystemTheme } from 'styled-system'

declare module '@emotion/react' {
  export interface Theme extends StyledSystemTheme {
    fontFamily: string
  }
}
