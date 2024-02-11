const z = require("zod");
/*
{
  title : string
  description : string
}
{
  id : string
}
*/
const PostTodo = z.object({
  title: z.string(),
  description: z.string(),
});

const UpdateTodo = z.object({
  id: z.string(),
});

module.exports = {
  PostTodo,
  UpdateTodo,
};
