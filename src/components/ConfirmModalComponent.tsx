import { fadeInUp, scaleIn } from "../utils/motionVariants";
import MainButton from "./MainButton";
import { motion } from "framer-motion";

interface ConfirmModalComponentProps {
  title: string;
  desc: string;
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModalComponent = ({
  title,
  desc,
  isOpen,
  onCancel,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmModalComponentProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      {...fadeInUp}
      className="fixed inset-0 z-10000 main-padding bg-black/50 flex items-center justify-center"
    >
      <motion.div
        {...scaleIn}
        className="bg-white p-6 rounded-3xl max-w-sm w-full text-center"
      >
        <h2 className="text-brand-navy text-2xl font-extrabold mb-4">
          {title}
        </h2>
        <p className="text-slate-600 mb-6">{desc}</p>
        <div className="flex justify-center gap-5">
          <MainButton
            btnTitle={cancelText}
            onClick={onCancel}
            className="bg-gray-200"
          />
          <MainButton
            btnTitle={confirmText}
            onClick={onConfirm}
            className="bg-brand-purple text-white"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmModalComponent;
