import { useState } from "react";
import { coursesData } from "../data/coursesData";
import CourseCardComponent from "../components/CourseCardComponent";
import PaginationComponent from "../components/PaginationComponent";
import MainTitleComponent from "../components/MainTitleComponent";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motionVariants";

const CoursesPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coursesPerPage = 6;
  const lastIndex = currentPage * coursesPerPage;
  const firstIndex = lastIndex - coursesPerPage;
  const currentCourses = coursesData.slice(firstIndex, lastIndex);

  return (
    <section className="py-12 md:pt-16 lg:pt-20 main-padding bg-brand-gray">
      <MainTitleComponent title="Explore Our Courses" />
      <motion.div
        key={currentPage}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
      >
        {currentCourses.map((course) => (
          <motion.div key={course.id} variants={itemVariants}>
            <CourseCardComponent course={course} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <PaginationComponent
          totalCards={coursesData.length}
          cardsPerPage={coursesPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </motion.div>
    </section>
  );
};

export default CoursesPage;
