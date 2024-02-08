import React from "react";

type ItemProps = {
  title: string;
  description: string;
  price: number;
  url: string;
};

function MenuItem({
  title,
  description,
  price,
  url,
}: ItemProps) {
  return (
    <>
      <div className="max-w w-full flex flex-col justify-center py-2">
        {url ? (
          <>
            

            <div
              className=" 
                  lg:border-l-0 lg:border-t
                  rounded-r-xl py-4 px-2  
                  justify-between leading-normal
                  "
            >
              <div className="mb-2 ml-2 ">
                <div className="items-center flex flex-row  text-md mb-2 justify-between">
                  <div className=" text-white-200 font-bold">
                    {title}
                  </div>
                  <div className="text-white-400 ">
                    ${price.toFixed(2)}
                  </div>
                </div>

                <p className=" text-gray-200 mb-2 mx-1 text-left text-xs">
                  {description}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className=" 
                  lg:border-l-0 lg:border-t
                  rounded-r-xl py-4 px-2  
                  justify-between leading-normal
                  col-span-3"
            >
              <div className="mb-2 ml-2 col-span-3">
                <div className="items-center flex flex-row  text-md mb-2 justify-between">
                  <div className=" text-white-200 font-bold">
                    {title}
                  </div>
                  <div className="text-white-400 ">
                    ${price.toFixed(2)}
                  </div>
                </div>

                <p className=" text-gray-200 mb-2 mx-1 text-left text-xs w-2/3">
                  {description}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default MenuItem;
