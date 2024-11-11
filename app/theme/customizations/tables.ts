import { Components, Theme, alpha } from '@mui/material/styles';
import { getDesignTokens } from '../themePrimitives';
import { gray } from '../themePrimitives';

export const tableComponentsCustomizations: Components<Theme> = {
  MuiTable: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          marginBottom: theme.spacing(2),
          'td': {
            fontSize: '1rem',
          },
          '& tbody:last-child': {
            borderBottom: `none`
          },
          '& caption': {
            color: theme.palette.text.primary,
            captionSide: 'top',
            ...getDesignTokens('light').typography.h4,
            borderBottom: `1px solid #EEF2F6`
          },
          ...theme.applyStyles('dark', {
            '& caption': {
              color: theme.palette.text.primary,
              captionSide: 'top',
              ...getDesignTokens('light').typography.h4,
              borderBottom: `1px solid ${theme.palette.background.paper}`
            },
          }),
        }
      }
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          '&:nth-of-type(even)': {
            backgroundColor: gray[50],
          },
          ...theme.applyStyles('dark', {
            '&:nth-of-type(odd)': {
              backgroundColor: alpha(gray[700], 0.1),
            },
            '&:nth-of-type(even)': {
              backgroundColor: 'transparent',
            },
          }),
        }
      }
    }
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        '& th': {
          fontFamily: '"Source Code Pro", monospace',
          fontWeight: 700,
        }
      }
    }
  },
  MuiTableFooter: {
    styleOverrides: {
      root: {
        '& td': {
          fontWeight: 700,
          fontSize: '1rem',
        }
      }
    }
  },
  MuiTableBody: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          ...theme.applyStyles('dark', {
            borderBottom: `8px solid ${theme.palette.background.paper}`
          }),
        }
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          fontFamily: '"Source Code Pro", monospace',
          color: theme.palette.text.primary,
          borderBottom: `1px solid #EEF2F6`,
          ...theme.applyStyles('dark', {
            color: theme.palette.text.primary,
            borderBottom: `1px solid ${theme.palette.background.paper}`
          }),
        }
      }
    }
  },
}
