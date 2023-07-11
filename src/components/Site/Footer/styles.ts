import { styled } from '@danielcorrea-ui/react'

export const Container = styled('footer', {
  display: 'flex',
  flex: 1,
  width: '100%',
  backgroundColor: '$gray800',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$10 0 $2 0',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '$4',
    textAlign: 'center',
  },
})

export const Align = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  width: '100%',
  maxWidth: '1200px',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const ContentFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',

  '@media (max-width: 768px)': {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const SocialContainer = styled('div', {
  display: 'flex',
  width: '100%',
  marginTop: '$3',
  gap: '$1',

  '@media (max-width: 768px)': {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const IconSocial = styled('div', {
  display: 'flex',
  width: '$8',
  height: '$8',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray600',
  transition: 'all 0.2s ease',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$gray400',
  },
})

export const SliderContainer = styled('div', {
  display: 'flex',
  width: '100%',

  img: {
    objectFit: 'cover',
  },
})
