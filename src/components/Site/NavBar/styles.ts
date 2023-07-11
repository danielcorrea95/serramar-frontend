import { styled } from '@danielcorrea-ui/react'
import Image from 'next/image'

export const Container = styled('nav', {
  display: 'flex',
  width: '100%',
  height: '$20',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ContainerNav = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  justifyContent: 'space-between',
})

export const NavbarLogo = styled(Image, {
  width: 'auto',
  height: '70px',
  padding: '$4',
})

export const ContainerLink = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  '& > a': {
    display: 'flex',
    width: '100%',
    flex: 1,
    height: '100%',
    textDecoration: 'none',
    color: '$gray200',
    transition: 'all 0.2s ease',
    textAlign: 'center',
    alignItems: 'center',
    '&:hover': {
      color: '$gray400',
      cursor: 'pointer',
    },
  },

  '@media (max-width: 768px)': {
    display: 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: '$gray700',
    width: '100%',
    padding: '1rem',
    marginTop: '80px',
  },
})

export const NavbarCollapseButton = styled('button', {
  display: 'none',
  '@media (max-width: 768px)': {
    display: 'block',
    background: 'transparent',
    color: '$gray200',
    border: 'none',
    cursor: 'pointer',
    padding: '1rem',
  },
})
