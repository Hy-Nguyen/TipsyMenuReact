export async function getSauces() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/sauce",
      { cache: "no-store" }
    );

    const sauces = await res.json();
    if (!res.ok) {
      throw new Error("Failed to load");
    }

    return sauces;
  } catch (error) {
    console.log(error);
  }
}

export async function getChicken() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/chicken",
      { cache: "no-store" }
    );

    const chicken = await res.json();
    if (!res.ok) {
      throw new Error("Failed to load");
    }
    return chicken[0];
  } catch (error) {
    console.log(error);
  }
}
export async function getPreGame() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/pregame",
      { cache: "no-store" }
    );

    const pregame = await res.json();
    if (!res.ok) {
      throw new Error("Failed to load");
    }
    return pregame;
  } catch (error) {
    console.log(error);
  }
}
export async function getPartyOn() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/partyon",
      { cache: "no-store" }
    );

    const partyon = await res.json();
    if (!res.ok) {
      throw new Error("Failed to load");
    }
    return partyon;
  } catch (error) {
    console.log(error);
  }
}
export async function getDrinks() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/drinks",
      { cache: "no-store" }
    );

    const drinks = await res.json();
    if (!res.ok) {
      throw new Error("Failed to load");
    }
    return drinks;
  } catch (error) {
    console.log(error);
  }
}
