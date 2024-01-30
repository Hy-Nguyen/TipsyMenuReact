import mongoose, { Schema } from "mongoose";

let Pregame;

if (mongoose.models.Pregame) {
  Pregame = mongoose.model("Pregame");
} else {
  const pregameSchema = new Schema({
    url: String,
    name: String,
    price: Number,
    description: String,
  });

  Pregame = mongoose.model("Pregame", pregameSchema);
}

export default Pregame;
