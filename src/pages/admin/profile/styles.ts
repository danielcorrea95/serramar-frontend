import { Box, Text, styled } from '@danielcorrea-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
  },
})

export const ContainerButton = styled('div', {
  display: 'flex',
  marginTop: '$4',
  gap: '$4',
})

export const FormError = styled(Text, {
  color: '#f75a68',
})
