import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { navLinksData } from "../../data/navLinksData";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import MainButton from "../MainButton";

interface NavBarMenu {
  onOpenLogout: () => void;
}

const NavBarMenu = ({ onOpenLogout }: NavBarMenu) => {
  const [open, setOpen] = useState<boolean>(false);
  const { totalCourses } = useCart();
  const { isLoggedIn, userName } = useAuth();

  return (
    <div className="md:hidden">
      {/* ICON TOGGLE */}
      <FaBars
        onClick={() => setOpen(true)}
        className="w-6 h-6 text-brand-navy cursor-pointer"
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 top-0 left-0 w-full h-screen bg-brand-navy
          flex flex-col justify-center items-center gap-8 text-xl transition-all duration-500 z-50
          ${
            open ? "opacity-100 visible" : "opacity-0 invisible -translate-y-5"
          }`}
      >
        {navLinksData.map((e, index) => {
          return (
            <NavLink
              key={index}
              to={e.path}
              className={({ isActive }) =>
                `flex items-center gap-2 transition-colors duration-300 ${
                  isActive
                    ? "text-brand-gold font-bold"
                    : "text-white hover:text-brand-light"
                }`
              }
              onClick={() => {
                setOpen(false), scrollTo(0, 0);
              }}
            >
              {e.icon}
              {e.title}
              {e.title === "Cart" && totalCourses > 0 && isLoggedIn && (
                <span className="bg-brand-gold text-brand-navy text-xs px-2 py-0.5 rounded-full font-bold">
                  {totalCourses}
                </span>
              )}
            </NavLink>
          );
        })}

        {/* LOGIN BUTTON */}

        {!isLoggedIn ? (
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `bg-brand-purple px-10 py-3 rounded-full shadow-lg
          ${isActive ? "text-brand-gold" : "text-white"}
          `
            }
          >
            Login
          </NavLink>
        ) : (
          <>
            <span
              className="flex items-center gap-2 bg-white/50 
              backdrop-blur-sm border border-brand-purple/20 
              px-4 py-1.5 rounded-2xl shadow-sm text-sm text-white"
            >
              {userName.slice(0, 8)}
            </span>
            <MainButton
              btnTitle="Logout"
              onClick={() => {
                setOpen(false);
                onOpenLogout();
              }}
              className="bg-white/50  text-white font-normal py-1.5! hover:bg-brand-purple"
            />
          </>
        )}

        <IoMdClose
          onClick={() => setOpen(false)}
          className="w-8 h-8 mt-10 text-white cursor-pointer 
          duration-300 hover:text-brand-gold"
        />
      </div>
    </div>
  );
};

export default NavBarMenu;
