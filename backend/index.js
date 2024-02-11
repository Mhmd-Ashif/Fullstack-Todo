const express = require("express");
const cors = require("cors");
// const z = require("zod");
const { PostTodo, UpdateTodo } = require("./types");
const { todo } = require("./Database/db");
const app = express();

app.use(cors({
  origin : ["https://fullstack-todo-orcin.vercel.app/"],
  methods : ["POST","GET"],
  credentials : true
}));
app.use(express.json());

app.post("/todo", async (req, res) => {
  const input = PostTodo.safeParse(req.body);
  if (input.success) {
    await todo.create({
      title: input.data.title,
      description: input.data.description,
      completed: input.data.completed,
    });
    res.status(200).json("inserted into mongo db");
  } else {
    res.status(411).json("Oops Input seems to wrong");
  }
});

app.get("/todos", async (req, res) => {
  const allTodos = await todo.find({});
  res.status(200).json(allTodos);
});

app.put("/completed", async (req, res) => {
  const input = UpdateTodo.safeParse(req.body);
  if (input.success) {
    try {
      await todo.updateOne(
        {
          _id: input.data.id,
        },
        { completed: true }
      );
      res.status(200).json("updated todo");
    } catch (err) {
      res.json({ msg: "incorrect object id or todo may not exist" });
    }
  } else {
    res.status(411).json("Oops Input seems to wrong");
  }
});

app.listen(3000);
