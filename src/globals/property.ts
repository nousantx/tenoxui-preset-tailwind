import { Property } from '@tenoxui/types'

export const uncommonType: Property = {
  'break-after': 'breakAfter',
  'break-before': 'breakBefore',
  'break-inside': 'breakInside',

  // 'box-decoration': 'boxDecorationBreak', // limited availability

  object: 'objectPosition',

  overflow: 'overflow',
  'overflow-x': 'overflowX',
  'overflow-y': 'overflowY',

  overscroll: 'overscrollBehavior',
  'overscroll-x': 'overscrollBehaviorX',
  'overscroll-y': 'overscrollBehaviorY',

  z: 'zIndex',
  '-z': {
    property: 'zIndex',
    value: '-{0}'
  },

  'font-stretch': 'fontStretch',

  opacity: {
    property: 'opacity',
    value: '{0}%'
  },
  'mix-blend': 'mixBlendMode',
  'bg-blend': 'backgroundBlendMode'
}
