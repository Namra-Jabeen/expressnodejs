import { Request, Response } from "express";
import { ITodo } from "../../interfaces/ITodos";
import { updateTodo } from "./update-todos";

export async function updateTodoController(req: Request, res: Response) {
  const todo: ITodo = await updateTodo(req.body);
  if (todo == null) {
    res.send(`Todo ${req.body} not found`);
  }
  res.send(todo);
}
