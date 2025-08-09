
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className="bg-[#0c0513] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-8">
              LET ME <span className="text-[#c770f0]">INTRODUCE</span> MYSELF
            </h1>
            <p className="text-lg leading-relaxed space-y-4">
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br />
              I am fluent in classics like <b className="text-[#c770f0]">Java,React,React Native,  and Go.</b>
              <br />
              My fields of interest are building new <b className="text-[#c770f0]">Web Technologies and Products</b> and also in areas related to <b className="text-[#c770f0]">Blockchain.</b>
              <br />
              Whenever possible, I also apply my passion for developing products with <b className="text-[#c770f0]">Node.js</b> and Modern Javascript Libraries like <b className="text-[#c770f0]">React.js and Next.js.</b>
            </p>
          </div>
          <div className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center">
             <img src="/src/assets/Projects/chatify.png" alt="avatar" className="w-2/3 md:w-full max-w-xs h-auto rounded-full shadow-2xl shadow-purple-500/20" />
          </div>
        </div>
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold">FIND ME ON</h1>
          <p className="my-4">Feel free to <span className="text-[#c770f0]">connect</span> with me</p>
          <div className="flex justify-center space-x-4">
             <a href="https://github.com/soumyajit4419" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><AiFillGithub size="2em" /></a>
             <a href="https://twitter.com/Soumyajit4419" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><AiOutlineTwitter size="2em" /></a>
             <a href="https://www.linkedin.com/in/soumyajit4419/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><FaLinkedinIn size="2em" /></a>
             <a href="https://www.instagram.com/soumyajit4419" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><AiFillInstagram size="2em" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;