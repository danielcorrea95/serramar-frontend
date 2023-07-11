import { styled } from '@danielcorrea-ui/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 1200,
  margin: 'auto',
  marginTop: '$4',
  marginBottom: '$4',

  '@media(max-width: 768px)': {
    justifyContent: 'flex-start',
    padding: '$4',
  },
})

export const NextGamesData = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 2fr 2fr 3fr 1fr 3fr',
  background: '$gray700',
  borderRadius: '6px',
  margin: '$1',
  padding: '$2',
  alignItems: 'center',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    width: '100%',
    gridTemplateColumns: '2fr 2fr 2fr ',
    gap: '$4',
  },
})
