const express = require("express");
require("dotenv").config();
const userRoute = require("./route/userRoute")

const db = require("./config/db");

db();

const app = express();

const PORT = process.env.PORT || 5000;


//middleware
app.use(express.json());
app.use("/v2/users", userRoute)

app.get("/", (req, res) => {
  res.json("Welcome to our api")
});

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
