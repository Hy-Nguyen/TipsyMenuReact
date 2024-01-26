import React from "react";

import Header from "./header";

function Pieces() {
  return (
    <>
      <Header text="Quantity" />
      <div className="grid grid-cols-2 text-center">
        <div>
          <h1 className="my-4">Size</h1>
          <ul className="">
            <li>7 Pieces</li>
            <li>14 Pieces</li>
            <li>21 Pieces</li>
          </ul>
        </div>
        <div>
          <h1 className="my-4">Price</h1>
          <ul>
            <li>$14.25</li>
            <li>$26.25</li>
            <li>$39.25</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>BONELESS: $00.50 Extra</p>
      </div>
    </>
  );
}

export default Pieces;
