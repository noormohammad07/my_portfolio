import React from 'react';
import { Box, Container, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { Link } from 'react-scroll';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
    { icon: <EmailIcon />, url: 'mailto:your.email@example.com', label: 'Email' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1E293B',
        py: 4,
        borderTop: '1px solid rgba(56, 189, 248, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Link
                key={item.to}
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
                    transition: 'color 0.3s ease'
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialLinks.map((link, index) => (
              <IconButton
                key={index}
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
            ))}
          </Box>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{ color: '#94A3B8', mt: 3 }}
        >
          © {new Date().getFullYear()} Noor Mohammad. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;