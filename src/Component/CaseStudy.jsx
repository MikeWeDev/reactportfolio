import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { experiences } from "./experiences";

// --- React Icons ---
import {
  HiOutlineArrowLeft,
  HiOutlineCalendar,
  HiOutlineViewGrid,
  HiOutlineTerminal,
} from "react-icons/hi";

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null); 
  const exp = experiences.find((e) => e.id === parseInt(id));
  
  // State to manage full-screen image modal modal layer
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Sets the media player volume level to 50% on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, [exp]);

  if (!exp) return null;

  const isEducation = exp.category === "Education";
  const isSimpleView = !exp.video || exp.id === 3 || isEducation;

  return (
    <section className="bg-[#080808] text-gray-100 min-h-screen p-4 md:p-8 font-sans relative">
      <div className="max-w-[1600px] mx-auto space-y-6">
        
        {/* --- Top Action Bar --- */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            <HiOutlineArrowLeft size={18} /> Back to Dashboard
          </button>

          <div className="flex gap-4">
            <span className="hidden md:flex items-center gap-2 text-xs text-gray-500">
              <HiOutlineCalendar className="text-blue-500" /> {exp.period}
            </span>
          </div>
        </div>

        {/* --- Main Dashboard Grid (Changed to a reliable, explicit height context) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[620px]">
          
          {/* Box 1: Identity */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 shadow-2xl h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                Project Case Study
              </div>

              <h1 className="text-5xl xl:text-7xl font-black tracking-tighter leading-none mb-4">
                {exp.company}
              </h1>

              <p className="text-xl text-gray-400 font-light leading-relaxed">
                {exp.title}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Box 2: Conditional Layout (Strict block clipping containment) */}
          <div className="lg:col-span-8 relative rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-full">
            
            {/* --- Education Layout --- */}
            {isEducation ? (
              <div className="h-full w-full bg-gradient-to-br from-[#0f1115] to-[#111827] p-10 flex items-center overflow-y-auto">
                <div className="max-w-3xl w-full space-y-10">

                  {/* Header */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
                      Academic Background
                    </div>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight">
                      Bachelor of Science in Computer Science
                    </h2>

                    <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                      Focused on core computer science principles including
                      software engineering, distributed systems, and system-level programming.
                    </p>
                  </div>

                  {/* Academic Focus Grid */}
                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-sm uppercase tracking-widest text-emerald-400 mb-3">
                        Core Subjects
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Data Structures, Algorithms, Operating Systems,
                        Computer Networks, Database Systems.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-sm uppercase tracking-widest text-emerald-400 mb-3">
                        Technical Emphasis
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        System design thinking, scalability concepts,
                        distributed architectures, and performance optimization.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-sm uppercase tracking-widest text-emerald-400 mb-3">
                        Programming
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        C++, JavaScript, backend architecture,
                        and modern frontend engineering practices.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-sm uppercase tracking-widest text-emerald-400 mb-3">
                        Academic Growth
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Developed strong analytical thinking,
                        problem-solving skills, and structured system design approach.
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            ) : isSimpleView ? (
              <div className="h-full w-full bg-gradient-to-br from-[#0f0f0f] to-[#141414] p-10 flex items-center overflow-y-auto">
                <div className="max-w-3xl w-full space-y-10">

                  <div>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight">
                      Private Client Project
                    </h2>

                    <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                      Developed for a private client to establish a professional web presence,
                      allowing visitors to access information and communicate directly.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-3">
                        Purpose
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Enable visitors to easily access information and communicate through structured contact channels.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-3">
                        Architecture
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Fully static, fast, and lightweight to ensure seamless performance.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-3">
                        Design Focus
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Clean, responsive layout optimized for readability and accessibility.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-3">
                        Deployment
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Built for long-term stability and minimal hosting requirements.
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            ) : (
              <div className="relative group h-full w-full bg-black overflow-hidden">
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Production Render
                  </span>
                </div>

                <video
                  ref={videoRef}
                  src={exp.video}
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity block"
                />
              </div>
            )}

          </div>
        </div>

        {/* --- Divider + Screenshots (Pushed outside the explicit height engine layout stream completely) --- */}
        {!isSimpleView && !isEducation && (
          <div className="w-full pt-4">
            <div className="flex items-center gap-4 py-8">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <HiOutlineViewGrid className="text-gray-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600">
                Deep Dive Visuals
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
              {exp.screenshots?.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className="aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#111] group shadow-2xl cursor-pointer"
                >
                  <img
                    src={img}
                    alt="Detail Subsystem Render"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* --- Fullscreen Image Lightbox Modal Overlay --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-xs text-gray-400 hover:text-white uppercase tracking-widest font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10 transition-colors"
          >
            Close Esc
          </button>
          
          <img 
            src={selectedImg} 
            alt="Expanded visual render" 
            className="max-w-full max-h-[90vh] rounded-xl object-contain select-none shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking directly on image box
          />
        </div>
      )}
    </section>
  );
}