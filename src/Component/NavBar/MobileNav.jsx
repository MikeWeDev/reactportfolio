import React from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaTelegramPlane } from 'react-icons/fa';

const menuItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skill', to: 'skill' },
    { label: 'Expriance', to: 'expriance' },
    { label: 'Service', to: 'service' },
    { label: 'Project', to: 'project' },
    { label: 'Contact', to: 'contact' },
];

function MobileNav({ nav, closeNav }) {
    // Animation variants for staggered link entry
    const containerVars = {
        initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
        open: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
    };

    const linkVars = {
        initial: { y: 20, opacity: 0 },
        open: { y: 0, opacity: 1 }
    };

    return (
        <AnimatePresence>
            {nav && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-[10000] bg-[#030712] flex flex-col items-center p-8 overflow-hidden"
                >
                    {/* 1. Close Button */}
                    <button 
                        onClick={closeNav}
                        className="absolute top-8 right-8 text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <IoCloseOutline size={32} className="text-indigo-400" />
                    </button>

                    {/* 2. Profile Branding Section */}
                    <div className="flex flex-col items-center mt-12 mb-10">
                        <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 to-purple-500 mb-4 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#09101a]">
                                {/* Replaced Next.js Image with standard img */}
                                <img 
                                    src='/Cropped_20241022_094725.jpg' 
                                    alt='Mikiyas' 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-wide">Mikiyas Negash</h2>
                        <p className="text-indigo-400 text-xs font-mono">Full Stack Developer</p>
                    </div>

                    {/* 3. Navigation Links with Motion */}
                    <motion.div 
                        variants={containerVars}
                        initial="initial"
                        animate="open"
                        className="flex flex-col items-center gap-6 w-full"
                    >
                        {menuItems.map((item) => (
                            <motion.div key={item.to} variants={linkVars}>
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={closeNav}
                                    className="text-2xl font-bold text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer uppercase tracking-[0.2em]"
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* 4. Social Footer */}
                    <div className="mt-auto pt-10 flex gap-8">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <FaTelegramPlane size={24} />
                        </a>
                    </div>
                    
                    {/* Decorative Background Blur */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-10" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default MobileNav;