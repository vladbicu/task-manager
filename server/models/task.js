const mongoose = require("mongoose");
const validator = require("validator");
const moment = require("moment");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    dueDate: {
      type: Number,
      validate(value) {
        if (!moment(value).isValid()) {
          throw new Error("Date is not valid");
        }
      }
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User" // create a relationship between owner property and User collection
    }
  },
  {
    timestamps: true
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
