const express = require("express");
require("./db/mongoose");

// Routers
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use("/api", express.json());
app.use("/api", userRouter);
app.use("/api", taskRouter);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "public")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}

module.exports = app;
