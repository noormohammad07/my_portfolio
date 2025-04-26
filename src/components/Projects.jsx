import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, IconButton, Badge, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CodeIcon from '@mui/icons-material/Code';
import PreviewIcon from '@mui/icons-material/Preview';
import StarIcon from '@mui/icons-material/Star';
// Import specific project images instead of the generic logo
import ecomImage from '../assets/e-com.png';
import lmsImage from '../assets/lms.png';
import portfolioImage from '../assets/portfolio.png';

const Projects = () => {
  const [likes, setLikes] = useState({});

  const handleLike = (index) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [index]: (prevLikes[index] || 0) + 1
    }));
  };

  const projects = [
    {
      title: 'E-commerce',
      description: 'E-commerce website',
      image: ecomImage,
      demoLink: 'https://noormohammad07.github.io/project/',
      codeLink: 'https://github.com/noormohammad07',
      tags: ['React', 'Material UI']
    },
    {
      title: 'LMS',
      description: 'School management system',
      image: lmsImage,
      demoLink: 'https://noormohammad07.github.io/project/',
      codeLink: 'https://github.com/noormohammad07',
      tags: ['JavaScript', 'CSS']
    },
    {
      title: 'Portfolio',
      description: 'Available now on the web',
      image: portfolioImage,
      demoLink: 'https://noormohammad07.github.io/project/',
      codeLink: 'https://github.com/noormohammad07',
      tags: ['React', 'Framer Motion']
    }
  ];

  return (
    <Box
      id="projects"
      sx={{
        minHeight: 'auto',
        py: { xs: 6, sm: 8, md: 10 },
        background: 'linear-gradient(180deg, #0F172A 0%, #0B1120 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(56, 189, 248, 0.05) 2%, transparent 0%)',
          backgroundSize: '50px 50px',
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '30%',
          background: 'linear-gradient(to top, rgba(11, 17, 32, 0.8) 0%, rgba(11, 17, 32, 0) 100%)',
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
          <Box sx={{ mb: { xs: 6, sm: 7, md: 8 }, textAlign: 'center' }}>
            <Chip 
              label="PORTFOLIO" 
              size="small" 
              sx={{ 
                bgcolor: 'rgba(56, 189, 248, 0.1)', 
                color: '#38BDF8',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                mb: 2,
                '&:hover': { bgcolor: 'rgba(56, 189, 248, 0.2)' }
              }} 
            />
            <Typography
              variant="h3"
              component="h2"
              sx={{ 
                mb: 2, 
                color: '#F8FAFC', 
                fontWeight: 'bold',
                fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
                position: 'relative',
                display: 'inline-block',
                background: 'linear-gradient(90deg, #F8FAFC, #CBD5E1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              My Projects
            </Typography>
            <Box
              sx={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 1) 50%, rgba(56, 189, 248, 0.2) 100%)',
                borderRadius: '2px',
                mx: 'auto',
                mb: 3
              }}
            />
            <Typography
              variant="body1"
              sx={{ 
                maxWidth: '650px', 
                mx: 'auto',
                color: '#94A3B8', 
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
                letterSpacing: '0.02em'
              }}
            >
              Explore my latest work showcasing my skills in web development and design.
              Each project represents my passion for creating engaging digital experiences.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, transition: { duration: 0.4 } }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(145deg, #1E293B 0%, #162032 100%)',
                      borderRadius: '16px',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      overflow: 'hidden',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      '&:hover': {
                        boxShadow: '0 20px 40px -15px rgba(56, 189, 248, 0.4)',
                        border: '1px solid rgba(56, 189, 248, 0.7)',
                        transform: 'translateY(-5px)'
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.15), transparent 70%)',
                        opacity: 0,
                        transition: 'opacity 0.5s ease',
                        zIndex: 0
                      },
                      '&:hover::before': {
                        opacity: 1
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="220"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          filter: 'brightness(0.85) contrast(1.1)',
                          transition: 'all 0.7s ease',
                          transform: 'scale(1.01)',
                          '&:hover': {
                            filter: 'brightness(1) contrast(1.05)',
                            transform: 'scale(1.08)'
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
                          background: 'linear-gradient(to top, rgba(14, 23, 42, 0.9) 0%, rgba(14, 23, 42, 0.5) 50%, rgba(14, 23, 42, 0.2) 100%)',
                          zIndex: 1,
                          transition: 'background 0.5s ease',
                          '&:hover': {
                            background: 'linear-gradient(to top, rgba(14, 23, 42, 0.85) 0%, rgba(14, 23, 42, 0.4) 50%, rgba(14, 23, 42, 0.1) 100%)'
                          }
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          zIndex: 2,
                          display: 'flex',
                          alignItems: 'center',
                          backgroundColor: 'rgba(14, 23, 42, 0.7)',
                          backdropFilter: 'blur(4px)',
                          borderRadius: '6px',
                          padding: '4px 8px',
                          border: '1px solid rgba(56, 189, 248, 0.3)'
                        }}
                      >
                        <StarIcon sx={{ color: '#FFD700', fontSize: '0.9rem', mr: 0.5 }} />
                        <Typography variant="caption" sx={{ color: '#F8FAFC', fontWeight: 'bold' }}>
                          Featured
                        </Typography>
                      </Box>
                    </Box>
                    
                    <CardContent sx={{ flexGrow: 1, p: { xs: 3, sm: 4 }, position: 'relative', zIndex: 2 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          color: '#38BDF8',
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          mb: 2,
                          fontWeight: 700,
                          letterSpacing: '0.5px',
                          textShadow: '0 2px 10px rgba(56, 189, 248, 0.2)',
                          display: 'inline-block',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -6,
                            left: 0,
                            width: '40px',
                            height: '2px',
                            background: 'linear-gradient(90deg, #38BDF8, transparent)',
                            borderRadius: '2px'
                          }
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#CBD5E1', 
                          fontSize: '1rem', 
                          mb: 3, 
                          lineHeight: 1.7,
                          fontWeight: 400,
                          letterSpacing: '0.015em'
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Divider sx={{ mb: 2, opacity: 0.1 }} />
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                        {project.tags.map((tag, tagIndex) => (
                          <Chip 
                            key={tagIndex} 
                            label={tag} 
                            size="small" 
                            sx={{ 
                              bgcolor: 'rgba(56, 189, 248, 0.1)', 
                              color: '#38BDF8',
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              border: '1px solid rgba(56, 189, 248, 0.2)',
                              transition: 'all 0.3s ease',
                              '&:hover': { 
                                bgcolor: 'rgba(56, 189, 248, 0.2)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                              }
                            }} 
                          />
                        ))}
                      </Box>
                    </CardContent>
                    
                    <CardActions 
                      sx={{ 
                        p: { xs: 2.5, sm: 3 }, 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        borderTop: '1px solid rgba(56, 189, 248, 0.1)',
                        backgroundColor: 'rgba(14, 23, 42, 0.5)'
                      }}
                    >
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button 
                          size="small" 
                          href={project.demoLink} 
                          target="_blank"
                          startIcon={<PreviewIcon />}
                          sx={{ 
                            color: '#38BDF8',
                            borderRadius: '8px',
                            padding: '6px 12px',
                            fontWeight: 600,
                            textTransform: 'none',
                            '&:hover': { 
                              backgroundColor: 'rgba(56, 189, 248, 0.1)',
                              transform: 'translateY(-2px)',
                              transition: 'transform 0.3s ease'
                            }
                          }}
                        >
                          Live Demo
                        </Button>
                        <Button 
                          size="small" 
                          href={project.codeLink} 
                          target="_blank"
                          startIcon={<CodeIcon />}
                          sx={{ 
                            color: '#38BDF8',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontWeight: 500,
                            textTransform: 'none',
                            '&:hover': { 
                              backgroundColor: 'rgba(56, 189, 248, 0.1)',
                              transform: 'translateY(-2px)',
                              transition: 'transform 0.3s ease'
                            }
                          }}
                        >
                          GitHub
                        </Button>
                      </Box>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <IconButton 
                          onClick={() => handleLike(index)} 
                          sx={{ 
                            color: likes[index] ? '#ff6d75' : '#94A3B8',
                            transition: 'all 0.3s ease',
                            backgroundColor: likes[index] ? 'rgba(255, 109, 117, 0.1)' : 'transparent',
                            '&:hover': { 
                              color: '#ff6d75', 
                              backgroundColor: 'rgba(255, 109, 117, 0.1)'
                            }
                          }}
                        >
                          <Badge 
                            badgeContent={likes[index] || 0} 
                            color="primary" 
                            sx={{ 
                              '& .MuiBadge-badge': { 
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                backgroundColor: likes[index] ? '#ff6d75' : '#38BDF8'
                              } 
                            }}
                          >
                            <FavoriteIcon />
                          </Badge>
                        </IconButton>
                      </motion.div>
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