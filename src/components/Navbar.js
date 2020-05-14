import { AppBar, Avatar, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
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

const menuItems = [
    {
        lilstIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    },
    {
        lilstIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        lilstIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/portfolio'
    },
    {
        lilstIcon: <ContactMail />,
        listText: 'Contacts',
        listPath: '/contacts'
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        left: false
    })
    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    }
    const classes = useStyles()
    const sideList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Luis Salas" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.lilstIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
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
                        <MobilRightMenuSlider
                            anchor="left"
                            open={state.left}
                            onClose={toggleSlider('left', false)}
                        >
                            {sideList('left')}
                            <Footer />
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
