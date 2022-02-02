import { Request, Response } from "express";
import { ITodo } from "../../interfaces/ITodos";
import { createTodo } from "./create-todos";

export async function createTodosController(req: Request, res: Response) {
  const newTodo: ITodo = await createTodo(req.body);
  res.send(newTodo);
}
