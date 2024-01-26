import React from "react";
import Image from "next/image";

function MenuItemSmall() {
  // {url, title, description, price}
  let url: string = "cornCheese.jpg",
    title: string = "Corn Cheese",
    description: string =
      "CHHEEESSSEEEE + CORRRNNNN",
    price: number = 19.99;

  return (
    <div className="lg:w-96 lg:m-auto max-w w-full flex flex-col justify-center py-2">
      <div
        className="h-32 flex-none bg-cover rounded-t-xl 
             text-center overflow-hidden "
        style={{
          backgroundImage: `url('/img/${url}')`,
        }}
        title=""
      ></div>
      <div
        className="border-r border-b border-l  
                lg:border-l-0 lg:border-t  bg-black 
                rounded-b-xl p-4 flex flex-col 
                justify-between leading-normal"
      >
        <div className="mb-2">
          <div className=" text-amber-400 font-bold text-xl mb-2">
            {title}
          </div>
          <p className=" text-amber-200 text-base mb-2">
            {description}
          </p>

          <div className="flex items-center">
            <div className="">
              <p className="text-amber-400 leading-none">
                ${price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemSmall;
