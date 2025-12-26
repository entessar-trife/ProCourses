import { useParams } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import MainButton from "../components/MainButton";
import {
  FaClock,
  FaSignal,
  FaBookReader,
  FaGlobe,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import EmptyStateComponent from "../components/EmptyStateComponent";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motionVariants";

const CourseDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const course = useMemo(
    () => coursesData.find((e) => e.id === Number(id)),
    [coursesData, id]
  );
  const { addToCart, isInCart } = useCart();
  const { isLoggedIn } = useAuth();

  if (!course) {
    return (
      <EmptyStateComponent
        title={`The course with id: ${id} is not found`}
        href="/courses"
        btnTitle="Back to Courses"
      />
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="pt-12 md:pt-16 lg:pt-20 min-h-screen bg-white"
    >
      {/* FIRST SECTION */}
      <motion.div
        variants={itemVariants}
        className="bg-brand-navy pt-10 pb-20 px-6 text-center"
      >
        <span className="bg-brand-gold text-brand-navy px-4 py-1 rounded-full text-sm font-bold">
          {course.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mt-6 mb-4 leading-tight">
          {course.title}
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          {course.shortDescription}
        </p>
      </motion.div>

      {/* SECOND SECTION */}
      <motion.div
        variants={itemVariants}
        className="max-w-6xl mx-auto px-6 -mt-10"
      >
        <div
          className="bg-white shadow-2xl rounded-3xl p-6 md:p-8 
        grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="flex flex-col items-center">
            <FaSignal className="text-brand-purple mb-4 w-6 h-6 md:w-8 md:h-8" />
            <span className="text-sm text-slate-400 uppercase">Level </span>
            <span className="font-bold text-brand-navy">{course.level} </span>
          </div>
          <div className="flex flex-col items-center">
            <FaBookReader className="text-brand-purple mb-4 w-6 h-6 md:w-8 md:h-8" />
            <span className="text-sm text-slate-400 uppercase">Lessons </span>
            <span className="font-bold text-brand-navy">
              {course.lessonsCount}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-brand-purple mb-4 w-6 h-6 md:w-8 md:h-8" />
            <span className="text-sm text-slate-400 uppercase">Duration</span>
            <span className="font-bold text-brand-navy">{course.duration}</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGlobe className="text-brand-purple mb-4 w-6 h-6 md:w-8 md:h-8" />
            <span className="text-sm text-slate-400 uppercase">Language </span>
            <span className="font-bold text-brand-navy">{course.language}</span>
          </div>
        </div>
      </motion.div>

      {/* THIRD SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* CORSE OVERVIEW */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-brand-navy mb-3 md:mb-6">
            Course Overview
          </h2>
          <p className="leading-loose text-lg">{course.fullDescription}</p>
        </motion.div>

        {/* SCHEDULE CARD */}
        <motion.div
          variants={itemVariants}
          className="my-6 md:my-12 bg-brand-gray/70 rounded-2xl p-5 md:p-8 border border-brand-light/30"
        >
          <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
            <FaChalkboardTeacher className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-xl md:text-2xl"> Class Schedule </span>
          </h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-lg text-slate-400">Days: </span>
              <span className="font-bold text-sm">
                {course.days.join(" - ")}
              </span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-lg text-slate-400">Time: </span>
              <span className="font-bold text-sm">{course.time}</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-lg text-slate-400">Instructor: </span>
              <span className="font-bold text-sm">{course.instructor} </span>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM ACTION BAR */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between 
            p-5 md:p-8 
          bg-brand-navy rounded-3xl shadow-2xl shadow-brand-navy/50"
        >
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-brand-gold font-bold uppercase tracking-widest text-sm">
              Ready to start?
            </p>
            <h3 className="text-white text-3xl font-black mt-2">
              Enroll for only ${course.price}
            </h3>
          </div>
          {isLoggedIn ? (
            <MainButton
              disabled={isInCart(course.id)}
              btnTitle={isInCart(course.id) ? "Added" : "Add to Cart"}
              onClick={() => {
                addToCart({
                  id: course.id,
                  title: course.title,
                  price: course.price,
                }),
                  toast.success("Course added to cart 🛒", { duration: 5000 });
              }}
              className={`max-sm:w-full px-12 py-4 text-lg 
                ${
                  isInCart(course.id)
                    ? "bg-gray-300 text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
                    : "hover:scale-105 bg-brand-gold text-brand-navy"
                }`}
            />
          ) : (
            <MainButton
              btnTitle="Login to Add"
              href="/login"
              className="max-sm:w-full px-12 py-4 text-lg bg-brand-gold text-brand-navy hover:scale-105"
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseDetailsPage;
