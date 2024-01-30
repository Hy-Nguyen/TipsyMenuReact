import mongoose from "mongoose";

export default async function connectMongoDB() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Mongoose connection states: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (
    mongoose.connection.readyState === 1 ||
    mongoose.connection.readyState === 2
  ) {
    console.log(
      "Already connected or connecting"
    );
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
