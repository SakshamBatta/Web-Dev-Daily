const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sakshambatta20:bxlUTmtOJruHnEcg@cluster0.vp8t9qr.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = todo;
