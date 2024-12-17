import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#26BAD4',
    },
    secondary: {
      main: '#9333ea',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#ffffff'
        }
      }
    }
  }
});

export default theme;
