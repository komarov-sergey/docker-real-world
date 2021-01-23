const express = require("express");

const { port, host, db } = require("./configuration");
const { connectDb } = require("./helpers/db");

const app = express();

app.get("/test", (req, res) => {
  res.send("Our authentication server is working correctly");
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started authentication service on ${port}`);
    console.log(`Our host is: ${host}`);
    console.log(`Database url: ${db}`);
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
