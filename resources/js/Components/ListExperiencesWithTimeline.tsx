import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, timelineOppositeContentClasses, TimelineSeparator } from "@mui/lab";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import { experiences } from "../../../storage/app/public/sources";
import { FaDotCircle } from "react-icons/fa";

export default function ExperiencesWithTimeline() {
    return (
        <Timeline sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2
            },
        }}
        >
            <TimelineItem>
                <TimelineOppositeContent color="black" fontWeight='light'>
                    November 2023 - June 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='bg-white' color='grey' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='text-gray-900'>
                    <Typography component='p' fontWeight='bold'>
                        TOPDEV BY APPLANCER JSC
                    </Typography>
                    <Typography component='p' fontWeight='light' fontSize='xs'>
                        Full stack developer
                    </Typography>
                    <Typography className='pt-3' component='p'>
                        Developed a web platform to connect job seekers with businesses in the IT sector.
                    </Typography>
                    <Typography className='pt-3' component='p'>
                        Responsibilites:
                    </Typography>
                    <List
                        sx={{
                            width: '100%',
                            position: 'relative',
                            bgcolor: 'inherit',
                            '& li': {
                                paddingTop: 0, paddingBottom: 0
                            },
                        }}
                        subheader={<li />}
                    >
                        {experiences['Nov2023'].map((item, index) => (
                            <ListItem sx={{ alignItems: 'baseline' }} key={`item-Nov2023-${index}`}>
                                <ListItemIcon sx={{ minWidth: '20px' }}><FaDotCircle size={4} /></ListItemIcon>
                                <ListItemText primary={`${item}`} />
                            </ListItem>
                        ))}
                    </List>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="black" fontWeight='light'>
                    Jan 2019 - October 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='bg-white' color='grey' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='text-gray-900'>
                    <Typography component='p' fontWeight='bold'>
                        CERES SOLUTIONS
                    </Typography>
                    <Typography component='p' fontWeight='light' fontSize='xs'>
                        Full stack developer
                    </Typography>
                    <Typography className='pt-3' component='p'>
                        Software solution company focused on web developments and mobile applications.
                    </Typography>
                    <Typography className='pt-3' component='p'>
                        Projects:
                    </Typography>
                    <List
                        sx={{
                            width: '100%',
                            position: 'relative',
                            bgcolor: 'inherit',
                            '& ul': { padding: 0 },
                            '& li': {
                                paddingTop: 0, paddingBottom: 0
                            },
                        }}
                        subheader={<li />}
                    >
                        <li>
                            <ul>
                                <ListSubheader sx={{ bgcolor: 'inherit', fontWeight: 'bold', color: 'black', position: 'relative' }}>1. Prestashop Module: Toole - Amazon Market Tool (Jun 2023 - Oct 2023):</ListSubheader>
                                {experiences['Jun2023'].map((item, index) => (
                                    <ListItem sx={{ alignItems: 'baseline' }} key={`item-Jun2023-${index}`}>
                                        <ListItemIcon sx={{ minWidth: '20px' }}><FaDotCircle size={4} /></ListItemIcon>
                                        <ListItemText primary={`${item}`} />
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <ListSubheader sx={{ bgcolor: 'inherit', fontWeight: 'bold', color: 'black', position: 'relative' }}>2. Shopify Application: Amazon Integration Plus (Mar 2023 - May 2023): </ListSubheader>
                                {experiences['Mar2023'].map((item, index) => (
                                    <ListItem sx={{ alignItems: 'baseline' }} key={`item-Mar2023-${index}`}>
                                        <ListItemIcon sx={{ minWidth: '20px' }}><FaDotCircle size={4} /></ListItemIcon>
                                        <ListItemText primary={`${item}`} />
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <ListSubheader sx={{ bgcolor: 'inherit', fontWeight: 'bold', color: 'black', position: 'relative' }}>3. Web Application: miStable (Jan 2019 - Feb 2023): </ListSubheader>
                                {experiences['Jan2019'].map((item, index) => (
                                    <ListItem sx={{ alignItems: 'baseline' }} key={`item-Jan2019-${index}`}>
                                        <ListItemIcon sx={{ minWidth: '20px' }}><FaDotCircle size={4} /></ListItemIcon>
                                        <ListItemText primary={`${item}`} />
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                    </List>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="black" fontWeight='light'>
                    Sep 2018 - Dec 2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='bg-white' color='grey' variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='text-gray-900'>
                    <Typography component='p' fontWeight='bold'>
                        CERES SOLUTIONS
                    </Typography>
                    <Typography component='p' fontWeight='light' fontSize='xs'>
                        Internship
                    </Typography>
                    <Typography className='pt-3' component='p'>
                        Software solution company focused on web developments and mobile applications.
                    </Typography>
                    <Typography className='pt-3' component='p'>
                        Responsibilites:
                    </Typography>
                    <List
                        sx={{
                            width: '100%',
                            position: 'relative',
                            bgcolor: 'inherit',
                            '& li': {
                                paddingTop: 0, paddingBottom: 0
                            },
                        }}
                        subheader={<li />}
                    >
                        {experiences['Sep2018'].map((item, index) => (
                            <ListItem sx={{ alignItems: 'baseline' }} key={`item-Sep2018-${index}`}>
                                <ListItemIcon sx={{ minWidth: '20px' }}><FaDotCircle size={4} /></ListItemIcon>
                                <ListItemText primary={`${item}`} />
                            </ListItem>
                        ))}
                    </List>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}