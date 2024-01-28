import mongoose, { Schema } from "mongoose";

let Chicken;

if (mongoose.models.Chicken) {
  Chicken = mongoose.model("Chicken");
} else {
  const order = new Schema({
    quantity: Number,
    price: Number,
  });

  const chickenSchema = new Schema({
    bone_in: [order],
    boneless: [order],
  });

  Chicken = mongoose.model(
    "Chicken",
    chickenSchema
  );
}

export default Chicken;
