import React from "react";
import Image from "next/image";
import Flavor from "./flavor";
import Header from "./header";

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

            <div className=" mx-6">
                <Header text="Sauces" />
                <div className=" mx-4">
                    <Flavor flavor="Original"
                        description="Crispy, savory & classic. Can't go wrong!"
                        spacer={true}/>
                    <Flavor flavor="Soy & Garlic"
                        description="Garlic-y & savory. Hits the spot!"
                        spacer={true}/>
                    <Flavor flavor="Sweet & Spicy"
                        description="Classic sweet & spicy from our signature sauce."
                        spacer={true}/>
                    <Flavor flavor="Sweet Fish Sauce Glaze"
                        description="A tangy and savory glaze on a perfect crunch. Feeling adventurous?"
                        spacer={false}/>
                </div>
            </div>

        </div>
    )
}
export default Chicken;