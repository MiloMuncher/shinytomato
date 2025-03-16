import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact Us' }
    ];
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <AppBar position="fixed" elevation={0} style={{
            zIndex: '20',
            background: 'linear-gradient(to bottom, black 60%, transparent)',
            padding: '10px 40px',
        }}>
            <Toolbar style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                gap: '80px',
                justifyContent: 'space-between'
            }}>

                {/* Logo with Avatar */}
                <Box style={{ position: 'relative' }}>

                    <img
                        src="/logo.png"
                        alt="Logo"
                        style={{
                            width: '100px',
                            height: '100px',
                        }}
                    />
                </Box>

                {/* Navigation Links */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '70px', flexGrow: 1 }}>
                    {navItems.map((item, index) => (
                        <Link key={index} to={item.path} style={{
                            textDecoration: 'none',
                            color: location.pathname === item.path ? 'white' : 'gray',
                            fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                            transition: 'color 0.3s ease'
                        }}>
                            <Typography>{item.label}</Typography>
                        </Link>
                    ))}
                </Box>
                {/* Mobile Menu Button */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton edge="end" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }} style={{ color: 'white' }}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <List>
                    {navItems.map((item, index) => (
                        <ListItem button key={index} onClick={handleDrawerToggle}>
                            <Link to={item.path} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                                <ListItemText primary={item.label} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
}

export default Navbar;
