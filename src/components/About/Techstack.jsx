
import PropTypes from 'prop-types';
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiNextdotjs, SiPostgresql, SiFirebase } from "react-icons/si";

const TechIcon = ({ children }) => (
    <div className="flex justify-center items-center text-5xl m-4 p-2 border border-purple-500/60 rounded-md shadow-lg shadow-purple-900/20 transition-transform hover:scale-110">
        {children}
    </div>
);

TechIcon.propTypes = {
    children: PropTypes.node.isRequired
};

function Techstack() {
  return (
    <div className="flex flex-wrap justify-center pb-12">
   
        <TechIcon><DiJavascript1 /></TechIcon>
        <TechIcon><DiReact /></TechIcon>
        <TechIcon><DiNodejs /></TechIcon>
        <TechIcon><DiMongodb /></TechIcon>
        <TechIcon><DiPython /></TechIcon>
        <TechIcon><DiGit /></TechIcon>
        <TechIcon><DiJava /></TechIcon>
        <TechIcon><SiNextdotjs /></TechIcon>
        <TechIcon><SiPostgresql /></TechIcon>
        <TechIcon><SiFirebase /></TechIcon>
    </div>
  );
}

export default Techstack;
