import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import { ShiftLogo } from "@/components/commons/Logo";

import { menuLinkArrowVariants, menuLinkVariants, menuVariants } from "./NavFramerConfig";

const FlipNav = () => {
  return (
    <nav className="w-[90%] mx-auto pt-4 border-gray-200 flex items-center justify-between bg-transparent fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      <NavLeft />
      <NavRight />
      <NavMenu />
    </nav>
  );
};

const NavLeft = () => {
  return (
    <div>
      <ShiftLogo />
    </div>
  );
};

const NavLink = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-black font-bold">{text}</span>
        <span className="flex items-center h-[30px] text-black font-bold">{text}</span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <NavLink text="Home" />
      <NavLink text="Services" />
      <NavLink text="Projects" />
      <NavLink text="About us" />
      <NavLink text="Contact" />
    </div>
  );
};

const NavMenu = () => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Home" />
      <MenuLink text="Services" />
      <MenuLink text="Projects" />
      <MenuLink text="About us" />
      <MenuLink text="Contact" />
    </motion.div>
  );
};

const MenuLink = ({ text }: { text: string }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">{text}</span>
      </motion.div>
    </motion.a>
  );
};

const Nav = () => {
  return <FlipNav />;
};

export default Nav;
