import { globalCss } from '@danielcorrea-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray900',
    fontFamily: 'roboto, sans-serif',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
