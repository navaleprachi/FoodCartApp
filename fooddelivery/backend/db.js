const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://foodApp:iPhone12pro%40@foodapp.l2aufk9.mongodb.net/foodCart?retryWrites=true&w=majority&appName=foodApp";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected successfully!");

    const collection = mongoose.connection.db.collection("food_items");
    const data = await collection.find({}).toArray();

    // console.log("Fetched Food Items:", data);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the app if DB connection fails
  }
};

module.exports = mongoDB;
