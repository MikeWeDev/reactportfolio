import React, { useState, useEffect } from 'react';
// 1. Remove Next.js Image and use standard img or imports
import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-scroll';
import { MdFileDownload, MdArrowOutward } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

import SimpleParticles from './Particle';
import ExampleComponent from './TextEffect';

// 2. If the image is in your "public" folder, the path remains the same.
// If it's in "src", you should import it: import heroImg from '../assets/home-right.png'

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen w-full bg-[#030712] flex items-center justify-center overflow-hidden mt-26 md:mt-10"  id="hero">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0 ">
        <SimpleParticles />
        <motion.div 
          className="pointer-events-none absolute -inset-px opacity-50 transition duration-300 z-10"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
          }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-indigo-400 font-mono tracking-tighter text-sm md:text-base">
              // BUILDING REAL-WORLD SYSTEMS
            </h2>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              I'm{" "}
              <span className="relative inline-block">
                Mikiyas
                <span className="absolute bottom-2 left-0 w-full h-3 bg-indigo-500/30 -z-10"></span>
              </span>
            </h1>

            <div className="h-12 text-2xl md:text-3xl font-bold text-gray-400">
              <ExampleComponent />
            </div>

            <p className="max-w-lg text-gray-400 text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-4">
              Full-Stack & Telegram Bot Developer building{" "}
              <span className="text-white"> production-ready web apps and automation systems </span>
              using React, TypeScript, Express, MongoDB, and Telegraf.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/updated-cv.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:bg-indigo-400 hover:text-white"
            >
              <MdFileDownload size={22} />
              DOWNLOAD CV
            </motion.a>
            <Link to="contact" smooth className="cursor-pointer group flex items-center gap-2 px-8 py-4 border border-gray-700 text-white font-bold rounded-full hover:border-indigo-500 transition-all">
              HIRE ME
              <MdArrowOutward className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* Socials */}
          <div className="flex gap-6 items-center">
            {[
              { icon: <FaLinkedin />, link: 'https://linkedin...', color: 'hover:text-[#0A66C2]' },
              { icon: <FaGithub />, link: 'https://github...', color: 'hover:text-white' },
              { icon: <FaTelegramPlane />, link: 'https://t.me...', color: 'hover:text-[#0088CC]' },
              { icon: <FaWhatsapp />, link: 'https://wa.me...', color: 'hover:text-[#25D366]' },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                className={`text-gray-500 text-2xl transition-all duration-300 ${social.color} hover:-translate-y-1`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] border border-white/10 z-10">
              {/* Changed from <Image /> to <img> */}
              <img
                src="/home-right.png"
                alt="Mikiyas"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;