import React from "react";
import Image from "next/image";

type WidthProps = {
  width: number;
  height: number;
};

function Logo({ width, height }: WidthProps) {
  return (
    <Image
      src="/img/logo.png"
      alt="Logo"
      width={width}
      height={height}
    />
  );
}

export default Logo;
