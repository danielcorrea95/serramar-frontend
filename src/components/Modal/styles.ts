import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@danielcorrea-ui/react'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: '0',
  background: 'rgba(0, 0, 0, 0.75)',
  zIndex: '10',
})

export const Content = styled(Dialog.Content, {
  minWidth: '32rem',
  borderRadius: '6px',
  padding: '2.5rem 3rem',
  background: '$gray700',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '11',
})

export const OpenModal = styled('button', {
  background: 'transparent',
  color: '$gray200',
  fontSize: '$4',
  outline: 'none',
  border: 'none',

  '&:hover': {
    color: '$ignite300',
    cursor: 'pointer',
  },
})

export const ButtonClose = styled('button', {
  position: 'absolute',
  background: 'transparent',
  border: '0',
  top: '$6',
  right: '$6',
  lineHeight: '0',
  cursor: 'pointer',
  color: '$gray500',
})
