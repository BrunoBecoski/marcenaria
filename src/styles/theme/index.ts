import { light } from './tokens/light'
import { font } from './tokens/font'

export const theme = {
  colors: light,
  font,
} as const

export type ThemeInterface = typeof theme
