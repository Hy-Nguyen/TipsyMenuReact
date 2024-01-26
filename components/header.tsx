import React from "react";

function Header({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center relative text-center py-10  ">
      <div className="absolute w-full h-0.5 bg-amber-300 "></div>
      <span className="bg-black px-4 relative text-2xl text-amber-300 ptserif">
        {text}
      </span>
    </div>
  );
}

export default Header;
