import React from 'react';
import { Box, Container, Typography, Grid, Paper, Divider, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';

const About = () => {
  const educationDetails = [
    {
      title: 'BTech in Computer Science ',
      institution: 'Techno Engineering college Banipur (MAKAUT)',
      year: '2022 - Present',
      description: 'Currently pursuing Bachelor of Technology with focus on computer science and software development.',
      sgpa: '7.02'
    },
    {
      title: 'Higher Secondary (12th)',
      institution: 'B.M.H.M.Ucch Vidyalaya | Dumaria Bujurg, Bihar',
      year: '2020 - 2022',
      description: 'Completed Higher Secondary education with focus on Science and Mathematics.',
      percentage: '55.0%',
      
    },
    {
      title: 'Secondary Education (10th)',
      institution: ' B.K.D govt High school, Darbhanga, Bihar',
      year: '2017 - 2018',
      description: 'Completed Secondary education with excellent academic performance.',
      percentage: '64.0%',
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        py: { xs: 8, sm: 10, md: 12 },
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
            About Me
          </Typography>
          
          <Grid container spacing={5} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                style={{ height: '100%' }}
              >
                <Paper elevation={3} sx={{ 
                  p: 4, 
                  height: '100%', 
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, #1E293B 0%, #162032 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 15px 35px rgba(56, 189, 248, 0.2)',
                    border: '1px solid rgba(56, 189, 248, 0.5)'
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ 
                      bgcolor: 'rgba(56, 189, 248, 0.2)', 
                      color: '#38BDF8',
                      mr: 2,
                      width: 48,
                      height: 48
                    }}>
                      <CodeIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ 
                      color: '#38BDF8',
                      fontWeight: 600,
                      position: 'relative',
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
                      Who I Am
                    </Typography>
                  </Box>

                  <Divider sx={{ 
                    mb: 3, 
                    borderColor: 'rgba(56, 189, 248, 0.2)',
                    '&::before, &::after': {
                      borderColor: 'rgba(56, 189, 248, 0.2)',
                    }
                  }} />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box 
                      sx={{ 
                        mb: 3, 
                        p: 3, 
                        borderRadius: '12px',
                        backgroundColor: 'rgba(56, 189, 248, 0.05)',
                        border: '1px solid rgba(56, 189, 248, 0.1)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          backgroundColor: 'rgba(56, 189, 248, 0.08)',
                          transform: 'translateX(5px)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          backgroundColor: '#38BDF8',
                          borderRadius: '4px 0 0 4px'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ 
                        color: '#F8FAFC', 
                        fontWeight: 600, 
                        fontSize: '1.1rem',
                        mb: 1
                      }}>
                        Background
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#94A3B8', 
                        lineHeight: 1.8, 
                        letterSpacing: '0.02em',
                        fontSize: '1rem',
                      }}>
                        I am a passionate 3rd-year BTech student with a strong foundation in computer science
                        and web development. My journey in technology is driven by a desire to create
                        innovative solutions that make a positive impact.
                      </Typography>
                    </Box>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box 
                      sx={{ 
                        mb: 3, 
                        p: 3, 
                        borderRadius: '12px',
                        backgroundColor: 'rgba(56, 189, 248, 0.05)',
                        border: '1px solid rgba(56, 189, 248, 0.1)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          backgroundColor: 'rgba(56, 189, 248, 0.08)',
                          transform: 'translateX(5px)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          backgroundColor: '#38BDF8',
                          borderRadius: '4px 0 0 4px'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ 
                        color: '#F8FAFC', 
                        fontWeight: 600, 
                        fontSize: '1.1rem',
                        mb: 1
                      }}>
                        Skills & Approach
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#94A3B8', 
                        lineHeight: 1.8, 
                        letterSpacing: '0.02em',
                        fontSize: '1rem',
                      }}>
                        I thrive on challenging problems and continuously expand my knowledge in various
                        technologies. My academic journey has equipped me with strong analytical and
                        problem-solving skills.
                      </Typography>
                    </Box>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Box 
                      sx={{ 
                        mb: 3, 
                        p: 3, 
                        borderRadius: '12px',
                        backgroundColor: 'rgba(56, 189, 248, 0.05)',
                        border: '1px solid rgba(56, 189, 248, 0.1)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          backgroundColor: 'rgba(56, 189, 248, 0.08)',
                          transform: 'translateX(5px)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          backgroundColor: '#38BDF8',
                          borderRadius: '4px 0 0 4px'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ 
                        color: '#F8FAFC', 
                        fontWeight: 600, 
                        fontSize: '1.1rem',
                        mb: 1
                      }}>
                        Hobbies & Interests
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#94A3B8', 
                        lineHeight: 1.8, 
                        letterSpacing: '0.02em',
                        fontSize: '1rem'
                      }}>
                        • I am an avid reader and enjoy exploring new books.<br />
                        • Traveling<br />
                        • Trading financial markets<br />
                        • Watching movies
                      </Typography>
                    </Box>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Box 
                      sx={{ 
                        mt: 'auto', 
                        p: 3, 
                        borderRadius: '12px',
                        backgroundColor: 'rgba(56, 189, 248, 0.05)',
                        border: '1px solid rgba(56, 189, 248, 0.1)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          backgroundColor: 'rgba(56, 189, 248, 0.08)',
                          transform: 'translateX(5px)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          backgroundColor: '#38BDF8',
                          borderRadius: '4px 0 0 4px'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ 
                        color: '#F8FAFC', 
                        fontWeight: 600, 
                        fontSize: '1.1rem',
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <LocationOnIcon sx={{ color: '#38BDF8', mr: 1 }} />
                        Location
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: '#94A3B8', 
                        lineHeight: 1.8, 
                        letterSpacing: '0.02em',
                        fontSize: '1rem'
                      }}>
                        Darbhanga, Bihar, India - 847106
                      </Typography>
                    </Box>
                  </motion.div>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                style={{ height: '100%' }}
              >
                <Paper elevation={3} sx={{ 
                  p: 4, 
                  height: '100%', 
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, #1E293B 0%, #162032 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 15px 35px rgba(56, 189, 248, 0.2)',
                    border: '1px solid rgba(56, 189, 248, 0.5)'
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ 
                      bgcolor: 'rgba(56, 189, 248, 0.2)', 
                      color: '#38BDF8',
                      mr: 2,
                      width: 48,
                      height: 48
                    }}>
                      <SchoolIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ 
                      color: '#38BDF8',
                      fontWeight: 600,
                      position: 'relative',
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
                      Education
                    </Typography>
                  </Box>

                  <Divider sx={{ 
                    mb: 3, 
                    borderColor: 'rgba(56, 189, 248, 0.2)',
                    '&::before, &::after': {
                      borderColor: 'rgba(56, 189, 248, 0.2)',
                    }
                  }} />
                  
                  {educationDetails.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box 
                        sx={{ 
                          mb: index !== educationDetails.length - 1 ? 3 : 0, 
                          p: 3, 
                          borderRadius: '12px',
                          backgroundColor: 'rgba(56, 189, 248, 0.05)',
                          border: '1px solid rgba(56, 189, 248, 0.1)',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            backgroundColor: 'rgba(56, 189, 248, 0.08)',
                            transform: 'translateX(5px)',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            backgroundColor: '#38BDF8',
                            borderRadius: '4px 0 0 4px'
                          }
                        }}
                      >
                        <Typography variant="h6" sx={{ 
                          color: '#F8FAFC', 
                          fontWeight: 600, 
                          fontSize: '1.1rem',
                          mb: 1
                        }}>
                          {edu.title}
                        </Typography>
                        
                        <Typography variant="subtitle1" sx={{ 
                          color: '#94A3B8', 
                          fontSize: '0.95rem',
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {edu.institution}
                        </Typography>
                        
                        <Chip 
                          label={edu.year} 
                          size="small"
                          sx={{ 
                            color: '#38BDF8', 
                            fontWeight: 500,
                            backgroundColor: 'rgba(56, 189, 248, 0.1)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            mb: 1.5,
                            '&:hover': { backgroundColor: 'rgba(56, 189, 248, 0.2)' }
                          }} 
                        />
                        
                        <Typography variant="body2" sx={{ color: '#94A3B8', mb: 2, fontSize: '0.9rem', lineHeight: 1.6 }}>
                          {edu.description}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 1, gap: 1 }}>
                          {edu.percentage && (
                            <Typography variant="body2" sx={{ 
                              color: '#38BDF8', 
                              fontWeight: 500,
                              fontSize: '0.85rem',
                              backgroundColor: 'rgba(56, 189, 248, 0.1)',
                              padding: '3px 8px',
                              borderRadius: '4px',
                            }}>
                              Percentage: {edu.percentage}
                            </Typography>
                          )}
                          {edu.sgpa && (
                            <Typography variant="body2" sx={{ 
                              color: '#38BDF8', 
                              fontWeight: 500,
                              fontSize: '0.85rem',
                              backgroundColor: 'rgba(56, 189, 248, 0.1)',
                              padding: '3px 8px',
                              borderRadius: '4px',
                            }}>
                              SGPA: {edu.sgpa}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;