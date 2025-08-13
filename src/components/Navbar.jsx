import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import Helmat from "../components/helmat"

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setIsSticky(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navLinks = [
    { name: "Home", icon: <AiOutlineHome />, path: "/" },
    { name: "About", icon: <AiOutlineUser />, path: "/about" },
    { name: "Projects", icon: <AiOutlineFundProjectionScreen />, path: "/project" },
    { name: "Resume", icon: <CgFileDocument />, path: "/resume" },
  ];

  return (
 
    <nav className={`fixed w-full top-0 z-50 px-4 sm:px-8 py-2 text-lg transition-all duration-300 ${isSticky || isExpanded ? 'bg-[#1b1a2e]/70 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
      SHARM&apos;AKE<strong className="text-[#cd5ff8]">HASSAN</strong>
        </Link>
        
        <button onClick={() => setIsExpanded(!isExpanded)} className="md:hidden text-[#be50f4] relative h-8 w-8">
           <span className={`block bg-current h-0.5 w-6 transform transition duration-300 ease-in-out ${isExpanded ? 'rotate-45 translate-y-1.5' : ''}`}></span>
           <span className={`block bg-current h-0.5 w-6 my-1 transition duration-300 ease-in-out ${isExpanded ? 'opacity-0' : ''}`}></span>
           <span className={`block bg-current h-0.5 w-6 transform transition duration-300 ease-in-out ${isExpanded ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} onClick={() => setIsExpanded(false)} className="text-white font-medium px-3 py-2 flex items-center space-x-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-[#c95bf5] after:rounded-full after:transition-all after:duration-300 hover:after:w-full">
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
           <a href="https://github.com/Sharmasheeno" target="_blank" rel="noopener noreferrer" className="bg-[#934cce]/30 text-white px-3 py-1.5 rounded-md hover:bg-[#a24dd3]/50 transition-transform hover:-translate-y-0.5 flex items-center space-x-2">
              <CgGitFork />
              <AiFillStar />
           </a>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center pt-4 space-y-2 bg-[#1b1a2e]/90">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} onClick={() => setIsExpanded(false)} className="text-white font-medium px-3 py-2 flex items-center space-x-2 w-full text-center justify-center">
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
           <a href="https://github.com/sharmakehassansaid/Portfolio" target="_blank" rel="noopener noreferrer" className="bg-[#934cce]/30 text-white my-2 px-3 py-1.5 rounded-md hover:bg-[#a24dd3]/50 transition-transform hover:-translate-y-0.5 flex items-center space-x-2">
              <CgGitFork />
              <AiFillStar />
           </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
