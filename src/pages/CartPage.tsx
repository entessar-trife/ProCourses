import CartCardComponent from "../components/CartCardComponent";
import MainTitleComponent from "../components/MainTitleComponent";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import EmptyStateComponent from "../components/EmptyStateComponent";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motionVariants";

const CartPage = () => {
  const { cart, totalPrice, totalCourses } = useCart();
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-brand-gray main-padding">
      {!isLoggedIn ? (
        //  IF THE USER LOGOUT
        <EmptyStateComponent
          title="Please Log In"
          desc="You need to be logged in to view your cart and continue."
          btnTitle="Login Now"
          href="/login"
        />
      ) : //  IF CART IS EMPTY
      cart.length === 0 && isLoggedIn ? (
        <EmptyStateComponent
          title="Your Cart is Empty"
          desc="Looks like you haven't added any courses yet. Start your journey now!"
          btnTitle="Browse Courses"
          href="/courses"
        />
      ) : (
        <div className="py-12 md:py-16 lg:py-20">
          {/* COURSES */}
          <MainTitleComponent title="Your Cart" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {cart.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <CartCardComponent {...course} />
              </motion.div>
            ))}
          </motion.div>

          {/* SUMMARY */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className="p-8 mt-10 rounded-2xl bg-white border border-brand-light/20 shadow-xl shadow-brand-navy/5"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                Total Summary
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex justify-between text-slate-500 text-lg">
                  <span>Total courses</span>
                  <span>{totalCourses}</span>
                </div>
                <div className="flex justify-between text-slate-500 text-lg">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-slate-500 text-lg">
                  <span>Discount</span>
                  <span className="text-green-500">-$0.00</span>
                </div>
                <div className="border-t border-brand-light pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-brand-navy">
                    Total Price:
                  </span>
                  <span className="text-xl md:text-3xl font-black text-brand-navy">
                    ${totalPrice}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
