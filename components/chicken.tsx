import React from "react";
import Image from "next/image";

function Chicken(){
    return(
        <div className="max-w w-full flex flex-col justify-center py-2">
            <div 
                className="h-96 flex-none bg-cover rounded-t-xl 
                 text-center overflow-hidden" 
                style={{backgroundImage: `url('/img/chicken3.jpg')`}}
                title=""
                >   
            </div>
        </div>
    )
}
export default Chicken;