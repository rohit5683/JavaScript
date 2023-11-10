//Import Statement
const express = require("express");

//Express Object
const app = express();

//Middleware
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

//Listening
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
