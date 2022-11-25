import { mix, transparentize } from 'polished'

import { primary } from './colors/primary'
import { secondary } from './colors/secondary'
import { tertiary } from './colors/tertiary'
import { error } from './colors/error'
import { neutral } from './colors/neutral'
import { neutralVariant } from './colors/neutralVarient'

export const light = {
  primary: primary[40],
  primaryOpacity_8: transparentize(0.92, primary[40]),
  primaryOpacity_12: transparentize(0.88, primary[40]),
  primaryOpacity_16: transparentize(0.84, primary[40]),

  onPrimary: primary[100],
  primaryContainer: primary[90],
  onPrimaryContainer: primary[10],

  secondary: secondary[40],
  onSecondary: secondary[100],
  secondaryContainer: secondary[90],
  onSecondaryContainer: secondary[10],

  tertiary: tertiary[40],
  onTertiary: tertiary[100],
  tertiaryContainer: tertiary[90],
  onTertiaryContainer: tertiary[10],

  error: error[40],
  onError: error[100],
  errorContainer: error[90],
  onErrorContainer: error[10],

  background: neutral[99],
  onBackground: neutral[10],

  surface: neutral[99],
  surfaceAt_1: mix(0.05, primary[40], neutral[99]),
  surfaceAt_2: mix(0.08, primary[40], neutral[99]),
  surfaceAt_3: mix(0.11, primary[40], neutral[99]),
  surfaceAt_4: mix(0.12, primary[40], neutral[99]),
  surfaceAt_5: mix(0.14, primary[40], neutral[99]),

    
  onSurface: neutral[10],
  onSurfaceOpacity_8: transparentize(0.92, neutral[10]),
  onSurfaceOpacity_12: transparentize(0.88, neutral[10]),
  onSurfaceOpacity_16: transparentize(0.84, neutral[10]),

  surfaceVariant: neutralVariant[90],
  onSurfaceVariant: neutralVariant[30],
  outline: neutralVariant[50],
  outlineVariant: neutralVariant[80],

} as const