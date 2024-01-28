import mongoose, { Schema } from "mongoose";

let AddOn;

if (mongoose.models.AddOn) {
  AddOn = mongoose.model("AddOn");
} else {
  const AddOnSchema = new Schema({
    name: String,
    price: Number,
  });

  AddOn = mongoose.model("AddOn", AddOnSchema);
}

export default AddOn;