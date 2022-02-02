import {Request, Response} from "express";
import {ITodo} from "../../interfaces/ITodos";
import {deleteTodo} from "./delete-todo";

export async function deleteTodoController(req:Request,res:Response) {
    const todo: ITodo = await deleteTodo(req.body);
    if (todo== null) {
        res.send(`Todo ${req.body} not found`);
    }
    res.send(todo);
}