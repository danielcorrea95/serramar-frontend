import { Box, Heading, Text, styled } from '@danielcorrea-ui/react'

export const Container = styled('div', {
  margin: 'auto',
  height: '100vh',
  display: 'flex',
  width: '100%',
  maxWidth: 1000,
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$10',

  a: {
    color: '$ignite300',
    textDecoration: 'none',
    fontWeight: '$bold',

    '&:hover': {
      color: '$ignite300',
    },
  },
})

export const DivContent = styled('div', {
  display: 'flex',
  width: '100%',

  [`> ${Heading}`]: {
    fontSize: '$6xl',
  },
})

export const ContainerImageForm = styled('div', {
  display: 'flex',
  width: '100%',

  justifyContent: 'center',
  alignItems: 'center',
})

export const BoxForm = styled(Box, {
  width: '100%',
  padding: '$12',
  display: 'flex',
  maxWidth: 560,
  maxHeight: 560,
  flexDirection: 'column',
  gap: '$4',
})

export const FormError = styled(Text, {
  color: '#f75a68',
})
