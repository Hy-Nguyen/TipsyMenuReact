import React from "react";

function MenuItem() {
  // {url, title, description, price}
  let url: string = "cornCheese.jpg",
    title: string = "Test",
    description: string =
      "CHHEEESSSEEEE + CORRRNNNN",
    price: number = 19.99;

  return (
    <div className="max-w w-full grid grid-cols-3 justify-center py-2">
      <div
        className="flex-none bg-cover rounded-l-xl 
               text-center overflow-hidden col-span-1"
        style={{
          backgroundImage: `url('/img/${url}')`,
        }}
        title=""
      ></div>

      <div
        className=" 
                  lg:border-l-0 lg:border-t  bg-slate-400 
                  rounded-r-xl py-4 px-2  
                  justify-between leading-normal
                  col-span-2"
      >
        <div className="mb-2 ">
          <div className="items-center flex flex-row font-bold text-lg mb-2 justify-between">
            <div className=" text-white-200 ">
              {title}
            </div>
            <div className="text-white-400 ">
              ${price}
            </div>
          </div>

          <p className=" text-gray-200 mb-2 mx-1 text-center text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default MenuItem;
