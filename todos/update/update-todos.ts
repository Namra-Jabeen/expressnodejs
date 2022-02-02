import {todos} from "../../data";
import {ITodo} from "../../interfaces/ITodos";

export async function updateTodo(todo:ITodo): Promise<ITodo>{
    for (let obj of todos) {
        if (obj.id == todo.id) {
            obj = todo;
            obj.title = "I was updated";
            return Promise.resolve(obj);
        }
    }
    return null;
}