import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { experiences } from "../../../../storage/app/public/sources";
import { FaDotCircle } from "react-icons/fa";

export default function ToolE() {
    return (<>
        <div className='font-bold'>
            Toole - Amazon Market Tool (Prestashop Module)
        </div>
        <div className='font-light text-xs'>
            Jun - Oct 2023 at <a className="text-orange-800 font-medium" href="https://ceres.com.vn/" target="_blank">Ceres Solutions</a>
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
            {experiences['Jun2023'].map((item, index) => (
                <ListItem sx={{ alignItems: 'center' }} key={`item-Jun2023-${index}`}>
                    <ListItemIcon sx={{ minWidth: '20px' }}><FaDotCircle size={5} /></ListItemIcon>
                    <ListItemText primary={`${item}`} />
                </ListItem>
            ))}
        </List></>);
}
