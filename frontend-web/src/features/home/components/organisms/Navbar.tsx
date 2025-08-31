import React from "react";
import Logo from "../../../../shared/components/Logo";
import NavbarMenu from "../molecules/NavbarMenu";
import NavbarIcons from "../molecules/NavbarIcons";
import { Menu } from "lucide-react";
import IconButton from "../../../../shared/components/IconButton";
import { HiShoppingCart } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const Navbar:React.FC = () => {
  return (
    <nav className="flex relative md:justify-between justify-center items-center px-4 lg:px-24 py-4 bg-black">
      {/* Logo */}
      <Logo />

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <NavbarMenu />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center">
        {/* Desktop Icons */}
        <div className="hidden md:flex">
          <NavbarIcons />
        </div>

        {/* Mobile Icons */}
        <div className="absolute right-4 flex md:hidden items-center">
          <IconButton icon={HiShoppingCart} />
          <IconButton icon={IoSearch} />
          <IconButton icon={Menu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
