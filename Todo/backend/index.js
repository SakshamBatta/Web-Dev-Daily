const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    return res.status(411).json({
      msg: "You have sent the wrong inputs",
    });
  }
});
