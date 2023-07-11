import { keyframes, styled } from '@danielcorrea-ui/react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  background: 'rgba(0, 0, 0, 0.75)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 10,
})

export const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: '$gray700',
  borderRadius: '$4',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: '$6 $12',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 11,

  '&:focus': { outline: 'none' },
})

export const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: '$gray200',
  fontSize: 17,
  fontWeight: 500,
})

export const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: 20,
  color: '$gray100',
  fontSize: 15,
  lineHeight: 1.5,
})

export const Flex = styled('div', {
  justifyContent: 'flex-end',
  backgroundColor: 'transparent',
  display: 'flex',
  gap: '$2',
})

export const CancelButton = styled(AlertDialog.Cancel, {
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
})

export const ActionButton = styled(AlertDialog.Action, {
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
})
