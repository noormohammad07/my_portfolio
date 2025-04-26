import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: ' core Java', proficiency: 90 },
    { name: 'HTML/CSS', proficiency: 75 },
    { name: 'JavaScript', proficiency: 70 },
    { name: 'React.js', proficiency: 80 },
    { name: 'My SQL', proficiency: 75 },
    { name: 'Problem Solving', proficiency: 85},
    { name: 'Frontend', proficiency: 75 },
    { name: 'Backend', proficiency: 80 }
  ];

  return (
    <Box
      id="skills"
      sx={{
        minHeight: 'auto',
        py: { xs: 3, sm: 4, md: 6 },
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
            Technical Skills
          </Typography>

          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, sm: 3 },
                      background: 'linear-gradient(145deg, #1E293B 0%, #162032 100%)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                      transition: 'all 0.4s ease',
                      '&:hover': { 
                        boxShadow: '0 12px 30px -10px rgba(56, 189, 248, 0.3)',
                        border: '1px solid rgba(56, 189, 248, 0.6)'
                      }
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#38BDF8', 
                        mb: 1.5, 
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        '&::before': {
                          content: '""',
                          display: 'inline-block',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#38BDF8',
                          marginRight: '10px',
                          boxShadow: '0 0 10px rgba(56, 189, 248, 0.7)'
                        }
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Box sx={{ position: 'relative', mb: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.proficiency}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: 'rgba(148, 163, 184, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: '#38BDF8',
                            borderRadius: 5,
                            backgroundImage: 'linear-gradient(90deg, #38BDF8, #0EA5E9)',
                            boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)'
                          }
                        }}
                      />
                      <Box 
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                          animation: 'shimmer 2s infinite',
                          '@keyframes shimmer': {
                            '0%': { transform: 'translateX(-100%)' },
                            '100%': { transform: 'translateX(100%)' }
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography
                        variant="body2"
                        sx={{ color: '#94A3B8', fontWeight: 500 }}
                      >
                        Proficiency
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: '#38BDF8', 
                          fontWeight: 700,
                          backgroundColor: 'rgba(56, 189, 248, 0.1)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '0.85rem'
                        }}
                      >
                        {skill.proficiency}%
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;