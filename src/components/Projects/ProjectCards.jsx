
import PropTypes from 'prop-types';
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
    return (
        <div className="bg-transparent border border-purple-800/50 rounded-lg shadow-lg shadow-purple-500/20 overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-purple-500/40 flex flex-col">
            <img src={imgPath} alt="project" className="w-full h-56 object-cover p-4 rounded-xl opacity-80" />
            <div className="p-6 flex flex-col flex-grow">
                <h5 className="text-2xl font-bold mb-2">{title}</h5>
                <p className="text-gray-300 text-justify mb-6 flex-grow">{description}</p>
                <div className="flex space-x-4 mt-auto">
                    <a href={ghLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#623686] hover:bg-[#6d20c5] text-white font-bold py-2 px-4 rounded transition-all">
                        <BsGithub />
                        <span>GitHub</span>
                    </a>
                    {demoLink && (
                         <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#623686] hover:bg-[#6d20c5] text-white font-bold py-2 px-4 rounded transition-all">
                            <CgWebsite />
                            <span>Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ghLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string
};

export default ProjectCard;