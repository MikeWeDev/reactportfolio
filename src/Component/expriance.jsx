import React, { useRef, useState } from 'react';
// Optimized Imports from React Icons
import { 
  HiOutlineBriefcase, 
  HiOutlineAcademicCap, 
  HiArrowRight, 
  HiOutlineTerminal 
} from 'react-icons/hi';
import { HiCodeBracket } from 'react-icons/hi2';
import { FaTelegramPlane } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    category: 'Lead Project',
    title: 'Frontend Developer',
    company: 'Fullstack Bingo Website',
    desc: 'Engineered a real-time betting infrastructure serving 12+ physical locations.',
    period: '2023 - 2025',
    tags: ['React', 'Socket.io', 'Node.js'],
    color: 'from-blue-600 to-cyan-500',
    icon: HiOutlineBriefcase
  },
  {
    id: 2,
    category: 'Lead Project',
    title: 'Full-Stack Developer & Telegram Bot Engineer',
    company: 'Telegram Bingo App',
    desc: 'Built a real-time Telegram betting platform serving over 10,000 concurrent users. Implemented payment integration, automated game logic, and a responsive web dashboard for admins and players.',
    period: '2025 - 2026',
    tags: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Telegraf', 'Socket.io'],
    color: 'from-indigo-600 to-purple-500',
    icon: FaTelegramPlane
  },
  {
    id: 3,
    category: 'Solutions Provider',
    title: 'Web Engineer',
    company: 'Car Dealership Platform',
    desc: 'Built a custom inventory management system with a lightning-fast search interface.',
    period: '2024',
    tags: ['JavaScript', 'SEO', 'Tailwind'],
    color: 'from-purple-600 to-pink-500',
    icon: HiOutlineTerminal
  },
  {
    id: 4,
    category: 'Education',
    title: 'B.Sc. in Computer Science',
    company: 'Addis Ababa University',
    desc: 'Earned a Bachelor’s degree in Computer Science ',
    period: '2022 - 2026',
    tags: ['Software Architecture', 'Distributed Systems', 'C++'],
    color: 'from-emerald-600 to-teal-500',
    icon: HiOutlineAcademicCap
  }
];

const ExperienceCard = ({ exp }) => {
  const cardRef = useRef(null);
  const [rotate] = useState({ x: 0, y: 0 }); // Kept state for the icon transform logic

  const Icon = exp.icon;

  return (
    <div 
      id="expriance"
      ref={cardRef}
      className="relative group w-full mb-12"
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f0f12] border border-white/5 p-8 md:p-12 transition-all duration-700 hover:border-blue-500/30">
        <div className={`absolute -inset-px bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <HiCodeBracket className="text-blue-500 animate-pulse text-base" />
                {exp.category}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-500">
                {exp.company}
              </h3>
            </div>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 group-hover:border-blue-500/50 transition-all">
              {exp.period}
            </span>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-blue-400/90 tracking-wide">{exp.title}</h4>
            <p className="text-gray-400 leading-relaxed text-lg md:text-xl max-w-4xl group-hover:text-gray-300 transition-colors">
              {exp.desc}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-lg bg-[#1a1a1e] border border-white/5 text-[10px] font-bold text-gray-400 uppercase group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-all">
                  {tag}
                </span>
              ))}
            </div>

            <button className="group/btn relative overflow-hidden px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-3 transition-all hover:pr-10">
              <span className="relative z-10 text-sm">CASE STUDY</span>
              <HiArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform text-lg" />
              <div className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Big Background Icon */}
        <Icon 
          style={{ 
            transform: `translate(${rotate.y * 2}px, ${rotate.x * 2}px) rotate(12deg)` 
          }}
          className="absolute -bottom-10 -right-10 text-[20rem] text-white/[0.02] group-hover:text-blue-500/[0.06] transition-all duration-700 pointer-events-none" 
        />
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="bg-[#050505] text-white min-h-screen py-20 px-4 md:px-10 relative overflow-hidden font-sans">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-24 space-y-4">
          <div className="flex items-center gap-3" data-aos="fade-right">
            <div className="h-[1px] w-12 bg-blue-500"></div>
            <span className="text-blue-500 font-mono tracking-[0.3em] text-xs uppercase">Timeline</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            History<span className="text-blue-600">.</span>
          </h1>
        </header>

        <div className="flex flex-col">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;