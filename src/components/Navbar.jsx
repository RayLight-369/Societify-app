import { NavLinks } from "@/constants";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky min-h-[60px] bg-foreground text-background flex items-center justify-between px-8 py-1">
      <div>
        <p>LOGO</p>
      </div>
      <nav>
        {NavLinks.map((route, i) => (
          <NavLink to={route.link} key={i}>
            {route.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
