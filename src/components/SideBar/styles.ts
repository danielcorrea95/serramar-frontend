import { styled } from '@danielcorrea-ui/react'
import Link from 'next/link'

export const Nav = styled('div', {
  background: '$gray800',
  height: '$20',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const NavIcon = styled(Link, {
  fontSize: '$md',
  height: '$20',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: 'white',
  textDecoration: 'none',
})

export const NavUser = styled('div', {
  display: 'flex',
  marginRight: '$8',
  gap: '$4',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: '350ms',

  variants: {
    variant: {
      sidebar: {
        width: 'calc(100% - 310px)',
      },
      closed: {
        width: '100%',
      },
    },
  },
})

export const NavLink = styled(Link, {
  color: 'white',
  textDecoration: 'none',

  '&:hover': {
    color: 'green',
  },
})

export const SidebarNav = styled('nav', {
  display: 'flex',
  background: '$gray800',
  width: '250px',
  height: '100vh',
  justifyContent: 'flex-start',
  position: 'fixed',
  top: 0,

  transition: '350ms',
  zIndex: 10,

  variants: {
    variant: {
      sidebar: {
        left: 0,
      },
      closed: {
        left: '-100%',
      },
    },
  },
})

export const SidebarWrap = styled('div', {
  width: '100%',
})

export const OpenButton = styled('div', {
  background: '$gray800',
  height: '$20',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '$4',
  fontSize: '$2xl',

  '&:has(svg:hover)': {
    color: '$ignite300',
    cursor: 'pointer',
  },
})

export const ClosedButton = styled('div', {
  background: '$gray800',
  height: '$20',
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '$4',
  cursor: 'default',
  fontSize: '$2xl',

  '&:has(svg:hover)': {
    color: '$ignite300',
    cursor: 'pointer',
  },
})

export const SidebarLink = styled(Link, {
  display: 'flex',
  flexDirection: 'row',
  color: '$gray100',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$5',
  height: '$12',
  fontSize: '$md',
  textDecoration: 'none',
  width: '100%',

  '&:hover': {
    background: '$gray800',
    borderLeft: `4px solid $ignite300`,
    cursor: 'pointer',
  },
})

export const SidebarLabel = styled('span', {
  marginLeft: '16px',
})

export const DropdownLink = styled(Link, {
  background: '$gray700',
  height: '60px',
  padding: '20px 2.5rem',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$gray200',
  fontSize: '$md',
  width: '100%',

  '&:hover': {
    background: '$ignite300',
    cursor: 'pointer',
  },
})

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
})

export const Content = styled('div', {
  alignItems: 'flex-end',
  padding: '$10',
  transition: '350ms',

  variants: {
    variant: {
      sidebar: {
        width: 'calc(100% - 250px)',
      },
      closed: {
        width: '100%',
      },
    },
  },
})

export const InfoUser = styled('div', {
  display: 'flex',
  gap: '$4',
})
