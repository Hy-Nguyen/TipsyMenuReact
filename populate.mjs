import mongoose, { Schema } from "mongoose";

let Sauce;
let Sandwich;
let Pregame;
let PartyOn;

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

if (mongoose.models.Pregame) {
  Pregame = mongoose.model("Pregame");
} else {
  const pregameSchema = new Schema({
    url: String,
    name: String,
    price: Number,
    description: String,
  });

  Pregame = mongoose.model(
    "Pregame",
    pregameSchema
  );
}

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

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
try {
  await mongoose.connect(
    "mongodb+srv://vercel-admin-user:h5h32CUHOASOwwk5@cluster0.1fu34kg.mongodb.net/TipsyMenu?retryWrites=true&w=majority",
    options
  );
  // Mongoose connection states: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (
    mongoose.connection.readyState === 1 ||
    mongoose.connection.readyState === 2
  ) {
    console.log(
      "Already connected or connecting"
    );
  }
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}
async function updateSchema(Schema, name) {
  try {
    let ids;
    console.log(`For Schema ${name}`);
    await Schema.find({}, "_id").then(
      async (docs) => {
        ids = docs.map((doc) =>
          doc._id.toString()
        );
        console.log(ids);

        // Update operation
        await Schema.updateOne(
          { _id: "65b59e27d21b3a4eb5d6787a" }, // condition to match the ids
          { $set: { spacer: false } } // setting spacer for each of the matched documents as true
        );
      }
    );
    console.log(await Schema.find({}));
  } catch (error) {
    console.log(error);
  }
}
await updateSchema(Sauce, "Sauce");
// await updateSchema(Sandwich, "Sandwich");
// await updateSchema(Pregame, "Pregame");
// await updateSchema(PartyOn, "PartyOn");

// // Note: Disconnect once all operations are done.
await mongoose.disconnect();
// console.log("Disconnected from the database");
