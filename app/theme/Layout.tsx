import * as React from 'react';
import {createTheme, PaletteMode} from '@mui/material';
import getApplicationTheme from '~/theme/getApplicationTheme';
import {alpha, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {useLoaderData} from '@remix-run/react';

interface OwnProps {
  children: React.ReactNode;
}

export const Layout = ({children}: OwnProps) => {
  const [mode] = React.useState<PaletteMode>('light');
  const applicationTheme = createTheme(getApplicationTheme(mode));

  return (
    <ThemeProvider theme={applicationTheme}>
      <CssBaseline/>
      <Stack sx={{height: '100%'}}>
        <Box sx={{ display: 'flex', flexGrow: 1, height: `calc(100% - 56px)`, flexDirection: {xs: 'column', md: 'row'} }}>
            <Stack
              spacing={2}
              sx={{
                alignItems: 'center',
                mx:{ 
                  md: 2
                },
                height: '100%',
              }}
            >
              {children}
            </Stack>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
