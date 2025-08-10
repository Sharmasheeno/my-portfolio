
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
              <img src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-1/528230455_2425096847876974_924820121842747217_n.jpg?stp=c60.0.903.903a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=5Y1R9HixpX4Q7kNvwEfISJy&_nc_oc=Adm25bl4XA3hXoOjOZIn6qnYLdjvUm-cuw3ti2Fx-u_-FVrQdkmbHKkgtG0wSpHRqyc&_nc_zt=24&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=oanbHoZW2Iaki2GcK1Q4KQ&oh=00_AfXVFAnrbqXaaQCwJbILAnoMHGpCKFM16aZVyem8m1okYQ&oe=689E2550" alt="home pic" className="max-w-full h-auto mx-auto max-h-[450px]" />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
