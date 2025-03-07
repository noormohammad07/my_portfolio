import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#0F172A',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h6"
                component="p"
                sx={{ color: '#38BDF8', mb: 2, fontFamily: 'monospace', letterSpacing: '0.1em' }}
              >
                Hi, my name is
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: { xs: 1, sm: 2 },
                  color: '#F8FAFC',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                  lineHeight: { xs: 1.2, sm: 1.3 },
                  letterSpacing: '-0.02em'
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{ display: 'inline-block' }}
                >
                  Noor Mohammad.
                </motion.span>
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  color: '#94A3B8',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 600,
                  lineHeight: { xs: 1.2, sm: 1.3 },
                  letterSpacing: '-0.02em'
                }}
              >
                I build things for the web.
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  mb: { xs: 3, sm: 4 }, 
                  maxWidth: '600px', 
                  color: '#94A3B8', 
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.7,
                  letterSpacing: '0.02em'
                }}
              >
                I'm a third-year BTech student specializing in web development and
                problem-solving. Currently focused on building responsive and
                user-friendly web applications.
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  href="#projects"
                  sx={{
                    borderColor: '#38BDF8',
                    color: '#38BDF8',
                    borderWidth: '2px',
                    padding: '0.75rem 2rem',
                    fontSize: '1.1rem',
                    letterSpacing: '0.05em',
                    '&:hover': {
                      borderColor: '#38BDF8',
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    },
                  }}
                >
                  Check out my work!
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{ position: 'relative' }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Profile"
                sx={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '20px',
                  border: '2px solid #38BDF8',
                  filter: 'brightness(0.9)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    filter: 'brightness(1)',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px -15px rgba(56, 189, 248, 0.2)'
                  },
                  mx: 'auto',
                  display: 'block',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;