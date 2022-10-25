import { light } from './tokens/light' 
import { font } from './tokens/font'
import { radio } from './tokens/radio'
import { space } from './tokens/space'

const theme = {
  colors: light,
} as const

export type ThemeInterface = typeof theme

export {
  theme,
  font,
  radio,
  space,
}