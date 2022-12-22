import { light } from './tokens/light' 
import { font } from './tokens/font'
import { radio } from './tokens/radio'
import { size } from './tokens/size'

const theme = {
  colors: light,
} as const

export type ThemeInterface = typeof theme

export {
  theme,
  font,
  radio,
  size,
}