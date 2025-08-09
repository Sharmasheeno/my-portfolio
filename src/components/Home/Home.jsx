
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <div className="relative text-white pt-40 pb-12 bg-gradient-to-bl from-[rgba(17,16,16,0.68)] to-[rgba(12,10,22,0.86)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-7/12 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi There! <span className="inline-block animate-wave">👋🏻</span>
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                I&apos;M <strong className="text-[#cd5ff8]">SHARMAKE HASSAN SAID</strong>
              </h1>
              <div className="py-8 pl-0 md:pl-12">
                <Type />
              </div>
            </div>
            <div className="w-full md:w-5/12 pt-8 md:pt-0">
              <img src="/src/assets/Projects/chatify.png" alt="home pic" className="max-w-full h-auto mx-auto max-h-[450px]" />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
