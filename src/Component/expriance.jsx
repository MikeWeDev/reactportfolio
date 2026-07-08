import React from "react";
import { useNavigate } from "react-router-dom";
import { experiences } from "./experiences";
import { HiCodeBracket, HiArrowRight, HiPlay, HiPhoto } from "react-icons/hi2";

const fallbackImages = [
  "/ANNOUNCMENT.jpg",
  "/luckybingo2.png",
  "/top_ph002.png",
  "/Gemini_Generated_Image_4qzzt34qzzt34qzz.png"
];

const ExperienceCard = ({ exp, index }) => {
  const navigate = useNavigate();
  const Icon = exp.icon;

  return (
    <div className="relative group w-full mb-16" data-aos="fade-up">

      <div className={`absolute -inset-2 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700 rounded-[3rem]`} />

      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f0f12] border border-white/5 p-8 md:p-12 transition-all duration-700 hover:border-blue-500/30">

        <div className={`absolute -inset-px bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">


          {/* Content */}
          <div className="lg:col-span-7 flex flex-col h-full justify-between">

            <div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

                <div className="space-y-2">

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <HiCodeBracket className="text-blue-500 animate-pulse text-base" />
                    {exp.category}
                  </div>


                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-500">
                    {exp.company}
                  </h3>

                </div>


                <span className="self-start sm:self-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 group-hover:border-blue-500/50 transition-all">
                  {exp.period}
                </span>

              </div>


              <div className="space-y-4">

                <h4 className="text-xl font-semibold text-blue-400/90 tracking-wide">
                  {exp.title}
                </h4>


                <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-2xl group-hover:text-gray-300 transition-colors">
                  {exp.desc}
                </p>

              </div>

            </div>



            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">

              <div className="flex flex-wrap gap-2 max-w-md">

                {exp.tags.map((tag) => (

                  <span 
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-[#1a1a1e] border border-white/5 text-[10px] font-bold text-gray-400 uppercase group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-all"
                  >
                    {tag}
                  </span>

                ))}

              </div>



              <button
                onClick={() => navigate(`/case-study/${exp.id}`)}
                className="group/btn relative overflow-hidden px-8 py-4 rounded-full bg-white text-black font-bold flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5 hover:shadow-blue-500/20 duration-300"
              >

                <span className="relative z-10 text-sm tracking-wider">
                  VIEW CASE STUDY
                </span>

                <HiArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform text-lg" />

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />

              </button>

            </div>

          </div>





          {/* Image Section - Desktop Only */}
          <div
            onClick={() => navigate(`/case-study/${exp.id}`)}
            className="hidden lg:block lg:col-span-5 relative w-full h-80 rounded-2xl overflow-hidden bg-[#16161a] border border-white/5 group-hover:border-blue-500/20 transition-all duration-500 cursor-pointer shadow-inner group/media"
          >

            <img
              src={exp.image || fallbackImages[index % fallbackImages.length]}
              alt={`${exp.company} Preview`}
              className="w-full h-full object-cover opacity-50 group-hover/media:scale-110 group-hover/media:opacity-80 transition-all duration-700 ease-out"
            />



            <div className="absolute top-4 left-4 flex gap-2">

              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider text-white">
                <HiPhoto className="text-blue-400 text-sm" />
                IMAGES
              </span>



              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider text-white">
                <HiPlay className="text-emerald-400 text-sm animate-pulse" />
                VIDEO DEMO
              </span>

            </div>





            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">


              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-75 group-hover/media:scale-100 transition-transform duration-500">

                <HiPlay className="text-2xl ml-0.5" />

              </div>


              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white mt-3 bg-black/50 px-3 py-1 rounded-full border border-white/5">

                Launch Breakdown

              </span>


            </div>


          </div>


        </div>



        <Icon className="absolute -bottom-10 -right-10 text-[22rem] text-white/[0.01] group-hover:text-blue-500/[0.03] transition-all duration-700 pointer-events-none" />

      </div>

    </div>
  );
};



export default function Experience() {

  return (

    <section 
      className="bg-[#050505] min-h-screen py-24 px-6" 
      id="expriance"
    >

      <div className="max-w-7xl mx-auto">

        <header className="mb-20 text-center space-y-4">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 uppercase tracking-widest">
            Portfolio Highlights
          </div>


          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            My Experience
          </h1>

        </header>



        <div className="space-y-4">

          {experiences.map((exp, index)=>(

            <ExperienceCard 
              key={exp.id} 
              exp={exp}
              index={index}
            />

          ))}

        </div>


      </div>


    </section>

  );
}