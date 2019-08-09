const express = require("express");
const path = require("path");
require("./db/mongoose");

// Routers
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use("/api", express.json());
app.use("/api", userRouter);
app.use("/api", taskRouter);

app.use(express.static(path.join(__dirname, "../public")));

// Handle React routing, return all requests to React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
}

module.exports = app;
