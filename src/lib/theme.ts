import { createTheme } from '@mui/material/styles';

const font = ['Inter', 'sans-serif'].join(',');

export const theme = createTheme({
  typography: {
    fontFamily: font
  },

  shape: {
    borderRadius: '8px'
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          fontFamily: font,
          fontWeight: 400,
          fontSize: '0.875rem'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontFamily: font,
          fontWeight: 600
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      }
    },
    MuiTypography: {
      defaultProps: {
        fontWeight: 500
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px'
        }
      }
    },
    MuiTextField: {
      defaultProps: { size: 'small' }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff'
        }
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
      paper: '#fafafa'
    }
  }
});
