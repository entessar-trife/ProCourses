import { FaCartShopping } from "react-icons/fa6";
import MainButton from "./MainButton";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

interface EmptyStateComponentProps {
  title: string;
  desc?: string;
  btnTitle: string;
  href: string;
}

const EmptyStateComponent = ({
  title,
  desc,
  btnTitle,
  href,
}: EmptyStateComponentProps) => (
  <motion.div
    {...fadeInUp}
    className="min-h-screen flex items-center justify-center pt-12 md:pt-16 lg:pt-20"
  >
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-md text-center border border-brand-light/20">
      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-brand-light">
        <FaCartShopping className="text-brand-navy text-3xl" />
      </div>
      <h4 className="text-2xl font-black text-brand-navy mb-4">{title}</h4>
      <p className="text-slate-500 mb-8 leading-relaxed">{desc}</p>
      <MainButton
        btnTitle={btnTitle}
        href={href}
        className="px-10 py-4 shadow-lg shadow-brand-navy/10 hover:scale-105"
      />
    </div>
  </motion.div>
);

export default EmptyStateComponent;
