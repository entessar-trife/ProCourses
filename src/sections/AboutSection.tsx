import AboutCardComponent from "../components/AboutCardComponent";
import MainTitleComponent from "../components/MainTitleComponent";
import { aboutData } from "../data/aboutData";
import about_img from "../assets/images/about_image.webp";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  scaleIn,
} from "../utils/motionVariants";

const AboutSection = () => {
  return (
    <section className="main-padding bg-white">
      <MainTitleComponent title="About Our Platform" />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-12">
        {/* LEFT SIDE: IMAGE*/}
        <motion.img
          {...scaleIn}
          src={about_img}
          alt="About us"
          className="rounded-2xl"
        />

        {/* RIGHT SIDE: FEATURES LIST */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col"
        >
          {aboutData.map((card, i) => (
            <motion.div key={i} variants={itemVariants}>
              <AboutCardComponent {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
