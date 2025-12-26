import MainButton from "./MainButton";
import hero_img from "../assets/images/hero_image.webp";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../utils/motionVariants";

const HeroComponent = () => {
  const { userName, isLoggedIn } = useAuth();

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center gap-4
      main-padding pt-10 md:pt-16 lg:pt-20 max-lg:pb-10
     min-h-screen bg-linear-to-br from-white to-brand-light/30"
    >
      {/* TEXT CONTAINER */}
      <motion.div
        {...fadeInUp}
        className="w-full lg:w-1/2 
      flex flex-col gap-4 items-start max-lg:pt-8"
      >
        {isLoggedIn && (
          <span className="text-brand-purple text-lg">
            Welcome back, <span className="text-xl font-bold">{userName}</span>
            👋
          </span>
        )}
        <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight uppercase font-extrabold text-brand-navy">
          Learn Skills That
          <span className="text-brand-purple"> Shape Your Future </span>
        </h2>
        <p className="text-base lg:text-xl text-slate-600 md:pr-8">
          Online courses designed to help you learn, grow, and succeed in tech
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
          <MainButton
            btnTitle="Browse Courses"
            href="/courses"
            className="hover:scale-105 max-w-xs max-sm:w-full"
          />
          {!userName && (
            <MainButton
              btnTitle="Join for free"
              href="/login"
              className="bg-brand-navy text-white hover:scale-105 max-w-xs max-sm:w-full"
            />
          )}
        </div>
      </motion.div>
      {/* IMAGE CONTAINER */}
      <motion.div
        {...scaleIn}
        className="h-2/3 lg:h-full w-full lg:w-1/2 flex items-center justify-center"
      >
        <div className="relative w-full">
          <div className="absolute -z-10 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <img
            src={hero_img}
            alt="ProCourses Learning Platform"
            className="h-full w-full object-contain drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroComponent;
