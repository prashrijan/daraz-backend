import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/daraz`
    );

    connection && console.log("Database is successfully connected.");
  } catch (error) {
    console.error(`There was an error connecting to the database. ${error}`);
  }
};

export default dbConnection;
