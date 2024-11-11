import * as React from 'react';
import { Components, Theme } from '@mui/material/styles';
import { gray } from '../themePrimitives';
import { tabClasses } from '@mui/material/Tab';

/* eslint-disable import/prefer-default-export */
export const tabComponentCustomizations: Components<Theme> = {
  MuiTabs: {
    styleOverrides: {
      root: { minHeight: 'fit-content' },
      indicator: ({ theme }) => ({
        display: 'none',
      }),
      flexContainer:  ({ theme }) => ({
        gap: theme.spacing(1),
        margin: `0 ${theme.spacing(2)}`
      }),
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: `${theme.spacing(1.5)} ${theme.spacing(4)}`,
        backgroundColor: gray[200],
        borderWidth: '1px 1px 0 1px',
        borderRadius: `${theme.spacing(0.5)} ${theme.spacing(0.5)} 0 0`,
        textTransform: 'none',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
        fontWeight: 'bold',
        color: theme.palette.text.secondary,
        borderColor: 'transparent',
        ':hover': {
          color: theme.palette.text.primary,
          backgroundColor: gray[50],
          borderColor: gray[200],
        },
        [`&.${tabClasses.selected}`]: {
          backgroundColor: 'white',
        },
        ...theme.applyStyles('dark', {
          backgroundColor: 'transparent',
          ':hover': {
            color: theme.palette.text.primary,
            backgroundColor: gray[800],
            borderColor: gray[700],
          },
          [`&.${tabClasses.selected}`]: {
            color: '#fff',
            backgroundColor: gray[800],
          },
        }),
      }),
    },
  },
};
