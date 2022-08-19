const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const NotFound = require("./middleware/NotFound");
require("dotenv").config();

///// middleware
app.use(express.static("./public"));
app.use(express.json());

///// routes
app.use("/api/v1/tasks", tasks);

app.use(NotFound);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("listen on port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
