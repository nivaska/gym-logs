const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");
const dailyLog = require("./models/dailyLog");
const service = require("./service");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res, next) => {
  res.send("Available");
});

app.use(service);

app.use((req, res, next) => {
  res.status(404).send("Not found");
});

sequelize
  .sync()
  .then((result) => {
    app.listen(3001, () => {
      console.log("running on port 3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
