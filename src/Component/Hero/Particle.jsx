import React, { useMemo, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const NUM_PARTICLES = 50;

const generateParticle = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 2}px`,
  delay: `${Math.random() * 5}s`,
  duration: `${Math.random() * 10 + 5}s`,
  color: ["#3e64ff", "#00c9ff", "#92FE9D"][Math.floor(Math.random() * 3)],
  speed: Math.random() * 0.4 + 0.1, // mouse sensitivity
});

const SimpleParticles = ({ className }) => {
  const particles = useMemo(
    () => Array.from({ length: NUM_PARTICLES }, generateParticle),
    []
  );

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className={twMerge("absolute inset-0 overflow-hidden z-0", className)}>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            transform: `translate(${mouse.x * p.speed}px, ${mouse.y * p.speed}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(SimpleParticles);
