
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/connectDb");

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();


app.use(express.json()); // parse JSON request bodies
app.use(cors()); // allow requests from frontend


app.use("/recipe", require("./routes/recipe"));


app.get("/", (req, res) => {
  res.send("API is running");
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
