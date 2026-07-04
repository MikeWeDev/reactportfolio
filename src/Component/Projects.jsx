import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  // ------------------ Full-Stack Projects ------------------
  {
    title: 'Hotel Management System',
    category: 'fullstack',
    desc: 'A comprehensive hotel management platform built with React, TypeScript, Tailwind, and localStorage for front-end simulation of real-world booking, reservations, and admin functionalities.',
    img: '/195815886.jpg',
    liveUrl: 'https://hms-front-end.netlify.app/',
    tech: ['Next.js', 'TypeScript', 'Express', 'MongoDB']
  },
  {
    title: 'AI-Powered Itinerary Planner',
    category: 'fullstack',
    desc: 'A full-stack travel planner using Next.js, Express, MongoDB, and OpenAI API that generates dynamic itineraries based on user preferences and travel data.',
    img: '/build-ai-trip-planner-app.png',
    liveUrl: 'https://aitravelplanner-final.netlify.app/',
    tech: ['Next.js', 'Express', 'MongoDB', 'Cohere API']
  },
    {
    title: 'Event Sharing Platform',
    category: 'fullstack',
    desc: 'A platform for sharing and discovering events, built with Next.js, TypeScript, and Tailwind CSS.',
    img: '/images/images.jpeg',
    liveUrl: 'http://event-ly.page/',
    tech: ['Next.js', 'TypeScript', 'Express', 'MongoDB']
  },

  {
    title: 'Admin Dashboard',
    category: 'fullstack',
    desc: 'A robust admin dashboard built with React, TypeScript, and Tailwind CSS to manage data, users, and analytics in real-time.',
    img: '/adminedashbord.webp',
    liveUrl: 'https://adminedashbordfrontendforportfolio.netlify.app/',
    tech: ['Next.js', 'TypeScript', 'Express', 'MongoDB']
  },

  // ------------------ Front-End Projects ------------------
  {
    title: 'E-Commerce Website',
    category: 'frontend',
    desc: 'A modern e-commerce website with product catalog, shopping cart, and checkout flows built with React, Tailwind, and Redux for state management.',
    img: '/coloshop-free-bootstrap-ecommerce-website-templates.jpg',
    liveUrl: 'https://ecomarce-m.netlify.app/',
    tech: ['React', 'Tailwind']
  },
  {
    title: 'Real Estate Platform',
    category: 'frontend',
    desc: 'A real estate showcase platform highlighting properties with responsive design, built using Next.js, Tailwind CSS, and Node.js backend integration.',
    img:'/realstate.jpg',
    liveUrl: 'https://realstate-rental.netlify.app/',
    tech: ['Reacts', 'Tailwind']
  },
  {
    title: 'Clean Data Website',
    category: 'frontend',
    desc: 'A clean, data-driven website focusing on visualization and user-friendly interfaces using React and Tailwind CSS.',
    img: '/CLEANDATA.png',
    liveUrl: 'https://cleand.netlify.app/',
    tech: ['React', 'Tailwind']
  },
 /* {
    title: 'Marketing Website',
    category: 'frontend',
    desc: 'A promotional marketing website with responsive design, interactive elements, and optimized performance for brand engagement.',
    img: '/Gemini_Generated_Image_1czia71czia71czi.png',
    liveUrl: 'https://yaredmusic.netlify.app/',
    tech: ['React', 'Tailwind', 'Framer Motion']
  },*/

  // ------------------ Telegram Bot Projects ------------------
  {
    title: 'Telegram Bingo Bot',
    category: 'telegram bot',
    desc: 'A real-time Telegram bot for a Bingo game platform, handling payments, game logic, and 10,000+ concurrent users using Telegraf, Express, and MongoDB.',
    img: '/luckey bingo promo.jpg',
    liveUrl: 'https://t.me/bossbingobot',
    tech: ['Telegraf', 'Node.js', 'Express', 'MongoDB', 'Socket.io']
  }
];

const categories = ['all', 'fullstack','frontend', 'telegram bot'];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section className="bg-[#0f172a] py-24">
      <div className="container mx-auto px-6"  id="project">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-yellow-400 uppercase text-sm tracking-[0.3em] font-bold mb-4">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Best</span> Projects
          </h3>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-300 border-2 ${
                filter === cat
                  ? 'bg-yellow-400 border-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]'
                  : 'border-gray-700 text-gray-400 hover:border-yellow-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={p.title}
                className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-colors"
              >
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                    {p.desc}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all active:scale-95"
                  >
                    🚀 View Live Project
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}