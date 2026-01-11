import { AppBar, Avatar, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Apps, AssignmentInd, ContactMail, Home } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../avatar.png';
import Footer from './Footer';

//CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    listItem: {
        color: 'tan'
    }
}))

type DrawerAnchor = 'left';

type MenuItem = {
    listIcon: React.ReactElement;
    listText: string;
    listPath: string;
}

const menuItems: MenuItem[] = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacts',
        listPath: '/contacts'
    }
]

const Navbar: React.FC = () => {
    const [state, setState] = useState<Record<DrawerAnchor, boolean>>({
        left: false
    })
    const toggleSlider = (slider: DrawerAnchor, open: boolean) => () => {
        setState({ ...state, [slider]: open })
    }
    const classes = useStyles()
    const sideList = (slider: DrawerAnchor) => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Luis Salas" />
            <Divider />
            <List>
                {menuItems.map(({ listIcon, listPath, listText }) => (
                    <ListItem button key={listText} component={Link as React.ElementType} to={listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>

            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('left', true)}>
                            <MenuIcon style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}>
                            Portfolio
                    </Typography>
                        <Drawer
                            anchor="left"
                            open={state.left}
                            onClose={toggleSlider('left', false)}
                        >
                            {sideList('left')}
                            <Footer />
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
