import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const conSting = "mongodb://localhost:27017/not_to_do_list";
    const con = mongoose.connect(conSting);

    con && console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
