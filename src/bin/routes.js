const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Settings
app.use(bodyParser.json());

const { db } = require("./db");

//Routes
app.post("/api/users", (req, res) => {
  let data = req.body;
  db.addUser(res, data);
});

exports.app = app;
