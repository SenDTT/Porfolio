import { Divider, Typography } from '@mui/material';
import ExperiencesWithTabs from './ListExperiencesWithTabs';

export default function Experience() {
    return (<div id="experience-section" className="text-gray-900">
        <Divider>
            <Typography variant='h6' component='h6' align='center'>
                <span className='font-mono'>Experiences</span>
            </Typography>
        </Divider>

        <ExperiencesWithTabs />
    </div>);
}