const express = require("express");
const app = express();
const assetsRouter = require("./server/assets-router");

app.use("/src", assetsRouter);
app.use("/", (req, res) => {
  res.send("Welcome to User application");
});

app.listen(3000);
console.log("Server running at http://localhost:3000/");
