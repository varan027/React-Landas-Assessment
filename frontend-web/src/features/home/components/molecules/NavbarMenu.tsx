import React from "react";
import NavLink from "../../../../shared/components/NavLink";

const NavbarMenu = () => {
  const items = ["SS", "FW", "PANTS", "T-Shirt", "SALE", "COLLECTION", "COMMUNITY"];

  return (
    <div className="flex xl:space-x-10 duration-100 transition-all">
      {items.map((item, idx) => (
        <NavLink key={idx} label={item} />
      ))}
    </div>
  );
};

export default NavbarMenu;
