import 'styled-components'
import { ThemeInterface } from '../styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}