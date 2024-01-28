import mongoose, { Schema } from "mongoose";

let Drink;

if (mongoose.models.Drink) {
  Drinks = mongoose.model("Drinks");
} else {
  const drinkSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
  });
  Drink = mongoose.model("Drinks", drinkSchema);
}

export default Drink;
