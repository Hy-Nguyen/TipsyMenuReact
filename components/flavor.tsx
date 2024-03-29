import React from "react";

type FlavorProps = {
  flavor: string; // or other appropriate type
  description: string; // or other appropriate type
  spacer: boolean; // or other appropriate type
};

export default function Flavor({ flavor, description, spacer }:FlavorProps) {
  return (
    <div className="w-full relative text-center py-2">
      <div className="">
        <h1 className=" text-xl">{flavor}</h1>
      </div>
      <div>
        <p className="italic text-sm py-1">
          {description}
        </p>
      </div>
      {spacer === true && (
        <div className="absolute w-full h-0.5 bg-amber-300 mt-2"></div>
      )}
    </div>
  );
}

