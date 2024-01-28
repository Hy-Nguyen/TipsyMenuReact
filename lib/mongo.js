import mongoose from "mongoose";

export default async function connectMongoDB() {
  const uri =
    "mongodb+srv://vercel-admin-user:h5h32CUHOASOwwk5@cluster0.1fu34kg.mongodb.net/TipsyMenu?retryWrites=true&w=majority";
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
    await mongoose.connect(uri, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
