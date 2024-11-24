import Avatar from "../../../storage/app/public/avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { GiHand } from "react-icons/gi";
import LeetCodeLogo from "./Icons/LeetCodeIcon";
import { Tooltip } from "react-tooltip";

const profileLinks = [
    { name: "Linkedin", target: '_blank', to: 'https://www.linkedin.com/in/sendoan/', element: <FaLinkedin className="text-linkedin size-5" /> },
    { name: "Github", target: '_blank', to: 'https://github.com/SenDTT', element: <FaGithub className="size-5" /> },
    { name: "Leetcode", target: '_blank', to: 'https://leetcode.com/u/sendoan/', element: <LeetCodeLogo /> },
    { name: "sendoan.sophie@gmail.com", target: '_self', to: 'mailto:sendoan.sophie@gmail.com', element: (<><HiOutlineMail className="text-gmail fill-gray-100 size-6" />sendoan.sophie@gmail.com</>) }
]

export default function About() {
    return (
        <div id="about" className="text-black w-3/5 mx-auto flex flex-col justify-center gap-2 font-mono text-left">
            <div className="flex justify-center items-start gap-4">
                <div className="flex flex-col justify-start items-center gap-1">
                    <div className="rounded-full">
                        <img src={Avatar} alt="avatar" className="w-40 rounded-full border-4 border-yellow-600" />
                    </div>
                    <div className="text-center font-light text-sm flex gap-1 justify-center items-center leading-8">
                        <FaLocationDot className="size-4" /> <p>Iowa, United States</p>
                    </div>
                </div>

                <div className="">
                    <p className="flex flex-row justify-start items-center gap-2">
                        <GiHand className="size-6 text-yellow-400 inline" />Hi, my name is
                    </p>
                    <p className="text-2xl font-bold text-gray-800 leading-[3rem]">Thi Thanh Sen Doan <span className="font-light">/ Sen</span></p>
                    <p>
                        I'm a Full Stack Developer.
                    </p>

                    <div className="mt-4 flex flex-row flex-wrap justify-start items-center gap-2 font-sans">
                        {profileLinks.map((item) => (
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={item.name} key={item.name} href={item.to} target={item.target} className="text-sm flex flex-row items-center gap-1">
                                {item.element}
                            </a>
                        ))}
                        <Tooltip
                            id="my-tooltip"
                            render={({ content }) => (<>{content}</>)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}