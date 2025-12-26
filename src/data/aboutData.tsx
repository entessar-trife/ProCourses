import type { JSX } from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";

export interface AboutData {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export const aboutData: AboutData[] = [
  {
    icon: <FaGraduationCap className="text-brand-purple w-8 h-8" />,
    title: "Who are we?",
    desc: "ProCourses is a leading platform dedicated to empowering students through high-quality technical education.",
  },
  {
    icon: <FaLaptopCode className="text-brand-purple w-8 h-8" />,
    title: "What do we offer?",
    desc: "We provide interactive paths in web development, AI, and design, focused on practical projects.",
  },
  {
    icon: <FaChalkboardTeacher className="text-brand-purple w-8 h-8" />,
    title: "Why our courses?",
    desc: "Our courses are designed by industry experts to bridge the gap between academic study and the job market.",
  },
];
