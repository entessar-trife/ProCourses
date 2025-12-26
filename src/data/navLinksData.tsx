import type { JSX } from "react";
import { FaCartShopping } from "react-icons/fa6";

interface navLinksData {
  icon?: JSX.Element;
  title: string;
  path: string;
}

export const navLinksData: navLinksData[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    path: "/courses",
  },
  {
    icon: <FaCartShopping className="w-4 h-4" />,
    title: "Cart",
    path: "/cart",
  },
];
