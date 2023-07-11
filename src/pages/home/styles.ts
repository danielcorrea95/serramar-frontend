import { Box, styled } from '@danielcorrea-ui/react'
import Image from 'next/image'

export const CapaImage = styled(Image, {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
})

export const GamesOfDay = styled(Box, {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  maxWidth: 1200,
  margin: 'auto',
  gap: '$2',
  marginTop: '$4',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '$4',
  },
})

export const GamesOfDayDetails = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 2fr 3fr',
  width: '100%',
  alignItems: 'center',
  gap: '$2',

  '& > p': {
    textAlign: 'center',
  },

  '@media (max-width: 768px)': {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const TeamDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > p': {
    textAlign: 'center',
  },

  '& > img': {
    height: '60px',
    width: 'auto',
  },
})

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 1200,
  margin: 'auto',
  justifyContent: 'space-between',
  marginTop: '$4',
  marginBottom: '$4',
  gap: '$4',

  '@media(max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '$4',
  },
})

export const NextGames = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '65%',

  '& > a': {
    textDecoration: 'none',
    color: '$gray200',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '$gray400',
      cursor: 'pointer',
    },
  },

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const OldGames = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '35%',
  gap: '$10',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const OldGamesSliderContainer = styled('div', {
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '$gray800',
  borderRadius: '$4',
})

export const OldGamesContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '3fr 2fr 1fr 2fr 3fr',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '$4',
})

export const OldGamesDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  '& > a': {
    textDecoration: 'none',
    color: '$gray200',

    '&:hover': {
      color: '$gray400',
      cursor: 'pointer',
    },
  },
})

export const NextGamesData = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 2fr 2fr 3fr 1fr 3fr',
  background: '$gray700',
  borderRadius: '6px',
  padding: '$2',
  margin: '$1',
  alignItems: 'center',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    width: '100%',
    gridTemplateColumns: '2fr 2fr 2fr ',
    gap: '$4',
  },
})
