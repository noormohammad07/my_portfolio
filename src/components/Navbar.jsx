import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger, Slide, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'rgba(30, 41, 59, 0.98)', height: '100%', py: 2 }}>
      <Typography
        variant="h6"
        sx={{ 
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: '#38BDF8',
          my: 2,
          fontSize: '1.5rem'
        }}
      >
        Bihari_007
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.to} disablePadding sx={{ display: 'block', my: 1 }}>
            <Button
              component={Link}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={handleDrawerToggle}
              sx={{
                width: '100%',
                color: '#94A3B8',
                fontSize: '1.1rem',
                py: 1,
                '&:hover': {
                  color: '#38BDF8',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                },
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          sx={{ 
            background: scrolled 
              ? 'rgba(15, 23, 42, 0.95)' 
              : 'rgba(15, 23, 42, 0.8)', 
            backdropFilter: 'blur(10px)', 
            boxShadow: scrolled 
              ? '0 4px 20px rgba(0, 0, 0, 0.2)' 
              : '0 2px 10px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <Toolbar sx={{ py: { xs: 0.5, md: 1 } }}>
            <Typography
              variant="h6"
              sx={{ 
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '#38BDF8',
                mr: { xs: 1, sm: 2 },
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, text-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  textShadow: '0 0 8px rgba(56, 189, 248, 0.5)'
                }
              }}
            >
              Bihari_007
            </Typography>
            
            {/* Mobile view */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, ml: 'auto', color: '#38BDF8' }}
            >
              <MenuIcon />
            </IconButton>
            
            {/* Desktop view */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 1, md: 2 }, ml: 'auto' }}>
              {menuItems.map((item, index) => (
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
                    padding: '8px 16px',
                    minWidth: 'auto',
                    overflow: 'hidden',
                    transition: 'color 0.3s ease',
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
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: '2px',
                      backgroundColor: '#38BDF8',
                      transition: 'width 0.3s ease',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px rgba(56, 189, 248, 0.5)'
                    },
                    '&.active': {
                      color: '#38BDF8',
                      '&::after': {
                        width: '100%',
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            bgcolor: 'rgba(15, 23, 42, 0.98)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(56, 189, 248, 0.2)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;