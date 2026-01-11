import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Navbar from './Navbar'

const userStyles = makeStyles({
    mainContainer: {
        background: '#233',
        height: '100%',
        minHeight: '100vh'
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)',
        position: 'relative'
    },
    comingSoon: {
        color: 'tomato',
        textTransform: 'uppercase',
        fontSize: '3rem',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '3rem 0'
    }
})
const Portfolio: React.FC = () => {
    const classes = userStyles()
    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />
            <Box component='div' className={classes.contentContainer}>
                <Typography
                    variant='h2'
                    className={classes.comingSoon}>
                    Coming Soon
                </Typography>
            </Box>
        </Box>
    )
}

export default Portfolio
