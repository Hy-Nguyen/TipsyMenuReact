import mongoose, { Schema } from "mongoose";

let Sauce;

if (mongoose.models.Sauce) {
  Sauce = mongoose.model("Sauce");
} else {
  const sauceSchema = new Schema({
    name: String,
    description: String,
    spacer: Boolean,
  });

  Sauce = mongoose.model("Sauce", sauceSchema);
}

export default Sauce;
