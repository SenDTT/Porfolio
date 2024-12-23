import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { experiences } from "../../../../storage/app/public/sources";
import { FaDotCircle } from "react-icons/fa";

export default function MiStable() {
    return (<>
        <div className='font-bold'>
            <a className="hover:text-orange-800" href="https://mistable.com/" target="_blank">miStable (Web Application)</a>
        </div>
        <div className='font-light text-xs'>
            Jan 2019 - Feb 2023 at <a className="text-orange-800 font-medium" href="https://ceres.com.vn/" target="_blank">Ceres Solutions</a>
        </div>
        <div className='pt-3 text-sm'>
            Responsibilites:
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
            {experiences['Jan2019'].map((item, index) => (
                <ListItem sx={{ alignItems: 'center' }} key={`item-Jan2019-${index}`}>
                    <ListItemIcon sx={{ minWidth: '20px' }}><FaDotCircle size={5} /></ListItemIcon>
                    <ListItemText primary={`${item}`} />
                </ListItem>
            ))}
        </List></>);
}