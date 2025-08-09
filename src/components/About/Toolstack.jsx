
import PropTypes from 'prop-types';
import { SiPostman, SiClerk, SiVercel, SiLinux } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const ToolIcon = ({ children }) => (
    <div className="flex justify-center items-center text-5xl m-4 p-2 border border-purple-500/60 rounded-md shadow-lg shadow-purple-900/20 transition-transform hover:scale-110">
        {children}
    </div>
);

ToolIcon.propTypes = {
    children: PropTypes.node.isRequired
};

function Toolstack() {
  return (
    <div className="flex flex-wrap justify-center pb-12">
        <ToolIcon><SiLinux /></ToolIcon>
        <ToolIcon><FaCode /></ToolIcon>
        <ToolIcon><SiPostman /></ToolIcon>
        <ToolIcon><SiClerk /></ToolIcon>
        <ToolIcon><SiVercel /></ToolIcon>
    </div>
  );
}

export default Toolstack;
