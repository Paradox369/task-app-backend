const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "add a task"],
        },
        author: {
            type: String,
            default: "anoyymous",
        },
        completed: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
