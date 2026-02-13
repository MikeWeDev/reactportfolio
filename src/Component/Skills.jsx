import React from 'react';
import './Style/index.css';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaTelegramPlane 
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const skillList = [
  { name: 'Next.js / React', icon: SiNextdotjs, color: '#61DAFB', description: 'App Router, SSR, API routes, performance optimization' },
  { name: 'TypeScript', icon: SiTypescript, color: '#007ACC', description: 'Strong typing, scalable codebases, shared types' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', description: 'Responsive UI, design systems, clean layouts' },
  { name: 'Express.js', icon: FaNodeJs, color: '#68A063', description: 'REST APIs, auth, middleware, business logic' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'Schema design, aggregation, performance indexing' },
  { name: 'Telegraf', icon: FaTelegramPlane, color: '#229ED9', description: 'Telegram bots, payments, automation, state handling' },
];

function Skills() {
  return (
    <div className="bg-[#121121] text-white min-h-screen flex items-center justify-center py-[300px] lg:py-10 px-4 "  id="skill">
      <div
        className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Left Side: Skills */}
        <section className="w-full lg:w-1/2">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg">
            I specialize in building high-performance web applications using modern technologies. 
            My focus is on creating seamless user experiences with clean, maintainable code.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skillList.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 hover:bg-white/10 transition-all duration-300 cursor-pointer relative"
                >
                  <Icon style={{ color: skill.color }} className="text-5xl mb-3" />
                  <span className="font-semibold">{skill.name}</span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 rounded-2xl flex items-center justify-center p-4 text-sm transition-opacity duration-300">
                    {skill.description}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Right Side: 3D Cube */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="stage-cube-cont">
            <div className="cube-spiner">
              <div className="face1"><SiTypescript color="#007ACC" /></div>
              <div className="face2"><FaHtml5 color="#F06529" /></div>
              <div className="face3"><FaCss3Alt color="#28A4D9" /></div>
              <div className="face4"><FaJs color="#EFD81D" /></div>
              <div className="face5"><FaReact color="#5ED4F4" /></div>
              <div className="face6"><FaGitAlt color="#EC4D28" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
