import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, Avatar } from '@mui/material';

function Navbar() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact Us' }
    ];

    return (
        <AppBar position="fixed" elevation={0} style={{
            zIndex: '20',
            background: 'linear-gradient(to bottom, black 50%, transparent)',
            padding: '40px 40px',
        }}>
            <Toolbar style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                gap: '80px'
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
                <Box style={{ display: 'flex', gap: '70px' }}>
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

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
