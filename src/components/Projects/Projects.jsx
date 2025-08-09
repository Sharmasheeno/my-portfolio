
import ProjectCard from "./ProjectCards";

const PROJECTS_DATA = [
  {
    imgPath: "",
    title: "Chatify",
    description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
    ghLink: "",
    demoLink: ""
  },
  {
    imgPath: "",
    title: "Bits-Of-Code",
    description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
    ghLink: "",
    demoLink: ""
  },
   {
    imgPath: "",
    title: "Editor.io",
    description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
    ghLink: "",
    demoLink: ""
  },
];

function Projects() {
    return (
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
    );
}

export default Projects;
