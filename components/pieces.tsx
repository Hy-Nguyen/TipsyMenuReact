import React from "react";
import Header from "./header";
import { getChicken } from "@/lib/middleware";

export default async function Pieces() {
  const divRowClass = "w-1/3 px-4 py-1";
  const chicken = await getChicken();

  return (
    <>
      <div></div>
      <Header text="Quantity" />
      <div className="flex text-center">
        <div className={divRowClass}>Size</div>
        <div className={divRowClass}>Bone In</div>
        <div className={divRowClass}>
          Boneless
        </div>
      </div>
      {chicken.bone_in.map(
        (bone_in_item: any, i: number) => {
          const boneless = chicken.boneless[i];
          return (
          <div className="flex text-center" key={boneless._id}>
            <div className={divRowClass}>
              {boneless.quantity} pieces
            </div>
            <div className={divRowClass}>
              ${bone_in_item.price}
            </div>
            <div className={divRowClass}>
              ${boneless.price}
            </div>
          </div>
          )
        }
      )}
    </>
  );
}
