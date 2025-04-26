import React from 'react';
import { Box, Container, Typography, Button, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg';
import resumePDF from '../assets/resume.pdf';
import DownloadIcon from '@mui/icons-material/Download';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0F172A 0%, #0B1120 100%)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        px: { xs: 2, sm: 3, md: 4 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(56, 189, 248, 0.03) 2%, transparent 0%)',
          backgroundSize: '50px 50px',
          zIndex: 0
        }
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ 
                    color: '#38BDF8', 
                    mb: 2, 
                    fontFamily: 'monospace', 
                    letterSpacing: '0.1em',
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.3)'
                  }}
                >
                  Hi, my name is
                </Typography>
              </motion.div>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: { xs: 1, sm: 2 },
                  color: '#F8FAFC',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                  lineHeight: { xs: 1.2, sm: 1.3 },
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{ display: 'inline-block' }}
                >
                  Noor Mohammad
                  <Box 
                    component="span" 
                    sx={{ 
                      color: '#38BDF8',
                      textShadow: '0 0 15px rgba(56, 189, 248, 0.5)'
                    }}
                  >.
                  </Box>
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
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(90deg, #94A3B8, #CBD5E1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                I build things for the web.
              </Typography>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Typography
                  variant="body1"
                  sx={{ 
                    mb: { xs: 3, sm: 4 }, 
                    maxWidth: '600px', 
                    color: '#94A3B8', 
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    lineHeight: 1.7,
                    letterSpacing: '0.02em',
                    padding: '10px 0',
                    borderLeft: '3px solid rgba(56, 189, 248, 0.3)',
                    paddingLeft: '20px'
                  }}
                >
                  I'm a 3rd-year BTech student specializing in web development and
                  problem-solving. Currently focused on building responsive and
                  user-friendly web applications.
                </Typography>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
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
                      borderRadius: '8px',
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 1,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '0%',
                        height: '100%',
                        backgroundColor: 'rgba(56, 189, 248, 0.2)',
                        zIndex: -1,
                        transition: 'width 0.3s ease'
                      },
                      '&:hover': {
                        borderColor: '#38BDF8',
                        backgroundColor: 'transparent',
                        boxShadow: '0 4px 20px rgba(56, 189, 248, 0.3)',
                        '&::before': {
                          width: '100%'
                        }
                      },
                    }}
                  >
                    Check out my work!
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    href={resumePDF}
                    download="Noor_Mohammad_Resume.pdf"
                    startIcon={<DownloadIcon />}
                    sx={{
                      backgroundColor: '#38BDF8',
                      color: '#0F172A',
                      padding: '0.75rem 2rem',
                      fontSize: '1.1rem',
                      letterSpacing: '0.05em',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 14px rgba(56, 189, 248, 0.3)',
                      border: '2px solid #38BDF8',
                      '&:hover': {
                        backgroundColor: '#0F172A',
                        color: '#38BDF8',
                        boxShadow: '0 6px 20px rgba(56, 189, 248, 0.4)',
                      },
                    }}
                  >
                    Download Resume
                  </Button>
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2
                }
              }}
              whileHover={{ scale: 1.05 }}
              style={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    width: '100%',
                    height: '100%',
                    border: '2px solid #38BDF8',
                    borderRadius: '20px',
                    zIndex: 0
                  }
                }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
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
                      filter: 'brightness(0.9) contrast(1.1)',
                      transition: 'all 0.3s ease-in-out',
                      position: 'relative',
                      zIndex: 1,
                      boxShadow: '0 10px 30px -10px rgba(56, 189, 248, 0.3)',
                      '&:hover': {
                        filter: 'brightness(1) contrast(1.1)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 20px 40px -15px rgba(56, 189, 248, 0.4)'
                      },
                      mx: 'auto',
                      display: 'block',
                    }}
                  />
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;