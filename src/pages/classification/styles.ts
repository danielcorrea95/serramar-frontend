import { styled, keyframes } from '@danielcorrea-ui/react'
import * as Accordion from '@radix-ui/react-accordion'

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 1200,
  margin: 'auto',
  marginTop: '$4',
  marginBottom: '$4',
  gap: '$4',

  '@media(max-width: 768px)': {
    padding: '$4',
  },
})

export const AccordionRoot = styled(Accordion.Root, {
  borderRadius: 6,
  width: '100%',
  backgroundColor: '$gray700',
  boxShadow: `0 2px 10px $black`,
})

export const Table = styled('table', {
  display: 'block',
  width: '100%',
  overflow: 'auto',
  borderCollapse: 'separate',
  borderSpacing: '0 0.5rem',
  marginTop: '1.5rem',

  th: {
    padding: '1.25rem 2rem',
    textAlign: 'left',
  },

  td: {
    padding: '1.25rem 2rem',
    background: '$gray700',

    '&:first-child': {
      borderTopLeftRadius: '6px',
      borderTottomLeftRadius: '6px',
    },

    '&:last-child': {
      borderTopRightRadius: '6px',
      borderBottomRightRadius: '6px',
    },
  },
})

export const AccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px $black`,
  },
})

export const AccordionTrigger = styled(Accordion.AccordionTrigger, {
  width: '100%',
  background: 'transparent',
  border: 'none',
  padding: '$4',
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$gray200',
})

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const AccordionContent = styled(Accordion.AccordionContent, {
  overflow: 'hidden',
  fontSize: '$md',
  color: '$gray100',
  backgroundColor: '$gray600',
  padding: '$10',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  '@media(max-width: 768px)': {
    padding: '$2',
    fontSize: '$sm',
  },
})
