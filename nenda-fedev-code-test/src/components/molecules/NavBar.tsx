import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { 
    AppBar, 
    Box, 
    Toolbar, 
    Typography,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Button,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { IconBtn } from '../atoms/Buttons';
import { Logo } from '../atoms';

interface NavBarProps {
    children?: React.ReactNode;
    container?: (() => HTMLElement) | undefined;
}

const navItems = ['/admin', '/signin'];

const drawerWidth = 240;

const NavBar: React.FC<NavBarProps> = ({container}) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box 
            onClick={handleDrawerToggle} 
            sx={{ textAlign: 'center' }}
        >
            <Logo
                classes={{my: 2}}
            >
                Logo
            </Logo>
            <Divider />
            <List>
            {navItems.map((item) => { 
                
                return (
                    <ListItem key={item} disablePadding> 
                        <Link to={item} style={{ color: 'inherit', textDecoration: 'none' }}>  
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>  
                        </Link>
                    </ListItem>
                )
            })}
            </List>
        </Box>
    );

    return (
        <>
            {/** Desktop view */}
            <AppBar component="nav">
                <Toolbar>
                <IconBtn
                    handleOnClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconBtn>
                <Logo
                    classes={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                > 
                 Logo
                </Logo>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Link to={item} style={{color: 'inherit', textDecoration: 'none' }}>
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        </Link>
                    ))}
                </Box>
                </Toolbar>
            </AppBar>
            {/** mobile view */}
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

export default NavBar
