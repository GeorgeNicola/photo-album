const mongoose = require("mongoose");

function connectMongoDB() {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "album",
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
  });

  const db = mongoose.connection;
  // console.log("Connection Information: ", db);
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("Connected to Database"));
}

module.exports = connectMongoDB;
