
import Helmet from "../helmat";
import ProjectCard from "./ProjectCards";
import welletApp from '../../assets/Projects/welletApp.jpg';


const PROJECTS_DATA = [
  {
    imgPath: "",
    title: "",
    description: " ",
    ghLink: "",
    demoLink: ""
  },
  {
    imgPath: "",
    title: "My_blog",
    description: "My personal blog page build with React.js and Tailwind Css which takes the content from makdown files and renders it using React.js. Supports dark mode and easy to write blogs using markdown.",
    ghLink: "",
    demoLink: ""
  },
   {
    imgPath: welletApp,
    title: "Wellet-App",
    description: "A mobile personal finance tracker to manage your budget by tracking income and expenses, built with React Native, Expo, Clerk for secure authentication, and a Neon database.",
    ghLink: "",
    demoLink: ""
  },
];

function Projects() {

    return (
        <Helmet title="Project">
        <div className="relative pt-36 pb-8 bg-gradient-to-bl from-[rgba(17,16,16,0.58)] to-[rgba(12,8,24,0.9)] text-white">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-bold mb-4">My Recent <strong className="text-purple-400">Works</strong></h1>
                <p className="text-center text-lg mb-12">Here are a few projects I&apos;ve worked on recently.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
          </Helmet>
    );
  
}

export default Projects;
