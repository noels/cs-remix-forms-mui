import { Components, Theme } from '@mui/material/styles';
import type { ChartsComponents } from '@mui/x-charts/themeAugmentation';
import { gray } from '../themePrimitives';

export const appbarComponentsCustomizations: Components<Theme> = {
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          backgroundColor: '#ffffff !important',
          ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.background.default,
            backgroundImage: 'none',
          }),
        }
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => {
        return {
          borderRight: 'none',
          backgroundColor: 'white',
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          ...theme.applyStyles('dark', {
            backgroundColor: 'transparent',
          }),
        }
      }
    }
  }
}
