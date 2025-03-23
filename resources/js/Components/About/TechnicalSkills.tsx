import { Divider, Typography } from "@mui/material";

export default function TechnicalSkill() {
    return (
        <div id="experience-section" className="text-gray-900">
            <Divider>
            </Divider>

            <div className="flex flex-col gap-10 text-sm">
                <ul className="flex flex-row justify-center items-center gap-2 flex-wrap">
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>• Database Management</li>
                    <li>• Data Structures & Algorithms</li>
                    <li>• SOLID Principles</li>
                    <li>• API development</li>
                    <li>• Problem Solving</li>
                    <li>• Modular Architecture</li>
                    <li>• Performance Optimization</li>
                </ul>

                <ul>
                    <li><span className="font-semibold">Languages:</span> PHP, JavaScript, Typescript</li>
                    <li><span className="font-semibold">Web:</span> HTML5, Bootstrap, CSS3, Tailwind CSS, ReactJS, jQuery, AJAX, JSON, NodeJS </li>
                    <li><span className="font-semibold">Web Services:</span> RESTful APIs, SOAP, GraphQL</li>
                    <li><span className="font-semibold">Web/App Servers:</span> Apache, Nginx</li>
                    <li><span className="font-semibold">Frameworks:</span> Laravel, Symfony, Yii, React, Angular, Vue, NextJS, React Native Database: MySQL, PostgreSQL, MongoDB, ElasticSearch</li>
                    <li><span className="font-semibold">Design Patterns:</span> Singleton, Template Method, Strategy, Observer</li>
                    <li><span className="font-semibold">SDLC:</span> Agile (Scrum)</li>
                    <li><span className="font-semibold">Tools:</span> Jira, Trello, Monday, Clickup, Docker, PHPUnit, Postman, Swagger, Git, GitHub, Gitlab, Bitbucket, Amazon Selling Partner API, Xero</li>
                    <li><span className="font-semibold">Software Application:</span> Xero API Integration, Wordpress, CloudSMS, Shopify Application, Prestashop Module</li>
                </ul>
            </div>
        </div>
    )
}