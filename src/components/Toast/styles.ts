import { keyframes, styled } from '@danielcorrea-ui/react'
import * as RadixToast from '@radix-ui/react-toast'

export const ToastViewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 25px))` },
  to: { transform: 'translateX(0)' },
})

export const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 25px))` },
})

export const ToastRoot = styled(RadixToast.Root, {
  backgroundColor: '$gray700',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  variants: {
    variant: {
      warning: {
        border: '2px solid yellow',
      },
      danger: {
        border: '2px solid yellow',
      },
      success: {
        border: '2px solid $ignite300',
      },
    },
  },

  defaultVariants: {
    variant: 'success',
  },
})

export const ToastTitle = styled(RadixToast.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  color: '$gray200',
  fontSize: 15,
})

export const ToastDescription = styled(RadixToast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray100',
  fontSize: 13,
  lineHeight: 1.3,
})

export const ToastAction = styled(RadixToast.Action, {
  gridArea: 'action',
})

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  fontWeight: 500,

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '0 $3',
        lineHeight: '$6',
        height: '$6',
      },
      large: {
        fontSize: '$md',
        padding: '0 $4',
        lineHeight: '$8',
        height: '$8',
      },
    },
    variant: {
      warning: {
        backgroundColor: 'yellow',
        color: '$gray100',
        boxShadow: `0 2px 10px yellow`,
        '&:hover': {
          boxShadow: `inset 0 0 0 5px $gray100`,
          cursor: 'pointer',
        },
        '&:focus': { boxShadow: `0 0 0 2px yellow` },
      },
      danger: {
        backgroundColor: 'red',
        color: '$gray100',
        boxShadow: `0 2px 10px red`,
        '&:hover': {
          boxShadow: `inset 0 0 0 5px $gray100`,
          cursor: 'pointer',
        },
        '&:focus': { boxShadow: `0 0 0 2px red` },
      },
      success: {
        backgroundColor: '$ignite300',
        color: '$gray900',
        boxShadow: `0 2px 10px $ignite300`,
        '&:hover': {
          boxShadow: `inset 0 0 0 5px $gray100`,
          cursor: 'pointer',
        },
        '&:focus': { boxShadow: `0 0 0 2px $ignite300` },
      },
    },
  },

  defaultVariants: {
    size: 'small',
    variant: 'success',
  },
})
