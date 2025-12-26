import { NavLink } from "react-router-dom";
import { navLinksData } from "../../data/navLinksData";
import NavBarMenu from "./NavBarMenu";
import { useCart } from "../../context/CartContext";
import MainButton from "../MainButton";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import ConfirmModalComponent from "../ConfirmModalComponent";
import toast from "react-hot-toast";

const NavBar = () => {
  const { totalCourses } = useCart();
  const { isLoggedIn, userName, logout } = useAuth();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);

  return (
    <div>
      <nav
        className="fixed z-9999 w-full h-12 md:h-16 lg:h-20 main-padding
     bg-white/90 backdrop-blur-md border-b border-brand-light 
     flex justify-between items-center  shadow-lg"
      >
        {/* LOGO */}
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-brand-navy">
          Pro<span className="text-brand-purple">Courses</span>
        </h1>

        {/* LINKS */}
        <div className="text-sm lg:text-base hidden md:flex gap-5 lg:gap-6 xl:gap-10 items-center font-medium text-brand-navy">
          {navLinksData.map((e, index) => (
            <NavLink
              key={index}
              to={e.path}
              onClick={() => scrollTo(0, 0)}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive
                    ? "text-brand-purple border-b-2 border-brand-purple font-bold"
                    : "hover:text-brand-purple transition-colors"
                }`
              }
            >
              {e.icon}
              {e.title}
              {e.title === "Cart" && totalCourses > 0 && isLoggedIn && (
                <span
                  className="bg-brand-gold text-brand-navy text-xs px-2 py-0.5
            max-lg:mb-0.5 rounded-full font-bold"
                >
                  {totalCourses}
                </span>
              )}
            </NavLink>
          ))}

          {!isLoggedIn ? (
            <NavLink
              onClick={() => scrollTo(0, 0)}
              to="/login"
              className={({ isActive }) => `
              bg-brand-navy py-1.5 px-4 rounded-full hover:bg-brand-purple transition-all shadow-md
              ${isActive ? "text-brand-gold" : "text-white"}`}
            >
              Login
            </NavLink>
          ) : (
            <>
              <span
                className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-brand-purple/20 
            px-4 py-1.5 rounded-2xl shadow-sm text-sm font-bold text-brand-navy"
              >
                {userName.slice(0, 8)}
              </span>
              <MainButton
                onClick={() => {
                  setShowLogoutConfirm(true), logout;
                }}
                btnTitle="Logout"
                className="bg-brand-navy text-white font-normal py-1.5! hover:bg-brand-purple"
              />
            </>
          )}
        </div>

        {/* MENU FOR SMALL SCREENS */}
        <div className="block md:hidden text-brand-navy">
          <NavBarMenu onOpenLogout={() => setShowLogoutConfirm(true)} />
        </div>
      </nav>

      {/* MODAL TO CONFIRM LOGOUT */}
      <ConfirmModalComponent
        title="Confirm Logout"
        desc="Are you sure you want to logout?"
        isOpen={showLogoutConfirm}
        onCancel={() => setShowLogoutConfirm(false)}
        onConfirm={() => {
          logout();
          setShowLogoutConfirm(false);
          toast.success(`Goodbye ${userName}, see you next time!`, {
            duration: 10000,
            icon: "👋",
          });
        }}
        confirmText="Logout"
        cancelText="Cancel"
      />
    </div>
  );
};

export default NavBar;
