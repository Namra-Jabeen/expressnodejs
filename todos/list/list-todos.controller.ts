import {Request, Response} from "express";
import {ITodo} from "../../interfaces/ITodos";
import {listTodos} from "./list-todos";

export async function listTodosController(req:Request,res:Response) {
    const todos: ITodo[] = await listTodos();
    res.send({data: todos});
}