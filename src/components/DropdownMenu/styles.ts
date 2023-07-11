import { styled } from '@danielcorrea-ui/react'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

export const Trigger = styled(Dropdown.Trigger, {
  display: 'flex',
  background: 'transparent',
  border: 'none',
  color: '$gray200',
  fontSize: '$md',
  gap: '$2',

  '&:hover': {
    color: '$ignite300',
    cursor: 'pointer',
  },

  '&:focus': {
    outline: 'none',
  },
})

export const Content = styled(Dropdown.Content, {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray800',
  width: '100%',
})

export const Item = styled(Dropdown.Item, {
  width: '100%',
  padding: '$3 $10',
  color: '$gray200',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '$gray600',
    cursor: 'pointer',
    outline: 'none',
  },
})
