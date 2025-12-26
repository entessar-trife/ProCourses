import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import MainButton from "../components/MainButton";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  // FUNCTION TO HANDLE LOGIN
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (userInfo.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    window.dispatchEvent(new Event("storage"));
    login(userInfo.name);
    toast.success(`Welcome back, ${userInfo.name}`, {
      duration: 3000,
      icon: "👋",
    });
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center pt-12 md:pt-16 lg:pt-20
     bg-brand-gray px-4"
    >
      <motion.div
        {...fadeInUp}
        className="max-w-md w-full p-6 md:p-10 bg-white rounded-3xl shadow-2xl border border-brand-light/20"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-brand-navy mb-2">
            Welcome
          </h2>
          <p className="text-slate-400 text-sm">
            Login to access your courses and cart
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* NAME INPUT */}
          <div>
            <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2 ml-1">
              Name
            </label>
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              placeholder="Your Name"
              className="w-full px-2 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-brand-light focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all text-brand-navy"
            />
          </div>

          {/* EMAIL INPUT */}
          <div>
            <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2 ml-1">
              Email Address
            </label>
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              placeholder="example@prokoders.com"
              className="w-full px-2 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-brand-light focus:border-brand-purple 
              focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all text-brand-navy"
            />
          </div>

          {/* PASSWORD INPUT */}
          <div>
            <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
                placeholder="••••••••"
                className="w-full px-2 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-brand-light focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all text-brand-navy"
              />
              {userInfo.password.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold cursor-pointer
                  ${
                    userInfo.password.length > 0
                      ? "text-brand-navy"
                      : "text-gray-300"
                  }`}
                >
                  {showPassword ? (
                    <FaRegEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaRegEye className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* SIGN IN BUTTON */}
          <MainButton
            type="submit"
            btnTitle="Sign In"
            className="w-full hover:scale-105"
          />
        </form>
        {error !== "" && (
          <div className="w-full text-center mt-5">
            <span className="tracking-wider text-red-600 font-semibold">
              {error}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LoginPage;
