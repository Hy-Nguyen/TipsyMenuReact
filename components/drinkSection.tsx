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
  const drinkSec = await getDrinks(
    category.toLowerCase()
  );
  return (
    <>
      <Header text={title} />

      {drinkSec.map((drink: any) => (
        <MenuItem
          key={drink._id}
          title={drink.name}
          description={drink.description}
          price={drink.price}
        />
      ))}
    </>
  );
}
