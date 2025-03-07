import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Web Development', proficiency: 85 },
    { name: 'React.js', proficiency: 80 },
    { name: 'JavaScript', proficiency: 85 },
    { name: 'HTML/CSS', proficiency: 90 },
    { name: 'Node.js', proficiency: 75 },
    { name: 'Database Management', proficiency: 70 },
    { name: 'Problem Solving', proficiency: 85 },
    { name: 'Git & Version Control', proficiency: 80 }
  ];

  return (
    <Box
      id="skills"
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
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, sm: 3 },
                      background: '#1E293B',
                      border: '1px solid #38BDF8',
                      '&:hover': { 
                        transform: 'translateY(-5px)', 
                        transition: 'transform 0.3s ease',
                        boxShadow: '0 10px 30px -15px rgba(56, 189, 248, 0.2)'
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#38BDF8', mb: 1, fontWeight: 600 }}>
                      {skill.name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={skill.proficiency}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: 'rgba(148, 163, 184, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#38BDF8',
                          borderRadius: 5
                        }
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: '#94A3B8', mt: 1, textAlign: 'right', fontWeight: 500 }}
                    >
                      {skill.proficiency}%
                    </Typography>
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