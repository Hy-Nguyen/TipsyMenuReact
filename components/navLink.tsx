"use client";
import React from "react";

type NavProps = {
  section: string;
  title: string;
  description: string;
};

function NavLink({
  section,
  title,
  description = "",
}: NavProps) {
  return (
    <a
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        const sectionPosition =
          document.getElementById(
            section
          )?.offsetTop;
        window.scrollTo({
          top: sectionPosition - 100,
          behavior: "smooth",
        });
      }}
      className="inline-block px-2 py-2 lg:inline-block lg:mt-0 text-amber-950 hover:text-cyan-600 mr-4"
    >
      {title}
    </a>
  );
}

export default NavLink;
