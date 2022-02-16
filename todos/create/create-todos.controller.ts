import { Request, Response } from "express";
import { ITodo } from "../../interfaces/ITodos";
import { createTodo } from "./create-todos";

export async function createTodosController(req: Request, res: Response) {
  try {
    const newTodo: ITodo = await createTodo(req.body);
    res.send(newTodo);
  } catch (err) {
    console.error(err);
    res.send(500, { message: "something doesnt work" });
  }
}
