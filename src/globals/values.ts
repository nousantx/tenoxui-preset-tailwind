import { Values } from '@tenoxui/types'
import { createValue } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import { color } from './color'

export const globalValues: Values = {
  // position
  'left-bottom': 'left bottom',
  'left-top': 'left top',
  'right-bottom': 'right bottom',
  'right-top': 'right top',
  // sizes
  px: '1px',
  full: '100%',
  vh: '100vh',
  svh: '100svh',
  lvh: '100lvh',
  dvh: '100dvh',
  vw: '100vw',
  svw: '100svw',
  lvw: '100lvw',
  dvw: '100dvw',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  // global color variable
  // ...createValue(['text', 'decoration', 'bg'],
  ...(generateColors({
    color,
    option: {
      format: 'object2',
      output: 'rgb-value'
    }
  }) as any),

  //),
  // global container sizes
  ...createValue(['columns', 'basis', 'w', 'min-w', 'max-w', 'h', 'min-h', 'max-h', 'size'], {
    full: '100%',
    '3xs': '16rem' /* 256px */,
    '2xs': '18rem' /* 288px */,
    xs: '20rem' /* 320px */,
    sm: '24rem' /* 384px */,
    md: '28rem' /* 448px */,
    lg: '32rem' /* 512px */,
    xl: '36rem' /* 576px */,
    '2xl': '42rem' /* 672px */,
    '3xl': '48rem' /* 768px */,
    '4xl': '56rem' /* 896px */,
    '5xl': '64rem' /* 1024px */,
    '6xl': '72rem' /* 1152px */,
    '7xl': '80rem' /* 1280px */
  })
}
