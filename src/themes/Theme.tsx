import { createTheme, ThemeProvider } from '@mui/material';

interface LayoutProps {
    children: React.ReactNode;
 }
 
 const theme = createTheme({
  palette: {
    background: {
      default: 'red',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          '&.primary-card': {
            backgroundColor: '#FFFFFF',
            marginBottom: '15px',
            borderRadius: '20px',
            padding: '20px',
          },
          '&.secondary-card': {
            backgroundColor: '#FFF8F9',
            marginBottom: '10px',
            borderRadius: '10px',
            padding: '10px',
          },
          '&.bordered-card': {
            border: '1px solid #BEBEBE',
            marginBottom: '20px',
          },

        },
      },
    },
  },
});

const Theme = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;
