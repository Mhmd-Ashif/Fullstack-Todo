const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect(
  "mongodb+srv://mohamedashif18se:ashif123@cluster0.6bj0hal.mongodb.net/todo-app"
);

const TodoSchema = new Schema({
  title: String,
  description: String,
  completed: { type: Boolean, default: false },
});

const todo = mongoose.model("todo", TodoSchema);

module.exports = {
  todo,
};
