import toast from "react-hot-toast";
import { useCart, type cartCourse } from "../context/CartContext";
import MainButton from "./MainButton";

const CartCardComponent = ({ id, title, price }: cartCourse) => {
  const { removeFromCart } = useCart();
  return (
    <div
      className="flex flex-col gap-4 items-start justify-between
                 bg-white p-6 rounded-2xl shadow-sm 
                 hover:scale-102 hover:shadow-2xl duration-300"
    >
      <div>
        <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
        <p className="text-lg text-slate-500 mt-4">${price}</p>
      </div>

      <MainButton
        btnTitle="Remove"
        onClick={() => {
          removeFromCart(id),
            toast.error("Course removed from cart ❌", { duration: 3000 });
        }}
        className="bg-red-500 text-white hover:bg-red-500/60"
      />
    </div>
  );
};

export default CartCardComponent;
