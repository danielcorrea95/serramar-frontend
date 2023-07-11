import { styled } from '@danielcorrea-ui/react'

export const TableReports = styled('table', {
  width: '100%',
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

export const ContainerFunctions = styled('div', {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  // marginTop: '$10',
})
