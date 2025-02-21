import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };
    const handleCloseDrawer = () => {
        setIsOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} style={{ color: 'white' }}>
                <Toolbar style={{ backgroundColor: 'black' }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                        <Box sx={{ width: 250, backgroundColor: 'black', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            {/* Logo at the top */}
                            <Box sx={{ p: 2, textAlign: 'center' }}>
                                <img
                                    src="/logo.png"
                                    alt="Home"
                                    style={{
                                        transition: 'transform 0.3s ease',
                                        height: '150px',
                                        width: '150px'
                                    }}
                                />
                                <Typography color="white" >
                                    ShinyTomato
                                </Typography>
                            </Box>
                            <Divider />

                            {/* Main List */}
                            <Box sx={{ flexGrow: 1 }}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton component={Link} to="/" style={{ paddingLeft: '20px' }} onClick={handleCloseDrawer}>
                                            <img
                                                src="/Home.png"
                                                alt="Home"
                                                style={{
                                                    marginRight: '10px',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            />
                                            <ListItemText sx={{ color: 'white' }} primary="Home" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component={Link} to="/supportus" style={{ paddingLeft: '20px' }} onClick={handleCloseDrawer}>
                                            <img
                                                src="/Star.png"
                                                alt="Support Us"
                                                style={{
                                                    marginRight: '10px',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            />
                                            <ListItemText sx={{ color: 'white' }} primary="Support Us" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component={Link} to="/howweoperate" style={{ paddingLeft: '20px' }} onClick={handleCloseDrawer}>
                                            <img
                                                src="/Suitcase.png"
                                                alt="How We Operate"
                                                style={{
                                                    marginRight: '10px',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            />
                                            <ListItemText sx={{ color: 'white' }} primary="How We Operate" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component={Link} to="/aboutus" style={{ paddingLeft: '20px' }} onClick={handleCloseDrawer}>
                                            <img
                                                src="/Book.png"
                                                alt="About"
                                                style={{
                                                    marginRight: '10px',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            />
                                            <ListItemText sx={{ color: 'white' }} primary="About" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Drawer>

                    <Box
                        marginLeft="1rem"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{ flexGrow: 1 }}
                        mb={2}
                    >
                        <img src="/logo.png" alt="logo" style={{ height: '90px', width: '90px' }} />
                        <Typography color="white" fontWeight="bold">
                            ShinyTomato
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
