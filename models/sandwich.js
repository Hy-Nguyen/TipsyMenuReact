import mongoose, { Schema } from "mongoose";

let Sandwich;

if (mongoose.models.Sandwich) {
  Sandwich = mongoose.model("sandwiches");
} else {
  const SandwichSchema = new Schema({
    url: String,
    name: String,
    price: Number,
    description: String,
  });

  Sandwich = mongoose.model(
    "sandwiches",
    SandwichSchema
  );
}

export default Sandwich;
