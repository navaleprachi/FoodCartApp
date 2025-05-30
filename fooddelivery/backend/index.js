const express = require("express");
const app = express();
const port = 4000;
const mongoDB = require("./db");

// mongoDB();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const startServer = async () => {
  await mongoDB(); // Ensure DB is connected before listening
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();
