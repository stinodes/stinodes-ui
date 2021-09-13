import { mergeDeepRight } from 'ramda'
import { transparentize } from 'polished'
import { Theme as EmotionTheme } from '@emotion/react'
import { themeGet } from '@styled-system/theme-get'
import { Theme as _Theme } from 'styled-system'

const blues = ['#004D93', '#0063BE', '#0078e7', '#2E90EB', '#5CA9EF']
const teals = ['#009487', '#00BEAE', '#00E8D4', '#2EECDB', '#5CF0E3']
const greens = ['#009454', '#00BE6C', '#00E883', '#2EEC99', '#5CF0B0']
const reds = ['#94002A', '#BE0036', '#E80041', '#EC2E63', '#F05C86']
const yellows = ['#9F9500', '#CCBF00', '#F9E900', '#FAED2E', '#FAED2E']
const darks = ['#2C2F3C', '#404360', '#60637D', '#7F849D', '#9D9EB6']
const lights = ['#D4D6E3', '#E9E9F0', '#F0F2F6', '#F9FAFC', '#FCFCFD']

export const baseTheme = {
  colors: {
    blues,
    teals,
    greens,
    reds,
    yellows,
    darks,
    lights,
    primaries: blues,
    text: darks[2],
    error: reds[2],
    fadedError: reds[4],
    success: greens[2],
    alert: yellows[2],
    overlay: transparentize(0.1, darks[4]),

    primary: blues[2],
  },
  fontFamily: 'Montserrat',
  breakpoints: { sm: '0em', md: '40em', lg: '64em', xlg: '80em' },
  space: [0, 8, 16, 24, 32, 48, 64, 128, 256, 512],
}

type CustomTheme = _Theme & { fontFamily: string }
export type { CustomTheme as Theme }

export const createTheme = (theme: Partial<CustomTheme>) =>
  mergeDeepRight(baseTheme, theme)

export const themeFont = themeGet('fontFamily')

export function themeSpace<Props extends { theme: EmotionTheme }>(
  space: number | string,
): (props: Props) => number
export function themeSpace(space: number | string, theme: EmotionTheme): string
export function themeSpace(
  space: number | string,
  theme?: undefined | EmotionTheme,
) {
  const fn = themeGet(`space.${space}`)
  return theme ? fn({ theme }) || space : fn
}

export function themeColor<Props extends { theme: EmotionTheme }>(
  color: string,
): (props: Props) => string
export function themeColor(color: string, theme: EmotionTheme): string
export function themeColor(color: string, theme?: undefined | EmotionTheme) {
  const fn = themeGet(`colors.${color}`)
  return theme ? fn({ theme }) || color : fn
}
