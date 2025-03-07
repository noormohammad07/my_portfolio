import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      image: 'https://source.unsplash.com/random/800x600/?website',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A React-based task management application with drag-and-drop functionality',
      image: 'https://source.unsplash.com/random/800x600/?app',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Material-UI',
      image: 'https://source.unsplash.com/random/800x600/?portfolio',
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <Box
      id="projects"
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
            My Projects
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: '#1E293B',
                      border: '1px solid #38BDF8',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease',
                        boxShadow: '0 10px 30px -15px rgba(56, 189, 248, 0.2)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        filter: 'brightness(0.8)',
                        transition: 'filter 0.3s ease',
                        '&:hover': {
                          filter: 'brightness(1)'
                        }
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ 
                        color: '#38BDF8',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' }
                      }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: { xs: 1.5, sm: 2 } }}>
                      <Button 
                        size="small" 
                        href={project.demoLink} 
                        target="_blank"
                        sx={{ 
                          color: '#38BDF8',
                          '&:hover': { backgroundColor: 'rgba(56, 189, 248, 0.1)' }
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button 
                        size="small" 
                        href={project.codeLink} 
                        target="_blank"
                        sx={{ 
                          color: '#38BDF8',
                          '&:hover': { backgroundColor: 'rgba(56, 189, 248, 0.1)' }
                        }}
                      >
                        View Code
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;