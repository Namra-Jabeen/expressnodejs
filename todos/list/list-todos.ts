import { ITodo } from "../../interfaces/ITodos";
import connection from "../../db.connector";

export async function listTodos(): Promise<ITodo[]> {
  const sql_query = `select T.id,C.category,S.status,T.title,T.description,T.date_added,T.date_completed,U.email as assignee_email, U.name as assignee_name, U2.email as assigned_email,U2.name as assigned_name from todo T join user U on T.assignee = U.email join user U2 on T.assigned=U2.email join category C on C.id = T.category join status S on S.id = T.status;`;
  const result: any = await connection.query(sql_query);
  const todoList: ITodo[] = [];

  for (const i of result) {
    const todo: ITodo = {
      id: i.id,
      title: i.title,
      assignee: {
        email: i.assignee_email,
        name: i.assigned_name,
      },
      assigned: {
        email: i.assigned_email,
        name: i.assigned_email,
      },
      category: i.category,
      status: i.status,
      description: i.description,
      dateAdded: i.date_added,
      dateCompleted: i.date_completed,
    };
    todoList.push(todo);
  }
  return Promise.resolve(todoList);
}
