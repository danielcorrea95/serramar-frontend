import { styled } from '@danielcorrea-ui/react'

export const Pagination = styled('div', {
  display: 'flex',
  gap: '$2',
})

export const SelectPage = styled('p', {
  color: '$gray200',

  '&:hover': {
    color: '$ignite300',
    cursor: 'pointer',
  },
})
