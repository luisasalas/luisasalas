import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Navbar from './Navbar'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: '#233'
    },
    timeline: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: 0
        },
        '&:after': {
            content: "''",
            display: 'table',
            clear: 'both'
        },
        [theme.breakpoints.up('md')]: {
            padding: '2rem',
            '&:before': {
                left: 'calc(50% - 1px)',
                right: 'auto'
            }
        }
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: '""',
            position: 'absolute'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            right: '0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.62rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: 'tan'
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent tomato tomato'
            }
        }
    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: "1.8rem",
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before': {
                display: 'none'
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'
    }
}))

const Resume: React.FC = () => {
    const classes = useStyles()
    return (<>
        <Navbar />
        <Box
            component='header'
            className={classes.mainContainer}>
            <Typography
                variant='h4'
                align='center'
                className={classes.heading}>
                working experience
            </Typography>
            <Box
                component='div'
                className={classes.timeline}>
                <Typography
                    variant='h2'
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2015
                </Typography>
                <Box
                    component='div'
                    className={classes.timeLineItem}>
                    <Typography
                        variant='h5'
                        align='center'
                        className={classes.subHeading}>
                        Software Developer
                    </Typography>
                    <Typography
                        variant='body1'
                        align='center'
                        style={{ color: 'tomato' }}>
                        Open Sky Software
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        style={{ color: 'tan' }}>
                        Java EE full stack software engineer. Develop and implement the MVC architectural pattern.
                        Develop Web services (REST) to interact with other components.
                        Integrated Spring DAO for data access use with Hibernate.
                    </Typography>
                </Box>
                <Typography
                    variant='h2'
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2016
                </Typography>
                <Box
                    component='div'
                    className={classes.timeLineItem}>
                    <Typography
                        variant='h5'
                        align='center'
                        className={classes.subHeading}>
                        Software Developer
                    </Typography>
                    <Typography
                        variant='body1'
                        align='center'
                        style={{ color: 'tomato' }}>
                        CoStar Group
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        style={{ color: 'tan' }}>
                        As a software engineer at Costar, I maintained and developed the software that powers the BizQuest.com and BizBuySell.com sites.
                        I worked with stakeholders and designers to create an experience that would empower visitors to find businesses that they could become successful in.
                        The technologies used included C#, ASP.NET MVC, Web Forms, SQL Server, Visual Studio, Razor Templating Engine, jQuery, JavaScript, HTML, CSS and Ajax, and Bootstrap.
                    </Typography>
                </Box>
                <Typography
                    variant='h2'
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2017
                </Typography>
                <Box
                    component='div'
                    className={classes.timeLineItem}>
                    <Typography
                        variant='h5'
                        align='center'
                        className={classes.subHeading}>
                        Software Engineer
                    </Typography>
                    <Typography
                        variant='body1'
                        align='center'
                        style={{ color: 'tomato' }}>
                        American Recovery Service
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        style={{ color: 'tan' }}>
                        As a contractor Delphi software engineer, I worked on a legacy application that supports the operations of the nation's largest asset recovery service company.
                        I supported and maintained a complicated legacy codebase and implemented new features, working closely with project managers, clients, and various stakeholders in a very flexible software development process having to be able to respond quickly to client needs and user issues.
                    </Typography>
                </Box>
                <Typography
                    variant='h2'
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2018
                </Typography>
                <Box
                    component='div'
                    className={classes.timeLineItem}>
                    <Typography
                        variant='h5'
                        align='center'
                        className={classes.subHeading}>
                        Software Engineer
                    </Typography>
                    <Typography
                        variant='body1'
                        align='center'
                        style={{ color: 'tomato' }}>
                        SkySlope
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        style={{ color: 'tan' }}>
                        Contributed to building a digital signing platform using microservices, event-driven architecture, NoSql, AWS, React, C# and Node.js.
                        Design and develop key complex features and functionality. Took ownership of integrating authentication and authorization in our APIs using AWS Cognito.
                        Worked on AWS lambdas for consuming events from AWS Kinesis to sync data between microservices.
                        I worked with product managers and consultants to gather requirements and implement features.
                    </Typography>
                </Box>
                <Typography
                    variant='h2'
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2019
                </Typography>
                <Box
                    component='div'
                    className={classes.timeLineItem}>
                    <Typography
                        variant='h5'
                        align='center'
                        className={classes.subHeading}>
                        Senior Software Development Engineer In Test
                    </Typography>
                    <Typography
                        variant='body1'
                        align='center'
                        style={{ color: 'tomato' }}>
                        One Finance
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        style={{ color: 'tan' }}>
                        As a Senior SDET, I helped set up and maintain current test automation frameworks on multiple application platforms, such as mobile(IOS & Android), backend, and web. Created a QA dashboard using React and Gitlab's API to display the results of client tests which helped accelerate the time to identify bugs. Collaborated with Development and QA engineers to accelerate progress on our test automation goals. Created an API with AWS lambda and API Gateway to reduce time spent on repetitive testing tasks such as creating test users. Writing, scheduling, and publishing test automation scripts for full-stack infrastructure. Constantly improve our testing infrastructure to streamline the process of identifying root causes of test failures. Maintain and deploy QA infrastructure using cloud formation scripts.
                    </Typography>
                </Box>
                <Typography
                    variant='h2'
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2022
                </Typography>
                <Box
                    component='div'
                    className={classes.timeLineItem}>
                    <Typography
                        variant='h5'
                        align='center'
                        className={classes.subHeading}>
                        Senior Software Engineer
                    </Typography>
                    <Typography
                        variant='body1'
                        align='center'
                        style={{ color: 'tomato' }}>
                        One Finance
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        style={{ color: 'tan' }}>
                        I developed features for a customer-facing AI chatbot leveraging AWS Connect, Amazon Lex, RAG, and OpenAI to reduce live agent contacts and lower support costs. I designed and implemented integrations with Klarna, enabling seamless in-app transitions between bots and live agents, and built scalable infrastructure using AWS API Gateway WebSocket APIs, Lambdas, and microservices to support real-time interactions. In addition, I partnered with stakeholders and product managers to define requirements and collaborated across teams to deliver impactful, high-value features.
                    </Typography>
                </Box>
            </Box>
        </Box>
    </>
    )
}

export default Resume
