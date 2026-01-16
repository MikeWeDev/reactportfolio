import React from 'react';
import '../Style/index.css';
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";

const data = [
  {
    title: "React.js dev",
    icons: <FaReact color="#5ED4F4" />,
    discription: `As a React.js developer, I leverage efficiency and simplicity to build high-performance user interfaces.`
  },
  {
    title: "Next.js dev",
    icons: <RiNextjsFill color='#ffffff' />,
    discription: `As a Next.js developer, I optimize performance using server-side rendering and the latest web features.`,
    button: "read more"
  },
  {
    title: "Test With Jest",
    icons: <SiJest color="#C21325" />,
    discription: `Using Jest, I ensure your codebase is reliable, bug-free, and maintainable through comprehensive testing.`,
    button: "read more"
  }
];

function Services() {
  return (
    <div className='bg-[#0e1538]'>
      <div 
        id="service" 
        className="flex justify-center items-center flex-col lg:h-[120vh] h-auto py-20"
        data-aos="zoom-in" 
        data-aos-duration="700" 
        data-aos-delay="400"
      >
        <h1 className="text-[#55e6a5] text-[35px] font-bold pb-5">
          Services
        </h1>
        
        <p className="text-white opacity-[0.6] lg:text-[16px] text-[12px] pb-2 w-[80%] text-center">
          As a dedicated frontend developer, I provide quality web experiences and efficient websites using React.js, 
          Next.js, and reliable testing with Jest.
        </p>

        <div className="con w-[95%] flex lg:flex-row flex-col items-center justify-center mt-10 gap-8">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="box lg:w-[30%] w-[90%] min-h-[400px] bg-black/40 border border-white/10 p-8 rounded-xl flex flex-col justify-between items-center transition-all duration-300 hover:border-[#55e6a5]/50 group"
            >
              <div className="text-white lg:text-[23px] text-[18px] w-full flex items-center justify-center gap-5 z-10">
                <div className="text-4xl group-hover:scale-110 transition-transform"> 
                   {item.icons}
                </div>
                <div className="font-bold"> {item.title}</div>
              </div>

              <div className="text-white md:text-[95%] text-[85%] opacity-[0.6] text-center leading-relaxed z-10">
                {item.discription}
              </div>

              <div className="z-10 w-full flex items-center justify-center">
                <button className='px-8 py-3 hover:bg-[#55e6a5] transition-all duration-200 lg:text-[14px] text-[10px] font-bold uppercase border-2 border-[#55e6a5] bg-transparent hover:text-black text-white flex items-center hover:scale-95 rounded-lg'>
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;