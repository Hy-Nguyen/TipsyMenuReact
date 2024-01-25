import React from "react";
import Image from "next/image";

function Logo({width, height}) {
    return (
        <Image src="/img/logo.png" alt="Logo" width={width} height={height}/>
    )
}

export default Logo;