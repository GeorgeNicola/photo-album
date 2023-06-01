const app = require("express")();
const cors = require("cors");
const bodyParser = require("express").json;
const routes = require("./routes");

const connectMongoDB = require("./config/mongodb/mongoDB");
connectMongoDB();

// cors
app.use(cors());
// accepting post form data
app.use(bodyParser());
// registering routes
app.use(routes);

module.exports = app;
