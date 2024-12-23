import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import TOPDev from "./Experiences/Topdev";
import ToolE from "./Experiences/ToolE";
import AmazonIntegrationPlus from "./Experiences/AmazonIntegrationPlus";
import Internship from "./Experiences/Internship";
import MiStable from "./Experiences/miStable";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, minHeight: '350px', minWidth: '882px' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function ExperiencesWithTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    minWidth: '190px',
                    width: '190px',
                    borderRight: 1,
                    borderColor: 'divider',
                    '& span.MuiTabs-indicator': { bgcolor: '#ca8a04' },
                    '& button.Mui-selected': { color: '#ca8a04' },
                    '& button': { textTransform: 'initial', fontWeight: 'bold' }
                }}
            >
                <Tab label="TOPDev" {...a11yProps(0)} />
                <Tab label="ToolE" {...a11yProps(1)} />
                <Tab label="Amazon Integration Plus" {...a11yProps(2)} />
                <Tab label="miStable" {...a11yProps(3)} />
                <Tab label="Internship" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <TOPDev />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ToolE />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AmazonIntegrationPlus />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <MiStable />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Internship />
            </TabPanel>
        </Box>
    )
}