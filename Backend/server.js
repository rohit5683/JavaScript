//Import Statement
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/userRoutes");

//dotenv configuration
dotenv.config();

//Express Object
const app = express();

//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Server</h1>");
});

app.use("/api/v1/", userRoutes);

//Listening
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
