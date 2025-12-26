import card_bg from "../assets/images/course_bg.webp";
import { useCart } from "../context/CartContext";
import type { Course } from "../types/courseType";
import MainButton from "./MainButton";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

interface CourseCardProps {
  course: Course;
}

const CourseCardComponent = ({ course }: CourseCardProps) => {
  const { addToCart, isInCart } = useCart();
  const { isLoggedIn } = useAuth();

  return (
    <div
      className="flex flex-col justify-between group overflow-hidden
      bg-white border-brand-light/50 rounded-2xl shadow-md 
    hover:shadow-2xl transition-all duration-300 border"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden h-48 bg-brand-gray">
        <img
          src={card_bg}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Badge:Category */}
        <div className="absolute top-4 left-4 bg-brand-navy text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
          {course.category}
        </div>

        {/* Badge:Level */}
        <div
          className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm 
          ${
            course.level === "Beginner"
              ? "bg-green-100 text-green-700"
              : course.level === "Intermediate"
              ? "bg-orange-100 text-orange-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {course.level}
        </div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="p-5 flex flex-col">
        <h3 className="text-xl font-bold text-brand-navy mb-2 line-clamp-1 group-hover:text-brand-purple transition-colors">
          {course.title}
        </h3>

        <p className="text-slate-500 text-sm mb-4 line-clamp-1 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* PRICE & BUTTONS */}
        <div className="mt-auto pt-4 border-t border-brand-light flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-black text-brand-navy">
              ${course.price}
            </span>
            <span className="text-xs text-slate-400 font-medium italic">
              By {course.instructor}
            </span>
          </div>

          <div className="grid max-[400px]:grid-cols-1 grid-cols-2 gap-2">
            {/* VIEW DETAILS BUTTON */}
            <MainButton
              btnTitle="View Details"
              href={`/courseDetails/${course.id}`}
              className="text-xs text-white bg-brand-navy hover:scale-105"
            />

            {/* ADD TO CART BUTTON */}
            {isLoggedIn ? (
              <MainButton
                disabled={isInCart(course.id)}
                btnTitle={isInCart(course.id) ? "Added ✓" : "Add to Cart"}
                onClick={() => {
                  addToCart({
                    id: course.id,
                    title: course.title,
                    price: course.price,
                  });
                  toast.success("Course added to cart 🛒", { duration: 3000 });
                }}
                className={`text-xs ${
                  isInCart(course.id)
                    ? "bg-gray-300 text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
                    : "hover:scale-105"
                }`}
              />
            ) : (
              <MainButton
                btnTitle="Login to Add"
                href="/login"
                className="text-xs hover:scale-105"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardComponent;
