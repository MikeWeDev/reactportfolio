import { TypeAnimation } from 'react-type-animation';

const  ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'FULLSTACK DEVLOPER',
       1500, // wait 1s before replacing "Mice" with "Hamsters"
        'TELEGRAM BOT DEVELOPER',
       1500,
       'AI & API INTEGRATION',
       1500,
      ]}
      speed={60}
      className='text-[20px] md:text-[30px] text-[#3e64ff] font-bold uppercase'      
      repeat={Infinity}
    />
  );
};
export default ExampleComponent;