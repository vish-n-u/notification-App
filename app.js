const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const serverConfig = require("./configs/server.config");
const { default: mongoose } = require("mongoose");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).send("code Successful");
});

mongoose.connect(serverConfig.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
  console.log("Some err while connecting to db");
});
db.once("open", () => {
  console.log("connected");
});

require("./route/notification.route")(app);

require("./schedulers/email.scheduler");
app.listen(
  serverConfig.PORT,
  () => {
    console.log("Listening");
  },
  (err) => {
    console.log(err);
  }
);
