import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Box, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#38BDF8',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ 
        bgcolor: 'background.default',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navbar />
        <Box component="main" sx={{ mt: 8, flex: 1 }}>
          <Home />
          <Box sx={{ mt: { xs: 12, md: 16 }, mb: { xs: 2, md: 3 } }}>
            <About />
          </Box>
          <Box sx={{ my: { xs: 2, md: 3 } }}>
            <Skills />
          </Box>
          <Box sx={{ my: { xs: 2, md: 3 } }}>
            <Projects />
          </Box>
          <Box sx={{ my: { xs: 2, md: 3 } }}>
            <Contact />
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
