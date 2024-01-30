import mongoose, { Schema } from "mongoose";

let PartyOn;

if (mongoose.models.PartyOn) {
  PartyOn = mongoose.model("PartyOn");
} else {
  const PartyOnSchema = new Schema({
    url: String,
    name: String,
    price: Number,
    description: String,
  });

  PartyOn = mongoose.model(
    "PartyOn",
    PartyOnSchema
  );
}

export default PartyOn;
