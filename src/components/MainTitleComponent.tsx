import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

interface mainTitleComponentProps {
  title: string;
}

const MainTitleComponent = ({ title }: mainTitleComponentProps) => {
  return (
    <motion.div {...fadeInUp} className="relative text-center my-10 lg:my-16">
      {/* MAIN TITLE */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy">
        {title}
        {/* DECORATIVE LINE */}
        <span
          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2
         h-1.5 w-16 bg-brand-gold rounded-full"
        ></span>
      </h2>
    </motion.div>
  );
};

export default MainTitleComponent;
