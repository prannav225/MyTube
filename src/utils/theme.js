import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light Mode
          primary: { main: '#FF0033' },
          secondary: { main: '#03DAC6' },
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
          text: {
            primary: '#0f0f0f',
            secondary: '#606060',
          },
        }
      : {
          // Dark Mode
          primary: { main: '#FF0033' },
          secondary: { main: '#03DAC6' },
          background: {
            default: '#0f0f0f',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
          },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    h5: { fontSize: '1.25rem', fontWeight: 500 },
    h6: { fontSize: '1rem', fontWeight: 500 },
    subtitle1: { fontSize: '1rem', fontWeight: 400 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 400 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          fontWeight: 'bold',
          padding: '8px 20px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: '16px',
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
            borderRadius: '12px',
            overflow: 'hidden',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
           root: {
              '& .MuiOutlinedInput-root': {
                  borderRadius: '28px',
              }
           }
      }
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                background: mode === 'dark' ? 'rgba(15, 15, 15, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                boxShadow: 'none',
                borderBottom: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                color: mode === 'dark' ? '#fff' : '#000',
            }
        }
    }
  },
});

export const getTheme = (mode) => createTheme(getDesignTokens(mode));
