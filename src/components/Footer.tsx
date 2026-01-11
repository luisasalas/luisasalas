import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
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

const Footer: React.FC = () => {
    const classes = useStyles()
    return (
        <BottomNavigation style={{ background: '#222', width: 'auto' }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedInIcon />}
                component='a'
                href='https://www.linkedin.com/in/luis-salascorona/'
                target='_blank'
                rel='noreferrer'
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<GitHubIcon />}
                component='a'
                href='https://github.com/luisasalas'
                target='_blank'
                rel='noreferrer'
            />
        </BottomNavigation>
    )
}

export default Footer
