import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  todo: [
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["todo", "inprogress", "closed"],
        default: "todo",
      },
    },
  ],
});

const TaskModal = mongoose.model("Task", taskSchema);

export default TaskModal;
