import { getPartyOn } from "@/lib/middleware";
import MenuItem from "./menuitem";

export default async function PartyOn() {
  const partyon = await getPartyOn();

  return (
    <>
      {partyon.map((p: any) => (
        <MenuItem
          key={p._id}
          title={p.name}
          description={p.description}
          price={p.price}
        />
      ))}
    </>
  );
}