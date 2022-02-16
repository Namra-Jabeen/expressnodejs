import { Request, Response } from "express";
import { updateTodo } from "./update-todos";

export async function updateTodoController(req: Request, res: Response) {
  try {
    const success: { message: string } = await updateTodo(req.body);
    res.send(success);
  } catch (err) {
    console.error(err);
    res.send(500, { message: "failed" });
  }
}
