const express = require("express");
require("./db/mongoose");

// Routers
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    // called internally by multer
    // cb accepts two params 1. error and 2. a boolean that is the result of verification
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please upload a Word Document"));
    }

    cb(undefined, true);
  }
});

// new upload endpoint with multer middleware
app.post("/upload", upload.single("upload"), async (req, res) => {
  res.send();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port ", port);
});
