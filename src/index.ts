import type { CoreConfig, Property } from '@tenoxui/types'
import { Config } from '@tenoxui/static'
import { createProperty, merge, transformClasses, createValue } from '@nousantx/someutils'
import { generateAliases } from './utils/createAlias'
import { properties, values, rules, classes } from './globals'
import { is } from '@nousantx/someutils'

const sizeProperties = (property: string | string[]) => ({
  property,
  value: ({ key, value, unit }) =>
    is.number.test(value + unit) ? `calc(0.25rem * ${value})` : value + unit
})

export const aspectRatio: CoreConfig = {
  property: {
    aspect: 'aspectRatio'
  },
  values: {
    aspect: {
      square: '1 / 1',
      video: '16 / 9'
    }
  }
}

export const columns: CoreConfig = {
  property: {
    columns: 'columns'
  }
}

export const display: CoreConfig = {
  classes: {
    display: {
      inline: 'inline',
      block: 'block',
      'inline-block': 'inline-block',
      'flow-root': 'flow-root',
      flex: 'flex',
      'inline-flex': 'inline-flex',
      grid: 'grid',
      'inline-grid': 'inline-grid',
      contents: 'contents',
      table: 'table',
      'inline-table': 'inline-table',
      'table-caption': 'table-caption',
      'table-cell': 'table-cell',
      'table-column': 'table-column',
      'table-column-group': 'table-column-group',
      'table-footer-group': 'table-footer-group',
      'table-header-group': 'table-header-group',
      'table-row-group': 'table-row-group',
      'table-row': 'table-row',
      'list-item': 'list-item',
      hidden: 'none'
    }
  }
}

export const position: CoreConfig = {
  classes: {
    position: {
      static: 'static',
      fixed: 'fixed',
      absolute: 'absolute',
      relative: 'relative',
      sticky: 'sticky'
    }
  }
}

export const float: CoreConfig = {
  property: {
    float: 'float'
  },
  values: {
    float: {
      start: 'inline-start',
      end: 'inline-end'
    }
  }
}

export const clear: CoreConfig = {
  property: {
    clear: 'clear'
  },
  values: {
    clear: {
      start: 'inline-start',
      end: 'inline-end'
    }
  }
}

export const isolation: CoreConfig = {
  property: {
    isolation: 'isolation'
  },
  aliases: {
    isolate: 'isolation-isolate'
  }
}

export const objectFit: CoreConfig = {
  aliases: {
    'object-contain': '[object-fit]-contain',
    'object-cover': '[object-fit]-cover',
    'object-fill': '[object-fit]-fill',
    'object-none': '[object-fit]-none',
    'object-scale-down': '[object-fit]-scale-down'
  }
}

export const inset: CoreConfig = {
  property: {
    ...(createProperty(
      {
        inset: 'inset',
        'inset-x': 'insetInline',
        start: 'insetInlineStart',
        'inset-y': 'insetBlock',
        end: 'insetInlineEnd',
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left'
      },
      'calc(0.25rem * {0})'
    ) as Property),
    ...(createProperty(
      {
        '-inset': 'inset',
        '-inset-x': 'insetInline',
        '-start': 'insetInlineStart',
        '-inset-y': 'insetBlock',
        '-end': 'insetInlineEnd',
        '-top': 'top',
        '-right': 'right',
        '-bottom': 'bottom',
        '-left': 'left'
      },
      'calc(0.25rem * -{0})'
    ) as Property)
  },
  aliases: generateAliases([
    'inset',
    'inset-x',
    'start',
    'inset-y',
    'end',
    'top',
    'right',
    'bottom',
    'left'
  ])
}

export const visibility: CoreConfig = {
  aliases: {
    visible: 'visible',
    invisible: 'hidden',
    collapse: 'collapse'
  }
}

export const flex: CoreConfig = {
  property: {
    basis: 'flexBasis',
    flex: 'flex'
  },
  aliases: {
    // flex direction
    'flex-row': '[flex-direction]-row',
    'flex-col': '[flex-direction]-column',
    'flex-row-reverse': '[flex-direction]-row-reverse',
    'flex-col-reverse': '[flex-direction]-column-reverse',
    // flex wrap
    'flex-wrap': '[flex-wrap]-wrap',
    'flex-nowrap': '[flex-wrap]-nowrap',
    'flex-wrap-reverse': '[flex-wrap]-wrap-reverse'
  },
  values: {
    flex: {
      auto: '1 1 auto',
      initial: '0 1 auto'
    }
  },
  classes: {
    flexGrow: {
      grow: '{0} || 1'
    },
    flexShrink: {
      shrink: '{0} || 1'
    }
  }
}

export const order: CoreConfig = {
  property: {
    order: 'order',
    '-order': {
      property: 'order',
      value: 'calc({0} * -1)'
    }
  },
  values: {
    order: {
      first: 'calc(-infinity)',
      last: 'calc(infinity)',
      none: '0'
    }
  }
}

export const grid: CoreConfig = {
  property: {
    // column
    'grid-cols': {
      property: 'gridTemplateColumns',
      value: 'repeat({0}, minmax(0, 1fr))'
    },
    'col-span': {
      property: 'gridColumn',
      value: 'span {0} / span {0}'
    },
    col: 'gridColumn',
    'col-start': 'gridColumnStart',
    '-col-start': {
      property: 'gridColumnStart',
      value: 'calc({0} * -1)'
    },
    'col-end': 'gridColumnEnd',
    '-col-end': {
      property: 'gridColumnEnd',
      value: 'calc({0} * -1)'
    },
    // rows
    'grid-rows': {
      property: 'gridTemplateRows',
      value: 'repeat({0}, minmax(0, 1fr))'
    },
    'row-span': {
      property: 'gridRow',
      value: 'span {0} / span {0}'
    },
    row: 'gridRow',
    'row-start': 'gridRowStart',
    '-row-start': {
      property: 'gridRowStart',
      value: 'calc({0} * -1)'
    },
    'row-end': 'gridRowEnd',
    '-row-end': {
      property: 'gridRowEnd',
      value: 'calc({0} * -1)'
    },
    // grid auto
    'grid-flow': 'gridAutoFlow',
    'auto-cols': 'gridAutoColumns',
    'auto-rows': 'gridAutoRows'
  },
  values: {
    'grid-flow': {
      'row-dense': 'row dense',
      'col-dense': 'column dense'
    },
    'auto-cols': {
      fr: 'minmax(0, 1fr)'
    },
    'auto-rows': {
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)'
    }
  },
  aliases: {
    // columns
    'grid-cols-none': 'grid-cols-[none]',
    'grid-cols-subgrid': 'grid-cols-[subgrid]',
    'col-span-full': 'col-span-[1_/_-1]',
    'col-start-auto': 'col-start-[auto]',
    'col-end-auto': 'col-end-[auto]',
    // row
    'grid-rows-none': 'grid-rows-[none]',
    'grid-rows-subgrid': 'grid-rows-[subgrid]',
    'row-span-full': 'row-span-[1_/_-1]',
    'row-start-auto': 'row-start-[auto]',
    'row-end-auto': 'row-end-[auto]'
  }
}

export const gap: CoreConfig = {
  property: createProperty(
    {
      gap: 'gap',
      'gap-x': 'columnGap',
      'gap-y': 'rowGap'
    },
    'calc(0.025rem * {0})'
  ) as Property
}

export const justifyAll: CoreConfig = {
  classes: {
    justifyContent: {
      'justify-start': 'flex-start',
      'justify-end': 'flex-end',
      'justify-center': 'center',
      'justify-between': 'space-between',
      'justify-around': 'space-around',
      'justify-evenly': 'space-evenly',
      'justify-stretch': 'stretch',
      'justify-baseline': 'baseline',
      'justify-normal': 'normal'
    },
    justifyItems: {
      'justify-items-start': 'start',
      'justify-items-end': 'end',
      'justify-items-center': 'center',
      'justify-items-stretch': 'stretch',
      'justify-items-normal': 'normal'
    },
    justifySelf: {
      'justify-self-start': 'start',
      'justify-self-end': 'end',
      'justify-self-center': 'center',
      'justify-self-stretch': 'stretch',
      'justify-self-auto': 'auto'
    }
  }
}
export const alignAll: CoreConfig = {
  classes: {
    alignContent: {
      'content-start': 'flex-start',
      'content-end': 'flex-end',
      'content-center': 'center',
      'content-between': 'space-between',
      'content-around': 'space-around',
      'content-evenly': 'space-evenly',
      'content-stretch': 'stretch',
      'content-baseline': 'baseline'
    },
    alignItems: {
      'items-start': 'flex-start',
      'items-end': 'flex-end',
      'items-center': 'center',
      'items-stretch': 'stretch',
      'items-baseline': 'baseline'
    },
    alignSelf: {
      'self-start': 'flex-start',
      'self-end': 'flex-end',
      'self-center': 'center',
      'self-stretch': 'stretch',
      'self-baseline': 'baseline',
      'self-auto': 'auto'
    }
  }
}

export const placeAll: CoreConfig = {
  classes: {
    placeContent: {
      'place-content-start': 'start',
      'place-content-end': 'end',
      'place-content-center': 'center',
      'place-content-between': 'space-between',
      'place-content-around': 'space-around',
      'place-content-evenly': 'space-evenly',
      'place-content-stretch': 'stretch',
      'place-content-baseline': 'baseline'
    },
    placeItems: {
      'place-items-start': 'start',
      'place-items-end': 'end',
      'place-items-center': 'center',
      'place-items-stretch': 'stretch',
      'place-items-baseline': 'baseline'
    },
    placeSelf: {
      'place-self-start': 'start',
      'place-self-end': 'end',
      'place-self-center': 'center',
      'place-self-stretch': 'stretch',
      'place-self-auto': 'auto'
    }
  }
}

export const padding: CoreConfig = {
  property: createProperty(
    {
      tx: 'ajh',
      p: 'padding',
      px: 'paddingInline',
      py: 'paddingBlock',
      pt: 'paddingTop',
      pl: 'paddingLeft',
      pb: 'paddingBottom',
      pr: 'paddingRight'
    },
    'calc(0.25rem * {0})'
  ) as Property,
  aliases: {
    'p-px': 'p-[1px]',
    'px-px': 'px-[1px]',
    'py-px': 'py-[1px]',
    'pt-px': 'pt-[1px]',
    'pl-px': 'pl-[1px]',
    'pb-px': 'pb-[1px]',
    'pr-px': 'pr-[1px]'
  }
}

export const margin: CoreConfig = {
  property: {
    ...(createProperty(
      {
        m: 'margin',
        mx: 'marginInline',
        my: 'marginBlock',
        mt: 'marginTop',
        ml: 'marginLeft',
        mb: 'marginBottom',
        mr: 'marginRight',
        ms: 'margin-inline-start',
        me: 'margin-inline-end'
      },
      'calc(0.25rem * {0})'
    ) as Property),
    ...(createProperty(
      {
        '-m': 'margin',
        '-mx': 'marginInline',
        '-my': 'marginBlock',
        '-mt': 'marginTop',
        '-ml': 'marginLeft',
        '-mb': 'marginBottom',
        '-mr': 'marginRight',
        '-ms': 'margin-inline-start',
        '-me': 'margin-inline-end'
      },
      'calc(0.25rem * -{0})'
    ) as Property)
  },
  aliases: {
    'm-px': 'm-[1px]',
    'mx-px': 'mx-[1px]',
    'my-px': 'my-[1px]',
    'mt-px': 'mt-[1px]',
    'ml-px': 'ml-[1px]',
    'mb-px': 'mb-[1px]',
    'mr-px': 'mr-[1px]',
    'ms-px': 'ms-[1px]',
    'me-px': 'me-[1px]'
  }
}

export const widthAndHeight: CoreConfig = {
  property: {
    w: sizeProperties('width'),
    'min-w': sizeProperties('minWidth'),
    'max-w': sizeProperties('maxWidth'),
    h: sizeProperties('height'),
    'min-h': sizeProperties('minHeight'),
    'max-h': sizeProperties('maxHeight'),
    size: sizeProperties(['width', 'height'])
  },
  values: {
    ...createValue(['w', 'min-w', 'max-w'], {
      screen: '100vw'
    }),
    ...createValue(['h', 'min-h', 'max-h'], {
      screen: '100vh'
    })
  }
}

export const typography: CoreConfig = {
  property: {
    fs: 'fontSize',
    tracking: 'letterSpacing',
    leading: 'lineHeight',
    font: 'fontWeight',
    'list-image': 'listStyleImage',
    list: 'listStyleType',
    'decoration-thickness': {
      property: 'textDecorationThickness',
      value: '{0}px'
    },
    'underline-offsite': {
      property: 'textUnderlineOffset',
      value: '{0}px'
    },
    '-underline-offsite': {
      property: 'textUnderlineOffset',
      value: 'calc({0}px * -1)'
    },
    indent: {
      property: 'textIndent',
      value: 'calc(0.25rem * {0})'
    },
    '-indent': {
      property: 'textIndent',
      value: 'calc(0.25rem * -{0})'
    },
    align: 'verticalAlign',
    whitespace: 'whiteSpace',
    hypehns: 'hyphens',
    content: 'content'
  },
  aliases: {
    'indent-px': 'indent-[1px]',
    '-indent-px': 'indent-[-1px]'
  },
  values: {
    family: {
      sans: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    font: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    tracking: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },
  classes: merge(
    transformClasses({
      antialiased: {
        ['-webkit-font-smoothing' as any]: 'antialiased',
        ['-moz-osx-font-smoothing' as any]: 'grayscale'
      },
      'subpixel-antialiased': {
        ['-webkit-font-smoothing' as any]: 'auto',
        ['-moz-osx-font-smoothing' as any]: 'auto'
      },
      'line-clamp-none': {
        overflow: 'visible',
        display: 'block',
        webkitBoxOrient: 'horizontal',
        webkitLineClamp: 'unset'
      },
      'line-clamp': {
        overflow: 'hidden',
        display: '-webkit-box',
        webkitBoxOrient: 'vertical',
        webkitLineClamp: '{0} || 100'
      },
      text: {
        '--text-opacity': '{1} || 1',
        color: 'rgb({0} / var(--text-opacity))'
      },
      decoration: {
        '--decoration-opacity': '{1} || 1',
        textDecorationColor: 'rgb({0} / var(--text-opacity))'
      },
      truncate: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      'text-ellipsis': {
        textOverflow: 'ellipsis'
      },
      'text-clip': {
        textOverflow: 'clip'
      },
      'break-normal': {
        textOverflow: 'normal',
        wordBreak: 'normal'
      },
      'break-words': {
        wordBreak: 'break-word'
      },
      'break-all': {
        wordBreak: 'break-all'
      },
      'break-keep': {
        wordBreak: 'keep-all'
      }
    }),
    {
      color: {
        'text-transparent': 'transparent',
        'text-inherit': 'inherit',
        'text-current': 'currentColor',
        'text-white': '#fff',
        'text-black': '#000'
      },
      textDecorationColor: {
        'decoration-transparent': 'transparent',
        'decoration-inherit': 'inherit',
        'decoration-current': 'currentColor',
        'decoration-white': '#fff',
        'decoration-black': '#000'
      },
      fontSize: {
        // fixed text size
        'text-xs': '0.75rem',
        'text-sm': '0.875rem',
        'text-base': '1rem',
        'text-lg': '1.125rem',
        'text-xl': '1.25rem',
        'text-2xl': '1.5rem',
        'text-3xl': '1.875rem',
        'text-4xl': '2.25rem',
        'text-5xl': '3rem',
        'text-6xl': '3.75rem',
        'text-7xl': '4.5rem',
        'text-8xl': '6rem',
        'text-9xl': '8rem'
      },
      lineHeight: {
        'text-xs': 'calc(1 / 0.75)',
        'text-sm': 'calc(1.25 / 0.875)',
        'text-base': 'calc(1.5 / 1)',
        'text-lg': 'calc(1.75 / 1.125)',
        'text-xl': 'calc(1.75 / 1.25)',
        'text-2xl': 'calc(2 / 1.5)',
        'text-3xl': 'calc(2.25 / 1.875)',
        'text-4xl': 'calc(2.5 / 2.25)',
        'text-5xl': '1',
        'text-6xl': '1',
        'text-7xl': '1',
        'text-8xl': '1',
        'text-9xl': '1'
      },
      fontStyle: {
        italic: 'italic',
        'non-italic': 'normal'
      },
      fontVariantNumeric: {
        'normal-nums': 'normal',
        ordinal: 'ordinal',
        'slashed-zero': 'slashed-zero',
        'lining-nums': 'lining-nums',
        'oldstyle-nums': 'oldstyle-nums',
        'proportional-nums': 'proportional-nums',
        'tabular-nums': 'tabular-nums',
        'diagonal-fractions': 'diagonal-fractions',
        'stacked-fractions': 'stacked-fractions'
      },
      listStylePosition: {
        'list-inside': 'inside',
        'list-outside': 'outside'
      },
      textAlign: {
        'text-left': 'left',
        'text-center': 'center',
        'text-right': 'right',
        'text-justify': 'justify',
        'text-start': 'start',
        'text-end': 'end'
      },
      textDecorationLine: {
        underline: 'underline',
        overline: 'overline',
        'line-through': 'line-through',
        'no-underline': 'none'
      },
      textDecorationStyle: {
        'decoration-solid': 'solid',
        'decoration-double': 'double',
        'decoration-dotted': 'dotted',
        'decoration-dashed': 'dashed',
        'decoration-wavy': 'wavy'
      },
      textDecorationThickness: {
        'decoration-thickness-from-font': 'from-font',
        'decoration-thickness-auto': 'auto'
      },
      textUnderlineOffset: {
        'underline-offsite-auto': 'auto'
      },
      textTransform: {
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
        'normal-case': 'none'
      },
      textWrap: {
        'text-wrap': 'wrap',
        'text-nowrap': 'nowrap',
        'text-balance': 'balance',
        'text-pretty': 'pretty'
      }
    }
  )
}

export const background: CoreConfig = {
  property: {
    'bg-clip': {
      property: 'backgroundClip',
      value: '{0}-box'
    },
    'bg-origin': {
      property: 'backgroundOrigin',
      value: '{0}-box'
    }
  },
  classes: {
    backgroundAttachment: {
      'bg-fixed': 'fixed',
      'bg-local': 'local',
      'bg-scroll': 'scroll'
    },
    backgroundClip: {
      'bg-clip-text': 'text'
    },
    '--bg-opacity': { bg: '{1} || 1' },
    backgroundColor: {
      bg: 'rgb({0} / var(--bg-opacity))',
      'bg-transparent': 'transparent',
      'bg-inherit': 'inherit',
      'bg-current': 'currentColor',
      'bg-white': '#fff',
      'bg-black': '#000'
    },
    backgroundRepeat: {
      'bg-repeat': 'repeat',
      'bg-repeat-x': 'repeat-x',
      'bg-repeat-y': 'repeat-y',
      'bg-repeat-space': 'space',
      'bg-repeat-round': 'round',
      'bg-no-repeat': 'no-repeat'
    }
  }
}

export const border: CoreConfig = {
  property: {
    border: {
      property: ({ key, value }) => {
        const keys = {
          color: 'borderColor',
          style: 'borderStyle',
          length: 'borderWidth',
          w: 'borderWidth',
          x: 'borderInlineWidth',
          y: 'borderBlockWidth'
        }
        return key ? keys[key] : is.color.test(value) ? 'borderColor' : 'border'
      },
      value: ({ value, unit, secondValue, secondUnit, key }) => {
        if (is.number.test(value)) return value + 'px'
        else if (is.color.test(value))
          return `rgb(${value} / ${secondValue ? secondValue + '%' : '1'})`
        else return value
      }
    },
    // radius
    rounded: 'borderRadius',
    'rounded-s': ['borderStartStartRadius', 'borderEndStartRadius'],
    'rounded-e': ['borderEndEndRadius', 'borderStartEndRadius'],
    'rounded-t': ['borderTopLeftRadius', 'borderTopRightRadius'],
    'rounded-r': ['borderTopRightRadius', 'borderBottomRightRadius'],
    'rounded-b': ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    'rounded-l': ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    'rounded-ss': 'borderStartStartRadius',
    'rounded-ee': 'borderEndEndRadius',
    'rounded-es': 'borderEndStartRadius',
    'rounded-se': 'borderStartEndRadius',
    'rounded-tl': 'borderTopLeftRadius',
    'rounded-tr': 'borderTopRightRadius',
    'rounded-br': 'borderBottomRightRadius',
    'rounded-bl': 'borderBottomLeftRadius'
  },
  values:
    // radius
    createValue(
      [
        'rounded',
        'rounded-s',
        'rounded-e',
        'rounded-t',
        'rounded-r',
        'rounded-b',
        'rounded-l',
        'rounded-ss',
        'rounded-ee',
        'rounded-se',
        'rounded-es',
        'rounded-tl',
        'rounded-tr',
        'rounded-br',
        'rounded-bl'
      ],
      {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      }
    )
}

export const outline: CoreConfig = {
  property: {
    outline: ({ value, secondValue }) => {
      return is.color.test(value)
        ? `--text-opacity: ${
            secondValue ? secondValue + '%' : '1'
          }; outline-color: rgb(${value} / var(--text-opacity)`
        : `outline-style: ${secondValue || 'solid'}; outline-width: ${value || '1'}px`
    },
    'outline-offset': {
      property: 'outline-offset',
      value: ({ value, unit }) => (unit ? value + unit : value + 'px')
    },
    '-outline-offset': {
      property: 'outline-offset',
      value: ({ value, unit }) => '-' + (unit ? value + unit : value + 'px')
    }
  }
}

export const filter: CoreConfig = {
  property: {
    filter: {
      property: 'filter',
      value: ({ key, value }) => {
        return key ? `${key}(${value})` : value
      }
    },
    blur: ({ value }) => {
      return `filter: blur(${value}px);`
    }
  }
}

export default merge(
  { property: properties, values, apply: rules, classes } as Config,
  aspectRatio,
  columns,
  display,
  position,
  float,
  clear,
  isolation,
  objectFit,
  inset,
  visibility,
  flex,
  order,
  grid,
  gap,
  justifyAll,
  alignAll,
  placeAll,
  padding,
  margin,
  widthAndHeight,
  typography,
  background,
  border
) as Config
