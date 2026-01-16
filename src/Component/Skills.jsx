import React from 'react';
// Assuming your CSS is located at src/Style/index.css
import './Style/index.css';

// 1. Optimized React Icons Imports
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGitAlt, 
  FaTelegramPlane 
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// 2. Refined Skill List
const skillList = [
  {
    name: 'Next.js / React',
    icon: SiNextdotjs,
    color: '#61DAFB',
    level: '90%',
    description: 'App Router, SSR, API routes, performance optimization',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#007ACC',
    level: '85%',
    description: 'Strong typing, scalable codebases, shared types',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#38BDF8',
    level: '90%',
    description: 'Responsive UI, design systems, clean layouts',
  },
  {
    name: 'Express.js',
    icon: FaNodeJs,
    color: '#68A063',
    level: '85%',
    description: 'REST APIs, auth, middleware, business logic',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
    level: '80%',
    description: 'Schema design, aggregation, performance indexing',
  },
  {
    name: 'Telegraf',
    icon: FaTelegramPlane,
    color: '#229ED9',
    level: '85%',
    description: 'Telegram bots, payments, automation, state handling',
  },
];

function Skills() {
  return (
    <div className="bg-[#121121] text-white min-h-screen flex items-center justify-center py-20  pb-[300px] md:pb-20 px-4">
      <div
        id="skill"
        className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        
        {/* Visual Skill Info Section (Left Side) */}
        <section className="w-full lg:w-1/2">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg">
            I specialize in building high-performance web applications using modern technologies. 
            My focus is on creating seamless user experiences with clean, maintainable code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillList.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index}
                  className="group p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Icon style={{ color: skill.color }} className="text-2xl" />
                    <span className="font-bold text-lg">{skill.name}</span>
                  </div>
                  {/* Visual Progress Bar */}
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3D Cube Section (Right Side) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="stage-cube-cont">
            <div className="cube-spiner">
              <div className="face1">
                <SiTypescript color="#007ACC" />
              </div>
              <div className="face2">
                <FaHtml5 color="#F06529" />
              </div>
              <div className="face3">
                <FaCss3Alt color="#28A4D9" />
              </div>
              <div className="face4">
                <FaJs color="#EFD81D" />
              </div>
              <div className="face5">
                <FaReact color="#5ED4F4" />
              </div>
              <div className="face6">
                <FaGitAlt color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;