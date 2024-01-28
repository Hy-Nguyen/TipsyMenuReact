import React, { cache } from "react";
import Header from "./header";
import Flavor from "./flavor";
import { getSauces } from "@/lib/middleware";

export default async function Sauces() {
  const sauceList = await getSauces();

  return (
    <>
      <Header text="Sauces" />
      <div className=" mx-4">
        {sauceList.map((s: any) => (
          <Flavor
            key={s._id}
            flavor={s.name}
            description={s.description}
            spacer={true}
          />
        ))}
      </div>
    </>
  );
  return <></>;
}
