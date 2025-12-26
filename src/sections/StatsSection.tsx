import CountUp from "react-countup";
import { statsData } from "../data/stateData";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motionVariants";

const StatsSection = () => {
  return (
    <div className="bg-brand-navy py-12">
      <motion.div
        className="main-padding grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {statsData.map((stat, i) => (
          <motion.div key={i} className="flex flex-col" variants={itemVariants}>
            <span className="text-brand-gold text-3xl md:text-4xl font-black">
              {i < 3 && "+"}
              <CountUp
                start={0}
                end={stat.value}
                duration={4}
                suffix={stat.suffix}
              />
            </span>
            <span className="text-white/70 text-sm md:text-base font-medium mt-1">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsSection;
