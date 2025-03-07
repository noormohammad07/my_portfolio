import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(25, 42, 70, 0.95)', backdropFilter: 'blur(8px)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <Box 
          component="img"
          src={logo}
          alt="Logo"
          sx={{ 
            height: { xs: 35, sm: 40 },
            width: 'auto',
            mr: { xs: 1, sm: 2 },
            flexShrink: 0,
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, ml: 'auto' }}>
          {menuItems.map((item) => (
            <Button
              key={item.to}
              component={Link}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              sx={{
                color: '#94A3B8',
                fontWeight: 500,
                position: 'relative',
                padding: '6px 12px',
                minWidth: 'auto',
                '&:hover': {
                  color: '#38BDF8',
                  backgroundColor: 'transparent',
                  '&::after': {
                    width: '100%',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -1,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#38BDF8',
                  transition: 'width 0.3s ease',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;