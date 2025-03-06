import { TenoxUI } from '@tenoxui/static'
import { AnyFrame } from '@anyframe/core'
import allConf from './dist/index.es.js'

const config = allConf
delete config.apply

const ui = new AnyFrame(config)

const cls = [
  'relative',
  'grid',
  'min-h-screen',
  'grid-cols-[1fr_2.5rem_auto_2.5rem_1fr]',
  'grid-rows-[1fr_1px_auto_1px_1fr]',
  'bg-white',
  '[--pattern-fg]-[oklch({gray-950}_/_5%)]',
  '[col-start,row-start]-3',
  'flex',
  'max-w-lg',
  'flex-col',
  'bg-gray-100',
  'p-2',
  'p-10',
  'rounded-xl',
  'text-gray-700',
  'mb-11.5',
  'h-6',
  'h-xl',
  'shrink-0',
  'h-[1lh]',
  'w-5.5',
  'ml-3',
  'font-medium',
  'w-full',
  'h-100%',
  'h-full',
  'border-(color:--pattern-fg)',
  'border-1',
  'border-red-500',
  
  /* bensns*/
]

console.log(ui.create(cls))
