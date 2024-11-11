import { Components, alpha, Theme } from '@mui/material/styles';
import { svgIconClasses } from '@mui/material/SvgIcon';
import { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';
import { toggleButtonClasses } from '@mui/material/ToggleButton';
import { gray, brand, brandSecondary, green, orange, red } from '../themePrimitives';

/* eslint-disable import/prefer-default-export */
export const buttonsCustomizations: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in',
        '&:focus-visible': {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: '2px',
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'capitalize',
        letterSpacing: 0.5,
        '&:disabled': {
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.background.paper})`,
          border: `1px solid ${theme.palette.background.paper}`,
        },
        variants: [
          {
            props: {
              size: 'small',
            },
            style: {
              height: '1.8rem',
              minWidth: theme.spacing(3),
              padding: '0 0.5rem',
            },
          },
          {
            props: {
              size: 'medium',
            },
            style: {
              height: '2.5rem', // 40px
            },
          },
          {
            props: {
              variant: 'contained',
            },
            style: {
              color: gray[600],
              backgroundImage: `linear-gradient(to bottom, ${gray[100]}, ${gray[200]})`,
              boxShadow: `inset 0 1px 0 ${gray[50]}, inset 0 -1px 0 ${gray[300]}`,
              border: `1px solid ${gray[200]}`,
              '&:hover': {
                backgroundImage: `linear-gradient(to bottom, ${gray[50]}, ${gray[100]})`,
                boxShadow: `inset 0 1px 0 #ffffff, inset 0 -1px 0 ${gray[200]}`,
              }
            },
          },
          {
            props: {
              color: 'primary',
              variant: 'contained',
            },
            style: {
              color: 'white',
              backgroundImage: `linear-gradient(to bottom, ${brand[400]}, ${brand[500]})`,
              boxShadow: `inset 0 1px 0 ${brand[300]}, inset 0 -1px 0 ${brand[600]}`,
              border: `1px solid ${brand[500]}`,
              '&:hover': {
                backgroundColor: brand[900],
                backgroundImage: `linear-gradient(to bottom, ${brand[300]}, ${brand[400]})`,
                boxShadow: `inset 0 1px 0 ${brand[200]}, inset 0 -1px 0 ${brand[500]}`,
              },
              '&:active': {
                backgroundColor: brand[800],
              },
            },
          },
          {
            props: {
              color: 'secondary',
              variant: 'contained',
            },
            style: {
              color: 'white',
              backgroundColor: brandSecondary[300],
              backgroundImage: `linear-gradient(to bottom, ${brandSecondary[400]}, ${brandSecondary[500]})`,
              boxShadow: `inset 0 1px 0 ${brandSecondary[300]}, inset 0 -1px 0 ${brandSecondary[700]}`,
              border: `1px solid ${brandSecondary[500]}`,
              '&:hover': {
                backgroundColor: brandSecondary[300],
                backgroundImage: `linear-gradient(to bottom, ${brandSecondary[300]}, ${brandSecondary[400]})`,
                boxShadow: `inset 0 1px 0 ${brandSecondary[200]}, inset 0 -1px 0 ${brandSecondary[600]}`,
              }
            },
          },
          {
            props: {
              color: 'success',
              variant: 'contained',
            },
            style: {
              color: 'white',
              backgroundImage: `linear-gradient(to bottom, ${green[450]}, ${green[500]})`,
              border: `1px solid ${green[400]}`,
              boxShadow: `inset 0 1px 0 ${green[300]}, inset 0 -1px 0 ${green[500]}`,
              '&:hover': {
                backgroundImage: `linear-gradient(to bottom, ${green[400]}, ${green[500]})`,
                boxShadow: `inset 0 1px 0 ${green[200]}, inset 0 -1px 0 ${green[500]}`,
              },
            },
          },
          {
            props: {
              color: 'info',
              variant: 'contained',
            },
            style: {
              backgroundColor: gray[200],
              backgroundImage: `linear-gradient(to bottom, ${gray[100]}, ${gray[200]})`,
              boxShadow: `inset 0 1px 0 ${gray[50]}, inset 0 -1px 0 ${gray[400]}`,
              border: `1px solid ${gray[100]}`, 
              '&:hover': {
                backgroundColor: gray[100],
                backgroundImage: `linear-gradient(to bottom, ${brand[50]}, ${brand[100]})`,
                boxShadow: `inset 0 1px 0 ${gray[50]}, inset 0 -1px 0 ${gray[400]}`,
              },
              '&:active': {
                backgroundColor: gray[400],
              },
              ...theme.applyStyles('dark', {
                color: 'white',
                backgroundImage: `linear-gradient(to bottom, ${gray[700]}, ${gray[800]})`,
                boxShadow: `inset 0 1px 0 ${gray[600]}, inset 0 -1px 0 hsl(220, 0%, 0%)`,
                border: `1px solid ${gray[700]}`,
                '&:hover': {
                  backgroundColor: gray[900],
                  backgroundImage: `linear-gradient(to bottom, ${gray[600]}, ${gray[800]})`,
                  boxShadow: `inset 0 1px 0 ${gray[500]}, inset 0 -1px 0 hsl(220, 0%, 0%)`,
                },
                '&:active': {
                  backgroundColor: gray[800],
                },
              }),
            },
          },
          {
            props: {
              color: 'error',
              variant: 'contained',
            },
            style: {
              color: 'white',
              backgroundImage: `linear-gradient(to bottom, ${red[400]}, ${red[500]})`,
              border: `1px solid ${red[450]}`,
              boxShadow: `inset 0 1px 0 ${red[300]}, inset 0 -1px 0 ${red[500]}`,
              '&:hover': {
                backgroundImage: `linear-gradient(to bottom, ${red[300]}, ${red[400]})`,
                boxShadow: `inset 0 1px 0 ${red[300]}, inset 0 -1px 0 ${red[600]}`,
              },
            },
          },
          {
            props: {
              color: 'warning',
              variant: 'contained',
            },
            style: {
              color: orange[900],
              backgroundImage: `linear-gradient(to bottom, ${orange[400]}, ${orange[450]})`,
              border: `1px solid ${orange[400]}`,
              boxShadow: `inset 0 1px 0 ${orange[300]}, inset 0 -1px 0 ${orange[500]}`,
              '&:hover': {
                color: orange[700],
                backgroundImage: `linear-gradient(to bottom, ${orange[300]}, ${orange[400]})`,
                boxShadow: `inset 0 1px 0 ${orange[200]}, inset 0 -1px 0 ${orange[500]}`,
              },
            },
          },
          {
            props: {
              variant: 'outlined',
            },
            style: {
              color: theme.palette.text.primary,
              border: '1px solid',
              borderColor: gray[200],
              backgroundColor: alpha(gray[50], 0.3),
              '&:disabled': {
                color: gray[400],
              },
              '&:hover': {
                backgroundColor: gray[100],
                borderColor: gray[300],
              },
              '&:active': {
                backgroundColor: gray[200],
              },
              ...theme.applyStyles('dark', {
                backgroundColor: gray[900],
                borderColor: gray[700],
                '&:hover': {
                  backgroundColor: gray[900],
                  borderColor: gray[600],
                },
                '&:active': {
                  backgroundColor: gray[900],
                },
              }),
            },
          },
          {
            props: {
              color: 'primary',
              variant: 'outlined',
            },
            style: {
              color: brand[700],
              border: `1px solid ${brand[200]}`,
              backgroundColor: brand[100],
              '&:hover': {
                backgroundColor: brand[50],
                borderColor: brand[400],
              },
              '&:active': {
                backgroundColor: alpha(brand[200], 0.7),
              },
              ...theme.applyStyles('dark', {
                color: brand[300],
                border: '1px solid',
                borderColor: brand[300],
                backgroundColor: gray[900],
                '&:hover': {
                  borderColor: brand[700],
                },
                '&:active': {
                  borderColor: brand[700],
                },
              }),
            },
          },
          {
            props: {
              color: 'secondary',
              variant: 'outlined',
            },
            style: {
              color: brandSecondary[700],
              border: `1px solid ${brandSecondary[200]}`,
              backgroundColor: brandSecondary[100],
              '&:hover': {
                backgroundColor: brandSecondary[50],
                borderColor: brandSecondary[400],
              },
              '&:active': {
                backgroundColor: alpha(brandSecondary[200], 0.7),
              },
              ...theme.applyStyles('dark', {
                color: brandSecondary[300],
                border: '1px solid',
                borderColor: brandSecondary[300],
                backgroundColor: gray[900],
                '&:hover': {
                  borderColor: brandSecondary[700],
                },
                '&:active': {
                  borderColor: brandSecondary[700],
                },
              }),
            },
          },
          {
            props: {
              color: 'success',
              variant: 'outlined',
            },
            style: {
              color: green[700],
              border: `1px solid ${green[200]}`,
              backgroundColor: green[50],
              '&:hover': {
                backgroundColor: green[100],
                borderColor: green[400],
              },
              '&:active': {
                backgroundColor: alpha(green[200], 0.7),
              },
              ...theme.applyStyles('dark', {
                color: green[300],
                border: `1px solid ${green[300]}`,
                backgroundColor:gray[900],
                '&:hover': {
                  color: green[100],
                  borderColor: green[100],
                },
                '&:active': {
                  backgroundColor: green[100],
                },
              }),
            },
          },
          {
            props: {
              color: 'error',
              variant: 'outlined',
            },
            style: {
              color: red[700],
              border: `1px solid ${red[200]}`,
              backgroundColor: red[50],
              '&:hover': {
                backgroundColor: red[100],
                borderColor: red[400],
              },
              '&:active': {
                backgroundColor: alpha(red[200], 0.7),
              },
              ...theme.applyStyles('dark', {
                color: red[200],
                border: '1px solid',
                borderColor: red[200],
                backgroundColor: gray[900],
                '&:hover': {
                  color: red[100],
                  borderColor: red[100],
                  backgroundColor: red[800],
                },
                '&:active': {
                  backgroundColor: red[700],
                },
              }),
            },
          },
          {
            props: {
              color: 'warning',
              variant: 'outlined',
            },
            style: {
              color: orange[700],
              border: `1px solid ${orange[200]}`,
              backgroundColor: orange[50],
              '&:hover': {
                backgroundColor: orange[100],
                borderColor: orange[400],
              },
              '&:active': {
                backgroundColor: alpha(orange[200], 0.7),
              },
              ...theme.applyStyles('dark', {
                color: orange[200],
                border: '1px solid',
                borderColor: orange[200],
                backgroundColor: gray[900],
                '&:hover': {
                  color: orange[100],
                  borderColor: orange[100],
                  backgroundColor: orange[800],
                },
                '&:active': {
                  backgroundColor: orange[700],
                },
              }),
            },
          },
          {
            props: {
              color: 'info',
              variant: 'outlined',
            },
            style: {
              color: gray[700],
              border: `1px solid ${gray[200]}`,
              backgroundColor: gray[50],
              '&:hover': {
                backgroundColor: gray[100],
                borderColor: gray[400],
              },
              '&:active': {
                backgroundColor: alpha(gray[200], 0.7),
              },
              ...theme.applyStyles('dark', {
                color: gray[200],
                border: '1px solid',
                borderColor: gray[200],
                backgroundColor: gray[900],
                '&:hover': {
                  color: gray[100],
                  borderColor: gray[100],
                  backgroundColor: gray[800],
                },
                '&:active': {
                  backgroundColor: gray[700],
                },
              }),
            },
          },
          {
            props: {
              variant: 'text',
            },
            style: {
              display: 'inline-block',
              padding: 0,
              color: gray[600],
              lineHeight: theme.typography.body1.lineHeight,
              textDecoration: 'underline',
              backgroundColor: 'transparent',
              height: 'auto',
              '&:hover': {
                backgroundColor: gray[100],
                textDecoration: 'underline',
                
              },
              ...theme.applyStyles('dark', {
                color: gray[50],
                '&:hover': {
                  textDecoration: 'underline',
                },
              }),
            },
          },
          {
            props: {
              color: 'secondary',
              variant: 'text',
            },
            style: {
              color: brand[400],
              ...theme.applyStyles('dark', {
                color: brand[200],
              }),
            },
          },
          {
            props: {
              color: 'info',
              variant: 'text',
            },
            style: {
              color: gray[500],
              ...theme.applyStyles('dark', {
                color: gray[300],
              }),
            },
          },
          {
            props: {
              color: 'warning',
              variant: 'text',
            },
            style: {
              color: orange[400],
              ...theme.applyStyles('dark', {
                color: orange[300],
              }),
            },
          },
          {
            props: {
              color: 'success',
              variant: 'text',
            },
            style: {
              color: green[400],
              ...theme.applyStyles('dark', {
                color: green[300],
              }),
            },
          },
          {
            props: {
              color: 'error',
              variant: 'text',
            },
            style: {
              color: red[400],
              ...theme.applyStyles('dark', {
                color: red[300],
              }),
            },
          },
        ],
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: '50%',
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightMedium,
        letterSpacing: 0,
        color: theme.palette.text.primary,
        borderColor: gray[200],
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: gray[100],
          borderColor: gray[300],
        },
        '&:active': {
          backgroundColor: gray[200],
        },
        ...theme.applyStyles('dark', {
          backgroundColor: 'transparent',
          borderColor: 'none',
          '&:hover': {
            backgroundColor: gray[900],
            borderColor: gray[600],
          },
          '&:active': {
            backgroundColor: gray[900],
          },
        }),
        variants: [
          {
            props: {
              size: 'small',
            },
            style: {
              width: '1.5rem',
              height: '1.5rem',
              padding: '0.25rem',
              [`& .${svgIconClasses.root}`]: { fontSize: '1rem' },
              border: 'none !important',
            },
          },
          {
            props: {
              size: 'medium',
            },
            style: {
              width: '2.5rem',
              height: '2.5rem',
              [`& .${svgIconClasses.root}`]: { fontSize: '1.5rem' },
            },
          },
          {
            props: {
              size: 'large',
            },
            style: {
              width: '3rem',
              height: '3rem',
              [`& .${svgIconClasses.root}`]: { fontSize: '2rem' },
            },
          },
          {
            props: {
              color: 'primary',
            },
            style: {
              borderColor: brand[500],
              color: brand[600],
              '&:hover': {
                backgroundColor: brand[50],
                color: brand[400],
                borderColor: brand[200],
              },
              ...theme.applyStyles('dark', {
                backgroundColor: 'transparent',
                color: brand[500],
                '&:hover': {
                  backgroundColor: brand[800],
                },
              })
            },
          },
          {
            props: {
              color: 'secondary',
            },
            style: {
              borderColor: brandSecondary[500],
              color: brandSecondary[600],
              '&:hover': {
                backgroundColor: brandSecondary[50],
                color: brandSecondary[400],
                borderColor: brandSecondary[200],
              },
              ...theme.applyStyles('dark', {
                backgroundColor: 'transparent',
                color: brandSecondary[500],
                '&:hover': {
                  backgroundColor: brandSecondary[800],
                },
              })
            },
          },
          {
            props: {
              color: 'info',
            },
            style: {
              backgroundColor: gray[50],
              borderColor: gray[200],
              color: gray[500],
              '&:hover': {
                backgroundColor: 'white',
                color: gray[400],
                borderColor: gray[200],
              },
              ...theme.applyStyles('dark', {
                backgroundColor: 'transparent',
                color: gray[200],
                '&:hover': {
                  backgroundColor: gray[800],
                },
              })
            },
          },
          {
            props: {
              color: 'success',
            },
            style: {
              backgroundColor: green[50],
              borderColor: green[300],
              color: green[400],
              '&:hover': {
                backgroundColor: alpha(green[50], 0.5),
                borderColor: green[300],
              },
              ...theme.applyStyles('dark', {
                backgroundColor: 'transparent',
                color: green[300],
                '&:hover': {
                  backgroundColor: green[800],
                },
              })
            },
          },
          {
            props: {
              color: 'error',
            },
            style: {
              backgroundColor: red[50],
              borderColor: red[300],
              color: red[400],
              '&:hover': {
                backgroundColor: alpha(red[50], 0.5),
                borderColor: red[300],
              },
              ...theme.applyStyles('dark', {
                backgroundColor: 'transparent',
                color: red[300],
                '&:hover': {
                  backgroundColor: red[800],
                },
              })
            },
          },
          {
            props: {
              color: 'warning',
            },
            style: {
              backgroundColor: orange[50],
              borderColor: orange[300],
              color: orange[400],
              '&:hover': {
                backgroundColor: alpha(orange[50], 0.5),
                borderColor: orange[300],
              },
              ...theme.applyStyles('dark', {
                backgroundColor: 'transparent',
                color: orange[300],
                '&:hover': {
                  backgroundColor: orange[800],
                },
              })
            },
          },
        ],
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '10px',
        boxShadow: `0 4px 16px ${alpha(gray[400], 0.2)}`,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: brand[500],
        },
        ...theme.applyStyles('dark', {
          [`& .${toggleButtonGroupClasses.selected}`]: {
            color: '#fff',
          },
          boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`,
        }),
      }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '12px 16px',
        textTransform: 'none',
        borderRadius: '10px',
        fontWeight: 500,
        ...theme.applyStyles('dark', {
          color: gray[400],
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
          [`&.${toggleButtonClasses.selected}`]: {
            color: brand[300],
          },
        }),
      }),
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      grouped: ({ theme }) => ({
        minWidth: theme.spacing(2),
        padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`
      })
    }
  }
};
