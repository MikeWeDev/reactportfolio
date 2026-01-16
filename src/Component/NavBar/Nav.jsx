import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiMenuAlt3 } from "react-icons/hi";

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skill', to: 'skill' },
  { name: 'Expriance', to: 'expriance'},
  { name: 'Service', to: 'service' },
  { name: 'Project', to: 'project' },
];

function Nav({ open, nav }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[5000] transition-all duration-300  ${
      isScrolled 
        ? 'bg-[#030712]/80 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' 
        : 'bg-[#030712]/50 py-6'
    }`}>
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto">
        
        {/* Logo Section */}
        <Link to="hero" smooth duration={500} offset={-100} className="cursor-pointer group">
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter transition-all">
            MIKE<span className="text-indigo-500 group-hover:text-yellow-400 transition-colors">.DEV</span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-indigo-400 after:w-full"
              className="relative cursor-pointer text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Hire Me Button - Sticky in Nav */}
          <Link to="contact" smooth className="ml-4 px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-bold hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all cursor-pointer">
            LET'S TALK
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <motion.div 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden cursor-pointer p-2 bg-white/5 rounded-lg text-white" 
          onClick={open}
        >
          <HiMenuAlt3 className="text-3xl" />
        </motion.div>
      </div>
    </nav>
  );
}

export default Nav;