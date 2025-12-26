import MainButton from "../components/MainButton";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

const CTASection = () => {
  const { isLoggedIn } = useAuth();
  return (
    <section className="py-10 md:py-20 main-padding">
      <motion.div
        {...fadeInUp}
        className="bg-linear-to-r from-brand-purple to-brand-navy 
      rounded-3xl md:rounded-[3rem]
     p-6 lg:p-10 text-center relative overflow-hidden"
      >
        {/* DECORATIVE CIRCLES IN THE BACKGROUND */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/3 -translate-y-1/3 shadow-2xl"></div>
        <div className="absolute -bottom-36.25 -right-25 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-2xl"></div>

        <h2
          className="flex flex-col gap-2 
        text-3xl md:text-5xl font-black mb-6 relative z-50"
        >
          <span className="text-white"> Ready to start your </span>
          <span className="text-brand-gold">learning journey?</span>
        </h2>
        <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
          Join thousands of students and get access to high-quality tech
          courses.
        </p>
        <MainButton
          btnTitle={isLoggedIn ? "Browse Courses" : "Get Started Now"}
          href={isLoggedIn ? "/courses" : "/login"}
          className="hover:scale-110 px-10 py-4 relative z-50"
        />
      </motion.div>
    </section>
  );
};

export default CTASection;
