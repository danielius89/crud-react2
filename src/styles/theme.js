import { createTheme } from '@mui/material';

const lightTheme = createTheme({
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
