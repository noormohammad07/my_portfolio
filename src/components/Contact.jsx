import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/noormohammad07', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/noor-mohammad-89851425b/', label: 'LinkedIn' },
    { icon: <EmailIcon />, url: 'mailto:noormohammad@example.com', label: 'Email' }
  ];

  return (
    <Box
      id="contact"
      sx={{
        minHeight: 'auto',
        py: { xs: 3, sm: 4, md: 6 },
        background: '#0F172A'
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ 
              mb: { xs: 3, sm: 4 }, 
              textAlign: 'center', 
              color: '#F8FAFC', 
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Get In Touch
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, bgcolor: '#1E293B', border: '1px solid #38BDF8' }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#38BDF8',
                            },
                            '&:hover fieldset': {
                              borderColor: '#38BDF8',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#94A3B8',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: '#F8FAFC',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#38BDF8',
                            },
                            '&:hover fieldset': {
                              borderColor: '#38BDF8',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#94A3B8',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: '#F8FAFC',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#38BDF8',
                            },
                            '&:hover fieldset': {
                              borderColor: '#38BDF8',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#94A3B8',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: '#F8FAFC',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="outlined"
                        size="large"
                        fullWidth
                        sx={{
                          color: '#38BDF8',
                          borderColor: '#38BDF8',
                          borderWidth: '2px',
                          '&:hover': {
                            borderColor: '#38BDF8',
                            backgroundColor: 'rgba(56, 189, 248, 0.1)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ 
                p: { xs: 2, sm: 3 }, 
                height: '100%', 
                bgcolor: '#1E293B', 
                border: '1px solid #38BDF8',
                borderRadius: { xs: 1, sm: 2 }
              }}>
                <Typography variant="h5" sx={{ mb: 3, color: '#38BDF8', fontWeight: 600 }}>
                  Connect With Me
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#94A3B8' }}>
                  Feel free to reach out to me through any of these platforms. I'm always
                  interested in new opportunities and collaborations.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        sx={{
                          color: '#38BDF8',
                          '&:hover': { color: '#F8FAFC' }
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;