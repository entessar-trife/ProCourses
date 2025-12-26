import { useNavigate } from "react-router-dom";

interface MainButtonProps {
  type?: "button" | "submit" | "reset";
  btnTitle: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const MainButton = ({
  btnTitle,
  className,
  href,
  onClick,
  disabled,
  type = "button",
}: MainButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    scrollTo(0, 0);
    if (onClick) onClick();
    if (href) navigate(href);
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`py-2.5 px-6 bg-brand-gold text-brand-navy rounded-full 
        transition-all duration-300 font-bold shadow-sm cursor-pointer
        ${className}`}
    >
      {btnTitle}
    </button>
  );
};

export default MainButton;
