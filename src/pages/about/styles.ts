import { styled } from '@danielcorrea-ui/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 1200,
  margin: 'auto',
  justifyContent: 'space-between',
  gap: '$3',
  marginBottom: '2rem',

  a: {
    textDecoration: 'none',
    color: 'white',
  },

  'a:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },

  '@media (max-width: 768px)': {
    padding: '$4',
    fontSize: '$sm',
  },
})
