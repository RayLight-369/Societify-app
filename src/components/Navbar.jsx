import { NavLinks } from "@/constants";
import { useUser } from "@/Contexts/IsAuthenticated";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const { user, setUser } = useUser();
  return (
    <>
      <header className="sticky min-h-[60px] bg-foreground text-background flex items-center justify-between px-8 py-1">
        <div>
          <p>LOGO</p>
        </div>
        <nav className="flex gap-10 text-sm">
          {NavLinks.map((route, i) => {
            <NavLink to={route.link} key={i}>
              {route.name}
            </NavLink>;
          })}
          {user ? (
            <NavLink to="#" onClick={(e) => {
              e.preventDefault();
              sessionStorage.removeItem("user");
              localStorage.removeItem("user");
              setUser(null);
            }}>Sign Out</NavLink>
          ) : (
            <NavLink to="/sign-in">Sign In</NavLink>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
