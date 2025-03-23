import { Divider, Typography } from "@mui/material";

export default function Introduce() {
    return (<div id="experience-section" className="text-gray-900">
        <Divider>
            <Typography variant='h6' component='h6' align='center'>
                <span className='font-mono font-semibold'>About me</span>
            </Typography>
        </Divider>

        <div className="text-justify text-pretty text-sm">
            Full Stack Developer with more than 5 years working experience accounting, education, IT recruitment, and e- commerce systems using PHP, JavaScript, and modern frameworks. Developed horse stable and school management systems, e-commerce synchronization tools, and IT recruitment platforms following Agile methodologies. Quick to adapt to new technologies, skilled in problem-solving, and adept at tackling complex challenges using PHP, PHPUnit, Laravel, Slim, Symfony, Yii2, React, Next.js, AngularJS, VueJS, Tailwind CSS, Docker, Swagger, and AWS.
        </div>
    </div>);
}