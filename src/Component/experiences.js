import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineTerminal } from "react-icons/hi";
import { HiCodeBracket } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";

export const experiences = [
  {
    id: 1,
    category: "Lead Project",
    title: "Frontend Developer",
    company: "Fullstack Bingo Website",
    desc: "Engineered a real-time betting infrastructure serving 12+ physical locations.",
    period: "2023 - 2025",
    tags: ["React", "Socket.io", "Node.js"],
    color: "from-blue-600 to-cyan-500",
    icon: HiOutlineBriefcase,
    screenshots: ["/Screenshot 2026-02-11 203552.png", "/Screenshot 2026-02-11 203723.png", "/Screenshot 2026-02-11 203824.png"],
    video: "/bingo system review video.mp4",
  },
  {
    id: 2,
    category: "Lead Project",
    title: "Full-Stack Developer & Telegram Bot Engineer",
    company: "Telegram Bingo App",
    desc: "Built a real-time Telegram betting platform serving over 10,000 concurrent users. Implemented payment integration, automated game logic, and a responsive web dashboard for admins and players.",
    period: "2025 - 2026",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB", "Telegraf", "Socket.io"],
    color: "from-indigo-600 to-purple-500",
    icon: FaTelegramPlane,
    screenshots: ["/photo_1_2026-02-11_20-41-53.jpg", "/photo_2_2026-02-11_20-41-53.jpg", "/photo_3_2026-02-11_20-41-53.jpg"],
    video: "/telegram bingo game review video (1).mp4",
  },
  {
    id: 3,
    category: "Solutions Provider",
    title: "Web Engineer",
    company: "Car Dealership Platform",
    desc: "Built a custom inventory management system with a lightning-fast search interface.",
    period: "2024",
    tags: ["JavaScript", "SEO", "Tailwind"],
    color: "from-purple-600 to-pink-500",
    icon: HiOutlineTerminal,
    screenshots: ["/images/placeholder7.png", "/images/placeholder8.png", "/images/placeholder9.png"],
    video: "https://www.loom.com/embed/placeholder-video-3",
  },
 {
  id: 4,
  category: "Education",
  title: "B.Sc. in Computer Science",
  company: "Addis Ababa University",
  desc: "Comprehensive study of computer science fundamentals with emphasis on software systems, distributed computing, and algorithmic thinking.",
  period: "2022 - 2026",
  tags: ["Software Architecture", "Distributed Systems", "C++", "Data Structures"],
  color: "from-emerald-600 to-teal-500",
  icon: HiOutlineAcademicCap,
  screenshots: [],
  video: null,
}

];
