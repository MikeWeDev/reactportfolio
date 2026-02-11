import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";

const data = [
  {
    title: "Full-Stack Development",
    icons: <RiNextjsFill className="text-white" />, 
    description: "Building production-ready web applications using Next.js, TypeScript, Express, and MongoDB. I focus on performance, scalability, and maintainable code.",
    borderColor: "group-hover:border-white/20", 
    shadowColor: "shadow-black/20",
    highlight: "Optimized for speed and scalability"
  },
  {
    title: "Telegram Bot Development",
    icons: <FaTelegramPlane className="text-[#229ED9]" />,
    description: "Designing and implementing Telegram bots with Telegraf for real-time interactions, automated workflows, and payment-enabled features.",
    borderColor: "group-hover:border-[#229ED9]/50",
    shadowColor: "shadow-[#229ED9]/10",
    highlight: "Real-time, automated, and reliable"
  },
  {
    title: "API Integration & Automation",
    icons: <SiPostman className="text-[#FF6C37]" />,
    description: "Integrating third-party APIs and internal services to build seamless, reliable systems. Focused on clean endpoints, authentication, and data consistency.",
    borderColor: "group-hover:border-[#FF6C37]/50",
    shadowColor: "shadow-[#FF6C37]/10",
    highlight: "Seamless data flow and automation"
  }
];

export default function Services() {
  return (
    <section className='bg-[#050505] min-h-screen py-24 relative overflow-hidden font-sans'>
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#55e6a5]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div id="service" className="max-w-7xl mx-auto px-6 relative z-10">
        
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-[#55e6a5]" />
            <span className="text-[#55e6a5] font-mono tracking-[0.3em] uppercase text-xs">Expertise</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-5xl md:text-8xl font-black tracking-tighter"
          >
            SERVICES<span className="text-[#55e6a5]">.</span>
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Body */}
              <div className={`h-full bg-[#0f0f12] border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 shadow-2xl ${item.borderColor} ${item.shadowColor}`}>
                
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    {item.icons}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>

                {/* Replace Explore Details button with a subtle highlight */}
                <div className="mt-8 text-sm text-[#55e6a5]/80 font-semibold">
                  {item.highlight}
                </div>

                {/* Ambient Decorative Number */}
                <span className="absolute bottom-6 right-8 text-white/[0.02] font-black text-7xl pointer-events-none group-hover:text-[#55e6a5]/5 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
