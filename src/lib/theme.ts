import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  shape: {
    borderRadius: '8px'
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
  },
  palette: {
    primary: {
      main: '#1890ff'
    },
    secondary: {
      main: '#000'
    },
    background: {
      default: '#fff',
      paper: '#f2f2f2'
    }
  }
});
