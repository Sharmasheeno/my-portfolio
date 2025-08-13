import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Github from './Github';
import Helmet from "../helmat"; // Make sure the filename and path are correct

function About() {
    // The Helmet component must wrap the returned JSX
    return (
        <Helmet title="About">
            <div className="relative pt-36 pb-8 bg-gradient-to-bl from-[rgba(17,16,16,0.58)] to-[rgba(12,8,24,0.9)] text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center mb-16">
                        <div className="w-full md:w-7/12 p-4">
                            <h1 className="text-4xl font-bold mb-5">Know Who <strong className="text-purple-400">I&apos;M</strong></h1>
                            <Aboutcard />
                        </div>
                        <div className="w-full md:w-5/12 p-4">
                            <img src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-1/528230455_2425096847876974_924820121842747217_n.jpg?stp=c60.0.903.903a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=5Y1R9HixpX4Q7kNvwEfISJy&_nc_oc=Adm25bl4XA3hXoOjOZIn6qnYLdjvUm-cuw3ti2Fx-u_-FVrQdkmbHKkgtG0wSpHRqyc&_nc_zt=24&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=oanbHoZW2Iaki2GcK1Q4KQ&oh=00_AfXVFAnrbqXaaQCwJbILAnoMHGpCKFM16aZVyem8m1okYQ&oe=689E2550" alt="about" className="max-w-full h-auto" />
                        </div>
                    </div>
                    
                    <h1 className="text-center text-4xl font-bold mb-8">Professional <strong className="text-purple-400">Skillset</strong></h1>
                    <Techstack />

                    <h1 className="text-center text-4xl font-bold mb-8 mt-16"><strong className="text-purple-400">Tools</strong> I use</h1>
                    <Toolstack />

                    <Github />
                </div>
            </div>
        </Helmet>
    );
}

export default About;