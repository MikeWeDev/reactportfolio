import React from 'react';
import { motion } from 'framer-motion';
import { MdFileDownload } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Completed', value: '8+' },
  { label: 'Happy Clients', value: '3+' },
];

function About() {
  return (
    <section  className="bg-[#1a1c2e] py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16" id="about">
          
          {/* LEFT: Image Side with Creative Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] z-10">
              {/* Replaced Next.js Image with standard img */}
              <img 
                src='/Cropped_20241022_094725.jpg'
                alt='Mikiyas Negash'
                className="w-full h-full rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-[#55e6a5]/30"
              />
            </div>
            
            {/* Decorative Background Elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#55e6a5] rounded-2xl z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-300" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#55e6a5]/10 blur-3xl rounded-full" />
          </motion.div>

          {/* RIGHT: Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h4 className="text-[#55e6a5] font-mono tracking-widest text-lg mb-4">
              // 01. ABOUT ME
            </h4>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Crafting <span className="text-yellow-400">Seamless</span> Digital Experiences
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Hello! I'm <span className="text-white font-medium">Mikiyas Negash</span>. I bridge the gap between complex backend logic and pixel-perfect frontend design. My goal isn't just to build websites, but to create digital journeys that are fast, accessible, and visually stunning.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {['Fullstack Development', 'Telegram Bot Development', 'API Integration', 'Performance Optimization'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <FiCheckCircle className="text-[#55e6a5]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-8 mb-12 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              {stats.map((stat, i) => (
                <div key={i}>
                  <h5 className="text-2xl font-bold text-[#55e6a5]">{stat.value}</h5>
                  <p className="text-xs text-slate-500 uppercase tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a 
              href="/Mikiyas_Negash_CV_v2.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#55e6a5] text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(85,230,165,0.4)] transition-all uppercase tracking-wider"
            >
              <MdFileDownload size={22} />
              Download CV
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;