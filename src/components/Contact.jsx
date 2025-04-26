import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/noormohammad07', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/noor-mohammad-89851425b/', label: 'LinkedIn' },
    { icon: <EmailIcon />, url: 'mailto:noor24400122051@tecb.eud.in', label: 'Email' }
  ];

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        py: { xs: 5, sm: 6, md: 8 },
        background: 'linear-gradient(180deg, #0F172A 0%, #0B1120 100%)',
        position: 'relative',
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
              mb: { xs: 4, sm: 5 }, 
              textAlign: 'center', 
              color: '#F8FAFC', 
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 1) 50%, rgba(56, 189, 248, 0.2) 100%)',
                borderRadius: '2px'
              }
            }}
          >
            Get In Touch
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: { xs: 3, sm: 4 }, 
                    bgcolor: 'rgba(30, 41, 59, 0.8)', 
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: '16px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 15px 35px rgba(56, 189, 248, 0.15)',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <form onSubmit={handleSubmit} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              '& fieldset': {
                                borderColor: 'rgba(56, 189, 248, 0.4)',
                                borderWidth: '2px'
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(56, 189, 248, 0.7)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#38BDF8',
                                boxShadow: '0 0 8px rgba(56, 189, 248, 0.3)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              color: '#94A3B8',
                              '&.Mui-focused': {
                                color: '#38BDF8'
                              }
                            },
                            '& .MuiOutlinedInput-input': {
                              color: '#F8FAFC',
                              padding: '16px 18px',
                            },
                            transition: 'transform 0.2s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)'
                            }
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
                              borderRadius: '12px',
                              '& fieldset': {
                                borderColor: 'rgba(56, 189, 248, 0.4)',
                                borderWidth: '2px'
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(56, 189, 248, 0.7)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#38BDF8',
                                boxShadow: '0 0 8px rgba(56, 189, 248, 0.3)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              color: '#94A3B8',
                              '&.Mui-focused': {
                                color: '#38BDF8'
                              }
                            },
                            '& .MuiOutlinedInput-input': {
                              color: '#F8FAFC',
                              padding: '16px 18px',
                            },
                            transition: 'transform 0.2s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)'
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          variant="outlined"
                          multiline
                          rows={5}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              '& fieldset': {
                                borderColor: 'rgba(56, 189, 248, 0.4)',
                                borderWidth: '2px'
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(56, 189, 248, 0.7)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#38BDF8',
                                boxShadow: '0 0 8px rgba(56, 189, 248, 0.3)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              color: '#94A3B8',
                              '&.Mui-focused': {
                                color: '#38BDF8'
                              }
                            },
                            '& .MuiOutlinedInput-input': {
                              color: '#F8FAFC',
                            },
                            transition: 'transform 0.2s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)'
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ mt: 'auto' }}>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            endIcon={<SendIcon />}
                            sx={{
                              background: 'linear-gradient(90deg, #38BDF8 0%, #0EA5E9 100%)',
                              color: '#FFFFFF',
                              borderRadius: '12px',
                              padding: '14px 0',
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              textTransform: 'none',
                              boxShadow: '0 4px 14px rgba(56, 189, 248, 0.3)',
                              '&:hover': {
                                background: 'linear-gradient(90deg, #0EA5E9 0%, #38BDF8 100%)',
                                boxShadow: '0 6px 20px rgba(56, 189, 248, 0.4)',
                              },
                            }}
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Paper elevation={3} sx={{ 
                  p: { xs: 3, sm: 4 }, 
                  height: '100%', 
                  bgcolor: 'rgba(30, 41, 59, 0.8)', 
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 15px 35px rgba(56, 189, 248, 0.15)',
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <Typography variant="h5" sx={{ 
                    mb: 3, 
                    color: '#38BDF8', 
                    fontWeight: 600,
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: '40px',
                      height: '3px',
                      background: '#38BDF8',
                      borderRadius: '2px'
                    }
                  }}>
                    Connect With Me
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 4, 
                    color: '#94A3B8', 
                    fontSize: '1.1rem', 
                    lineHeight: 1.7,
                    letterSpacing: '0.02em'
                  }}>
                    Feel free to reach out to me through any of these platforms. I'm always
                    interested in new opportunities and collaborations.
                  </Typography>
                  
                  <Box sx={{ 
                    p: 3, 
                    mb: 3, 
                    backgroundColor: 'rgba(56, 189, 248, 0.05)', 
                    borderRadius: '12px',
                    borderLeft: '3px solid #38BDF8'
                  }}>
                    <Typography variant="body1" sx={{ color: '#94A3B8', fontSize: '1rem' }}>
                      Looking forward to connecting with you and discussing potential projects or opportunities.
                      Don't hesitate to reach out!
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 3, 
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    mt: 'auto'
                  }}>
                    {socialLinks.map((link, index) => (
                      <Tooltip title={link.label} key={index}>
                        <motion.div
                          whileHover={{ scale: 1.15, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                          <IconButton
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            sx={{
                              color: '#38BDF8',
                              backgroundColor: 'rgba(56, 189, 248, 0.1)',
                              padding: '15px',
                              border: '2px solid rgba(56, 189, 248, 0.3)',
                              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                              '&:hover': { 
                                color: '#FFFFFF',
                                backgroundColor: '#38BDF8',
                                boxShadow: '0 6px 15px rgba(56, 189, 248, 0.3)'
                              }
                            }}
                          >
                            {link.icon}
                          </IconButton>
                        </motion.div>
                      </Tooltip>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;