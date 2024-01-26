import React from "react";
import Header from "./header";
import Flavor from "./flavor";

function Sauces() {
  return (
    <>
      <Header text="Sauces" />
      <div className=" mx-4">
        <Flavor
          flavor="Original"
          description="Crispy, savory & classic. Can't go wrong!"
          spacer={true}
        />
        <Flavor
          flavor="Soy & Garlic"
          description="Garlic-y & savory. Hits the spot!"
          spacer={true}
        />
        <Flavor
          flavor="Sweet & Spicy"
          description="Classic sweet & spicy from our signature sauce."
          spacer={true}
        />
        <Flavor
          flavor="Sweet Fish Sauce Glaze"
          description="A tangy and savory glaze on a perfect crunch. Feeling adventurous?"
          spacer={false}
        />
      </div>
    </>
  );
}

export default Sauces;
