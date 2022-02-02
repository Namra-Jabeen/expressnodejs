import {ITodo} from "../../interfaces/ITodos";

export async function createTodo(newTodo: ITodo): Promise<ITodo>{
    const todo: ITodo = {
        id:  Math.floor(4 + Math.random() * 10).toString(),
        ...newTodo,
    };
    console.log(todo);
    return Promise.resolve(todo);
}