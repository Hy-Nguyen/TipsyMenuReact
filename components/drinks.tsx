import DrinkSection from "./drinkSection";

export default function Drinks() {

  const categories = [
    "Beer & Soju",
    "Soft drinks",
    "Cocktails",
    "Pitchers",
  ];

  return (
    <div>
      {categories.map((cat: string, i) => (
        <div className="mx-2" key={i}>
          <DrinkSection
            title={cat}
            category={cat.split(" ")[0]}
          />
        </div>
      ))}
    </div>
  );
}
