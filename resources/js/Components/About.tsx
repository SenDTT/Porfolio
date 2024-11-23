import Avatar from "../../../storage/app/public/avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GiHand } from "react-icons/gi";

export default function About() {
    return (
        <div id="about" className="text-black w-3/5 mx-auto flex flex-col justify-center gap-2 font-mono text-left">
            <div className="flex justify-center items-center gap-4">
                <div className="rounded-full p-6 bg-[#fbf6f3]">
                    <img src={Avatar} alt="avatar" className="w-40 rounded-full border-2 border-yellow-600" />
                </div>

                <div className="col-span-2">
                    <p className="flex flex-row justify-start items-center"><GiHand className="size-6 text-yellow-400 inline mr-2" />Hi, my name is</p>
                    <p className="text-2xl font-bold text-primary">Thi Thanh Sen Doan <span className="text-gray-600">/ Sen</span></p>
                    <p>
                        I'm a Full Stack Developer.
                    </p>

                    <div className="mt-4 flex flex-row flex-wrap justify-start items-center gap-2 font-sans">
                        <a href="https://www.linkedin.com/in/sendoan/" target="_blank" className="text-sm flex flex-row items-center gap-1">
                            <FaLinkedin className="text-linkedin size-5" /></a>
                        <a href="https://github.com/SenDTT" target="_blank" className="text-sm flex flex-row items-center gap-1"><FaGithub className="size-5" /></a>
                        <a href="mailto:sendoan.sophie@gmail.com" className="text-sm flex flex-row items-center gap-1">
                            <HiOutlineMail className="text-gmail fill-gray-100 size-6" />sendoan.sophie@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}