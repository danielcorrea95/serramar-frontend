import { Button, styled } from '@danielcorrea-ui/react'

export const ContainerModal = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '$3',
})

export const ContainerButton = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: '0.5em',
  paddingTop: '1rem',

  [`> ${Button}`]: {
    width: '100%',
  },
})

export const Option = styled('option', {
  backgroundColor: '$gray800',
  color: '$gray200',
  cursor: 'pointer',
})
