
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    const activities = ["Playing Games", "Writing Tech Blogs", "Travelling"];
    return (
        <div className="bg-transparent text-left">
            <blockquote className="text-lg">
                <p className="text-justify leading-relaxed">
                    Hi Everyone, I am <span className="text-purple-400">Sharmake Hassan Said</span> from <span className="text-purple-400">Mogadishu, Somalia.</span>
                    <br />
                    I am currently employed as a software developer at a local tech company.
                    <br />
                    I have completed a Bachelor&apos;s degree in Computer Science.
                    <br /><br />
                    Apart from coding, some other activities that I love to do!
                </p>
                <ul className="mt-4 space-y-2">
                    {activities.map(activity => (
                        <li key={activity} className="flex items-center">
                            <ImPointRight className="text-purple-400 mr-2" /> {activity}
                        </li>
                    ))}
                </ul>
                <p className="mt-6 text-[#9b7ea2] italic">&quot;Strive to build things that make a difference!&quot;</p>
                <footer className="mt-2 text-gray-400">- Sharmake</footer>
            </blockquote>
        </div>
    );
}

export default AboutCard;