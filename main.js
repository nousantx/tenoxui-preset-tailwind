import { AnyFrame } from '@anyframe/core'
import { is } from '@nousantx/someutils'

const ui = new AnyFrame({
  property: {
    opacity: {
      property: 'opacity',
      value: '{0}%'
    },
    'mix-blend': 'mixBlendMode',
    'bg-blend': 'backgroundBlendMode',
    filter: {
      property: 'filter',
      value: ({ key, value }) => {
        return key ? `${key}(${value})` : value
      }
    },
    blur: {
      property: 'filter',
      value: ({ value, unit }) => {
        const values = {
          xs: '4px',
          sm: '8px'
        }

        const finalValue = values[value] || value + (unit || 'px')

        return `blur(${finalValue})`
      }
    }
  }
})

console.log(ui.create(['filter-(blur:8px)', 
'blur-6',
'blur-8px',
'blur-1rem',
'blur-xs',
]))
