import connectMongoDB from "./mongo";
import PartyOn from "@/models/partyon";
import Sauce from "@/models/sauce";
import Chicken from "@/models/chicken";
import Pregame from "@/models/pregame";
import Drinks from "@/models/drinks";

export async function getSauces() {
  try {
    await connectMongoDB();
    const sauce = await Sauce.find();
    return sauce;
  } catch (error) {
    console.log(error);
  }
}

export async function getChicken() {
  try {
    await connectMongoDB();
    const chicken = await Chicken.find();
    // console.log(chicken[0]._id)
    // console.log(chicken[0].boneless)
    // console.log(chicken[0].bone_in[0].price)
    // console.log(chicken[0].bone_in[1].price)
    return chicken[0];
  } catch (error) {
    console.log(error);
  }
}
export async function getPreGame() {
  try {
    await connectMongoDB();
    const pregame = await Pregame.find();
    return pregame;
  } catch (error) {
    console.log(error);
  }
}

export async function getPartyOn() {
  await connectMongoDB();
  const partyOn = await PartyOn.find();
  return partyOn;
}
export async function getDrinks(category) {
  try {
    await connectMongoDB();
    let drinks;
    if (category) {
      drinks = await Drinks.find({
        category: category,
      });
    } else {
      drinks = await Drinks.find();
    }
    return drinks;
  } catch (error) {
    console.log(error);
  }
}
