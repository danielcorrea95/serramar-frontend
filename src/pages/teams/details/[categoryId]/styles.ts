import { styled } from '@danielcorrea-ui/react'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 1200,
  margin: 'auto',
  marginTop: '$4',
  marginBottom: '$4',
  gap: '$4',

  '@media(max-width: 768px)': {
    padding: '$4',
  },
})

export const TeamDetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const TeamDetails = styled('div', {
  display: 'grid',
  gridTemplateColumns: '120px auto',
  gap: '$4',

  '@media(max-width: 768px)': {
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    textAlign: 'center',
  },
})

export const LogoImage = styled(Image, {
  width: '100%',
  height: 'auto',
  '@media(max-width: 768px)': {
    width: '50%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const PlayerContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gap: '$4',

  '@media(max-width: 768px)': {
    gridTemplateColumns: '1fr 1fr',
  },
})

export const PlayerItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  padding: '4px',
  gap: '$2',

  '& > img': {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
})

export const PlayerDetails = styled('div', {
  background: '$gray900',
  color: '$gray200',
  width: '100%',
  borderRadius: '4px',
  padding: '$2',
})
