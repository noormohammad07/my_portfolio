import React from 'react';
import { Box, Container, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { Link } from 'react-scroll';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Footer = () => {
  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/noormohammad07', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/noor-mohammad-89851425b/', label: 'LinkedIn' },
    { icon: <EmailIcon />, url: 'mailto:noormohammad@example.com', label: 'Email' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgba(30, 41, 59, 0.95)',
        py: 4,
        borderTop: '1px solid rgba(56, 189, 248, 0.2)',
        position: 'relative',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(56, 189, 248, 0.02) 2%, transparent 0%)',
          backgroundSize: '50px 50px',
          zIndex: 0,
          opacity: 0.5
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.to}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  style={{ cursor: 'pointer' }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#94A3B8',
                      '&:hover': { color: '#38BDF8' },
                      transition: 'color 0.3s ease',
                      fontWeight: 500,
                      position: 'relative',
                      padding: '4px 8px',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: 0,
                        height: '2px',
                        backgroundColor: '#38BDF8',
                        transition: 'width 0.3s ease, left 0.3s ease',
                        transform: 'translateX(-50%)',
                        borderRadius: '2px'
                      },
                      '&:hover::after': {
                        width: '80%'
                      }
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
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
                    backgroundColor: 'rgba(56, 189, 248, 0.05)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      color: '#F8FAFC',
                      backgroundColor: 'rgba(56, 189, 248, 0.2)',
                      boxShadow: '0 0 15px rgba(56, 189, 248, 0.3)'
                    }
                  }}
                >
                  {link.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="body2"
            align="center"
            sx={{ 
              color: '#94A3B8', 
              mt: 3,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(56, 189, 248, 0), rgba(56, 189, 248, 0.5), rgba(56, 189, 248, 0))',
              }
            }}
          >
            © {new Date().getFullYear()} <Box component="span" sx={{ color: '#38BDF8' }}>Noor Mohammad</Box>. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;