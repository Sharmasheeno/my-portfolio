
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Github from './Github';

function About() {
    return (
        <div className="relative pt-36 pb-8 bg-gradient-to-bl from-[rgba(17,16,16,0.58)] to-[rgba(12,8,24,0.9)] text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center mb-16">
                    <div className="w-full md:w-7/12 p-4">
                         <h1 className="text-4xl font-bold mb-5">Know Who <strong className="text-purple-400">I&apos;M</strong></h1>
                         <Aboutcard />
                    </div>
                    <div className="w-full md:w-5/12 p-4">
                        <img src="/src/assets/Projects/codeEditor.png" alt="about" className="max-w-full h-auto" />
                    </div>
                </div>
                
                <h1 className="text-center text-4xl font-bold mb-8">Professional <strong className="text-purple-400">Skillset</strong></h1>
                <Techstack />

                <h1 className="text-center text-4xl font-bold mb-8 mt-16"><strong className="text-purple-400">Tools</strong> I use</h1>
                <Toolstack />

                <Github />
            </div>
        </div>
    );
}

export default About;
