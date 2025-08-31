import React from "react";

interface NavLinkProps {
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label }) => {
  return (
    <a
      href="#"
      className="text-white text-xs lg:text-sm font-medium px-4 hover:text-yellow-500 transition"
    >
      {label}
    </a>
  );
};

export default NavLink;
