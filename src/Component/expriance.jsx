import React from "react";
import { useNavigate } from "react-router-dom";
import { experiences } from "./experiences";
import { HiCodeBracket, HiArrowRight } from "react-icons/hi2";

const ExperienceCard = ({ exp }) => {
  const navigate = useNavigate();
  const Icon = exp.icon;

  return (
    <div className="relative group w-full mb-12" data-aos="fade-up" >
      <div className={`relative overflow-hidden rounded-[2.5rem] bg-[#0f0f12] border border-white/5 p-8 md:p-12 transition-all duration-700 hover:border-blue-500/30`}>
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

            <button
              onClick={() => navigate(`/case-study/${exp.id}`)}
              className="group/btn relative overflow-hidden px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-3 transition-all hover:pr-10"
            >
              <span className="relative z-10 text-sm">CASE STUDY</span>
              <HiArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform text-lg" />
              <div className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <Icon className="absolute -bottom-10 -right-10 text-[20rem] text-white/[0.02] group-hover:text-blue-500/[0.06] transition-all duration-700 pointer-events-none" />
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section className="bg-[#050505] min-h-screen py-24 px-6" id="expriance">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Experience</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore some of my notable projects, professional experience, and achievements.
          </p>
        </header>

        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}
