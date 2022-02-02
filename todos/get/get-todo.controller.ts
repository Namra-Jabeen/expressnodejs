import {Request, Response} from "express";
import {ITodo} from "../../interfaces/ITodos";
import {getTodo} from "./get-todo";

export async function getTodoController(req:Request,res:Response) {
    const todo: ITodo = await getTodo(req.params.id);
    if (todo === null){
        return res.send(`Id ${req.params.id} not found`)
    }
    res.send(todo);
}