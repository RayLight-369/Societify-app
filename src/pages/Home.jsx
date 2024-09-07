import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="w-screen h-fit min-h-screen relative top-0">
      <div
        id="hero-section"
        className="flex relative items-center px-8 h-[95vh] w-full bg-[linear-gradient(hsl(var(--foreground)/60%),hsl(var(--foreground)/60%)),url('/hero-bg.jpg')] bg-no-repeat bg-cover bg-center"
      >
        <div className="w-1/2 flex flex-col gap-5 relative -top-5">
          <h1 className="text-background font-extrabold text-5xl">
            Manage with ease, lead with peace.
          </h1>
          <p className="text-background/90">
            Effortlessly manage, keep your group in line; Our app makes society
            management simply fine.
          </p>
          <Link
            to={"/dashboard"}
            className={cn(buttonVariants(), "w-fit px-7")}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
