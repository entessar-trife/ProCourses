import { easeOut, type MotionProps, type Variants } from "framer-motion";

export const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: easeOut },
    },
};


// SCALE IN ANIMATION
export const scaleIn: MotionProps = {
    initial: { scale: 0 },
    whileInView: { scale: 1 },
    transition: { duration: 1 },
    viewport: { once: true, amount: 0.1 },
};


// FADE IN UP ANIMATION
export const fadeInUp: MotionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.1 },
};