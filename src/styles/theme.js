import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Maven Pro, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Maven Pro, sans-serif';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
  },
  palette: {
    background: {
      default: '#fafafa',
    },
    primary: { main: '#006eb8' },
    secondary: { main: '#f36f25' },
    white: { main: '#fff' },
  },
});

export default lightTheme;
