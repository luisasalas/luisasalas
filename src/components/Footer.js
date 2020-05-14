import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/styles';
import React from 'react';


const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: '250px'
        },
        '& .MuiSvgIcon-root': {
            fill: 'tan',
            '&:hover': {
                fill: 'tomato',
                fontSize: '1.8rem'

            }
        }
    }
})

function Footer() {
    const classes = useStyles()
    return (
        <BottomNavigation width='auto' style={{ background: '#222' }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedInIcon />}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<GitHubIcon />}
            />
            <BottomNavigationAction
                style={{ padding: 0 }}
                className={classes.root}
                icon={<InstagramIcon />}
            />
        </BottomNavigation>
    )
}

export default Footer
