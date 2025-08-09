import { AiFillGithub, AiOutlineTwitter, AiFillBehanceCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#0a0416] text-white py-3">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center text-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0">
                        <h3 className="text-sm">Designed and Developed by Sharmake Hassan Said</h3>
                    </div>
                    <div className="w-full md:w-1/3 mb-2 md:mb-0">
                         <h3 className="text-sm">Copyright © {year} SB</h3>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="flex justify-center space-x-4">
                            <a href="https://github.com/Sharmasheeno" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><AiFillGithub size="1.5em" /></a>
                            <a href="https://www.linkedin.com/in/sharmake-hassan-said-8949542b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><AiOutlineTwitter size="1.5em" /></a>
                            <a href="https://www.linkedin.com/in/sharmake-hassan-said-8949542b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><FaLinkedinIn size="1.5em" /></a>
                            <a href="https://www.behance.net/sharmasheeno" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><AiFillBehanceCircle size="1.5em" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
