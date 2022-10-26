import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6080ff',
      light: '#6e93ff',
      dark: '#4a6bef',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FB3640',
      light: '#fb5e66',
      dark: '#af252c',
      contrastText: '#fff',
    },
    background: { paper: '#222226', default: '#333336' },
    text: { disabled: 'rgba(255, 255, 255, 0.12)' },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});