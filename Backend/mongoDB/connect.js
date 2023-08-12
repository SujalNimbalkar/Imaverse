import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); //usefull when working with search functionality

  mongoose
    .connect(url)
    .then(() => console.log("connect to mongoDB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

export default connectDB;
