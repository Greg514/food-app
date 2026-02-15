const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/connectDb");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

connectDb();

app.use(cors({
  origin: "http://localhost:5173", // change if your frontend runs elsewhere
  credentials: true
}));

app.use(express.json());

app.use("/", require("./routes/user"));
app.use("/", require("./routes/recipe"));


app.get("/", (request, response) => {
  response.send("API is running");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
