import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { experiences } from "../../../../storage/app/public/sources";
import { FaDotCircle } from "react-icons/fa";

export default function TOPDev() {
    return (<>
        <div className='font-bold'>
            <a className="hover:text-orange-800" target="_blank" href="https://topdev.vn/">TOPDEV BY APPLANCER JSC</a>
        </div>
        <div className='font-light text-xs'>
            Jan 2019 - Oct 2023
        </div>
        <div className='pt-3 text-sm'>
            Developed a web platform to connect job seekers with businesses in the IT sector.
        </div>
        <div className='pt-3 text-sm'>
            Responsibilities:
        </div>
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
                <ListItem sx={{ alignItems: 'center' }} key={`item-Nov2023-${index}`}>
                    <ListItemIcon sx={{ minWidth: '20px' }}><FaDotCircle size={5} /></ListItemIcon>
                    <ListItemText primary={`${item}`} />
                </ListItem>
            ))}
        </List>

        <div className="font-light text-sm mt-4">
            <span className="font-semibold">Technologies Used:</span> PHP, PHPUnit, JavaScript, TypeScript, MySQL, Laravel, Vue.js, ReactJS, jQuery, Next JS, Tailwind CSS, Material UI, ElasticSearch, Modular Architecture, Laravel/Breeze
        </div>
    </>);
}
