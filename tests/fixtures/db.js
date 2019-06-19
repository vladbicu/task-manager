const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../src/models/user");
const Task = require("../../src/models/task");

const userOneID = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneID,
  name: "One",
  email: "one@example.com",
  password: "testone23!!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneID }, process.env.JWT_SECRET)
    }
  ]
};

const userTwoID = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoID,
  name: "Two",
  email: "two@example.com",
  password: "test1two3!!",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoID }, process.env.JWT_SECRET)
    }
  ]
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: "Task one",
  completed: false,
  owner: userOneID
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: "Task two",
  completed: true,
  owner: userOneID
};

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: "Task three",
  completed: false,
  owner: userTwoID
};

// used in beforeEach to wipe all DB data and start from a clean state
const setupDatabase = async () => {
  await User.deleteMany(); // wipe all user data from database
  await Task.deleteMany(); // wipe all tasks from database
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  userOneID,
  userOne,
  userTwoID,
  userTwo,
  taskOne,
  setupDatabase
};
