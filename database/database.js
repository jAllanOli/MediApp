import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/medi-app");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", () => {
  console.log("Connected to the database");
});

export default db;
