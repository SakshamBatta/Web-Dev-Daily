const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const { createTodo } = require("./types");

app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  try {
    let connect = await db.getConnection();
    const [todos, _] = await connect.query("Select * from todos");

    if (todos.length === 0 || todos.length < 0) {
      return res.status(400).json({
        msg: "Unable to fetch todos at the moment",
      });
    }
    return res.status(200).json({
      todos,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  try {
    let connect = await db.getConnection();
    const addPayload = req.body;
    const payload = createTodo.safeParse(addPayload);
    if (!payload.success) {
      return res.status(400).json({
        msg: "Wrong Inputs Entered",
      });
    }
    const [insert, _] = await connect.query(
      "Insert into todos (title, description) values(?,?)",
      [addPayload.title, addPayload.description]
    );
    if (insert.affectedRows == 0 || insert.affectedRows < 0) {
      return res.status(400).json({
        msg: "Unable to insert a todo",
      });
    }
    res.status(200).json({
      msg: "Todo inserted Successully",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is starting at port no 3000");
});
