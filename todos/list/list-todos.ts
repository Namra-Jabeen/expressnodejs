import { todos } from "../../data";
import { ITodo } from "../../interfaces/ITodos";

export async function listTodos(): Promise<ITodo[]> {
  return Promise.resolve(todos);
}
