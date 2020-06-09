const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost/notes-app";

//Models
const User = require("./models/User");
const Note = require("./models/Notes");

class Controller {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.info("Connected to DB");
    } catch (err) {
      console.log(err);
    }
  }

  //Queries
  addUser(res, data) {
    User.create(data, (err, newUser) => {
      if (err) throw err;
      res.json({
        status: 200,
        message: "Created",
        user: newUser,
      });
    });
  }
}

exports.db = new Controller();
