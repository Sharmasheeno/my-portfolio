
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <div className="text-3xl md:text-4xl font-semibold text-[#be6adf]">
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Freelancer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                wrapperClassName: "typewriter-wrapper",
                cursorClassName: "text-[#b562d6] animate-pulse"
            }}
        />
    </div>
  );
}

export default Type;