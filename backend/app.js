const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const linkServiceRoutes = require('./routes/linkServices')
const userRoutes = require('./routes/user')

require("dotenv").config();
// CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
app.use("/api",linkServiceRoutes)
app.use("/api",userRoutes)

// PORT
const port = process.env.PORT || 8000;

// STARTING A SERVER
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
