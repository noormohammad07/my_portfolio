import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const educationDetails = [
    {
      title: 'BTech in Computer Science',
      institution: 'Your University Name',
      year: '2021 - Present',
      description: 'Currently pursuing Bachelor of Technology with focus on computer science and software development.'
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        py: { xs: 6, sm: 8, md: 10 },
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
            About Me
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', bgcolor: '#1E293B', border: '1px solid #38BDF8' }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#38BDF8' }}>
                  Who I Am
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: '#94A3B8' }}>
                  I am a passionate third-year BTech student with a strong foundation in computer science
                  and web development. My journey in technology is driven by a desire to create
                  innovative solutions that make a positive impact.
                </Typography>
                <Typography variant="body1" sx={{ color: '#94A3B8' }}>
                  I thrive on challenging problems and continuously expand my knowledge in various
                  technologies. My academic journey has equipped me with strong analytical and
                  problem-solving skills.
                </Typography>
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
                <Typography variant="h5" sx={{ mb: 2, color: '#38BDF8' }}>
                  Education
                </Typography>
                {educationDetails.map((edu, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ color: '#F8FAFC' }}>
                      {edu.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#94A3B8' }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#94A3B8', mb: 1 }}>
                      {edu.year}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                      {edu.description}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;