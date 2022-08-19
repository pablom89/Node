const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const NotFound = require("./middleware/NotFound");
const errorHandlerMiddleware  = require("./middleware/error-handler");

require("dotenv").config();

///// middleware
app.use(express.static("./public"));
app.use(express.json());

///// routes
app.use("/api/v1/tasks", tasks);

app.use(NotFound);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("listen on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
