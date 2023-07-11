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

export const ContainerItems = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
  '@media(max-width: 768px)': {
    gridTemplateColumns: '1fr',
    fontSize: '$sm',
  },
})

export const ItemTeam = styled('div', {
  display: 'grid',
  gridTemplateColumns: '80px 110px auto',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$4',
  '@media(max-width: 768px)': {
    fontSize: '$sm',
  },
})

export const ContainerGoalsAndCards = styled('div', {
  display: 'flex',
  flex: 1,
  width: '100%',
  justifyContent: 'space-between',
  gap: '$4',
})

export const ContentGoalsAndCards = styled('div', {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'end',
  gap: '$4',
})

export const DetailsGoalsAndCards = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'space-between',
  gap: '$4',
  padding: '$4',
})

export const ItemsGoalsAndCards = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '100%',
})

export const AccordionRoot = styled(Accordion.Root, {
  borderRadius: 6,
  width: '100%',
  backgroundColor: '$gray700',
  boxShadow: `0 2px 10px $black`,
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
  fontSize: '$lg',
  color: '$gray100',
  backgroundColor: '$gray600',
  padding: '$10',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})
