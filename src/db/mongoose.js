const mongoose = require("mongoose");

const connectionUrl = process.env.MONGODB_URL;
const databaseName = "task-manager-api";

mongoose.connect(`${connectionUrl}/${databaseName}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
