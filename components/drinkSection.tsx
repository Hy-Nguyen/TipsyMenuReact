import MenuItem from "./menuitem";
import Header from "./header";
import { getDrinks } from "@/lib/middleware";

export default async function DrinkSection({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  let drinkSec: any;
  drinkSec = await getDrinks(
    category.toLowerCase()
  );
  return (
    <>
      <Header text={title} images={false} />

      {drinkSec.map((drink: any) => (
        <MenuItem
          key={drink._id}
          title={drink.name}
          description={drink.description}
          price={drink.price}
          url=""
        />
      ))}
    </>
  );
}
