import * as React from 'react';
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
    useNavigate,
    Link
} from 'react-router-dom';
import {
    drawerWidth,
    headers,
    socialMediaLinks
} from '../data/constants';

function Header(props) {
    const {window} = props;
    const [mobileOpen,setMobileOpen] = React.useState(false);

    let navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Link to="/" style={{textDecoration: 'none',color: "inherit"}}>
                <Typography variant="h6" sx={{my: 2}}>
                    Varun Peesapati
                </Typography>
            </Link>
            <Divider />
            <List>
                {
                    headers.map((header) => (
                        <ListItem key={header.title} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}} onClick={() => navigate(header.path)}>
                                <ListItemText primary={header.title} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            <ListItem key="social-media-icons" disablePadding sx={{mx: 5}}>
                {
                    socialMediaLinks.map((socialMediaLink) => (
                        <IconButton color="inherit" href={socialMediaLink.link}>
                            {socialMediaLink.icon}
                        </IconButton>
                    ))
                }
            </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar component="nav" sx={{backgroundColor: "#000000"}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2,display: {sm: 'none'}}}
                    >
                        <MenuIcon />
                    </IconButton>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{fontSize: 32,textAlign: 'left',flexGrow: 1,display: {xs: 'none',sm: 'block'}}}
                >
                    <Link to="/" style={{textDecoration: 'none',color: 'inherit'}}>
                        Varun Peesapati
                    </Link>
                </Typography>
                <Box sx={{display: {xs: 'none',sm: 'block'}}}>
                    {
                        headers.map((header) => (
                            <Button key={header.title} sx={{color: '#FFF'}} onClick={() => navigate(header.path)}>
                                {header.title}
                            </Button>
                        ))
                    }
                    {
                        socialMediaLinks.map((socialMediaLink) => (
                            <IconButton color="inherit" href={socialMediaLink.link}>
                                {socialMediaLink.icon}
                            </IconButton>
                        ))
                    }
                </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: {xs: 'block',sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box',width: drawerWidth}
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;