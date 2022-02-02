import { todos } from "../../data";
import { ITodo } from "../../interfaces/ITodos";

export async function getTodo(id): Promise<ITodo> {
  for (let obj of todos) {
    if (obj.id == id) {
      return Promise.resolve(obj);
    }
  }
  return null;
}
