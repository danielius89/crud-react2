import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Maven Pro, sans-serif',
    h1: {
      fontFamily: 'Oxygen',
      fontWeight: '700',
    },
    h2: {
      fontFamily: 'Oxygen',
      fontWeight: '700',
    },
    h3: {
      fontFamily: 'Oxygen',
      fontWeight: '700',
    },
    h4: {
      fontFamily: 'Oxygen',
      fontWeight: '700',
    },
    h5: {
      fontFamily: 'Oxygen',
      fontWeight: '700',
    },
    h6: {
      fontFamily: 'Oxygen',
      fontWeight: '700',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Maven Pro, sans-serif';
          font-style: normal;
          font-display: swap;
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
