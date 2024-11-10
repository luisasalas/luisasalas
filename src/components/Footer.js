import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import GitlabIcon from '../images/gitlab-logo-500.svg';
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
                href='https://www.linkedin.com/in/luis-salascorona/'
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<GitHubIcon />}
                href='https://github.com/luisasalas'
            />
            <BottomNavigationAction
                style={{ padding: 0 }}
                className={classes.root}
                icon={<GitlabIcon />}
                href='https://gitlab.com/luiscorona193'
                
            />
        </BottomNavigation>
    )
}

export default Footer
