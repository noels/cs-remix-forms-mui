import { Components, alpha, Theme } from '@mui/material/styles';
import { gray } from '../themePrimitives';

/* eslint-disable import/prefer-default-export */
export const cardComponentsCustomizations: Components<Theme> = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          [theme.breakpoints.up("md")]: {
            padding: `0 0 ${theme.spacing(2)} !important`
          },
          width: '100%',
          transition: 'all 100ms ease',
          backgroundColor: '#EEF2F6',
          backgroundImage: 'none',
          borderRadius: theme.shape.borderRadius,
          border: `none`,
          boxShadow: 'none',
          overflow: 'visible',
          flexGrow: 0,
          ...theme.applyStyles('dark', {
            backgroundColor: gray[900],
          }),
          variants: [
            {
              props: {
                variant: 'outlined',
              },
              style: {
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
                background: 'hsl(0, 0%, 100%)',
                ...theme.applyStyles('dark', {
                  background: 'transparent',
                }),
              }
            },
          ],
        };
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          backgroundColor: 'white',
          borderRadius: theme.shape.borderRadius,
          ...theme.applyStyles('dark', {
            color: gray[200],
            backgroundColor: theme.palette.background.default,
          }),
        }
      }
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding:`0 ${theme.spacing(3)}  ${theme.spacing(3)} 0`
        }
      }
    },
  },
};
