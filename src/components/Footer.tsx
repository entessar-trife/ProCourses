import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motionVariants";

const Footer = () => {
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-brand-navy/10 text-gray-300 border-t border-brand-navy"
    >
      <div className="main-padding py-4 lg:py-8 text-center">
        {/* LOGO */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl lg:text-4xl font-bold text-brand-navy">
            Pro<span className="text-brand-purple">Courses</span>
          </h2>
          <p className="text-sm mt-2 text-brand-navy">Learn. Build. Grow.</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full h-[0.5px] bg-brand-navy/10 my-5"
        ></motion.div>

        {/* CONTACT INFO */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-center items-center gap-4 text-brand-navy"
        >
          <a
            href="mailto:info@procourses.com"
            className="flex items-center gap-3 hover:text-brand-purple transition-colors"
          >
            <FaEnvelope className="text-brand-purple" /> info@procourses.com
          </a>
          <a
            href="tel:+96311222333"
            className="flex items-center gap-3 hover:text-brand-purple transition-colors"
          >
            <FaPhoneAlt className="text-brand-purple" /> +963 11 222 333
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full h-[0.5px] bg-brand-navy/10 my-5"
        ></motion.div>

        {/* COPYRIGHT */}
        <motion.div
          variants={itemVariants}
          className="text-xs text-brand-navy mt-6"
        >
          © {new Date().getFullYear()} ProCourses. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
