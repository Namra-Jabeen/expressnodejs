import { ITodo } from "../../interfaces/ITodos";
import connection from "../../db.connector";

export async function getTodo(id): Promise<ITodo> {
  const sql_query = `select T.id,C.category,S.status,T.title,T.description,T.date_added,T.date_completed,U.email as assignee_email, U.name as assignee_name, U2.email as assigned_email,U2.name as assigned_name from todo T join user U on T.assignee = U.email join user U2 on T.assigned=U2.email join category C on C.id = T.category join status S on S.id = T.status where T.id = '${id}';`;
  const result: any = await connection.query(sql_query);
  const todo: ITodo = {
    id: result[0].id,
    title: result[0].title,
    assignee: {
      email: result[0].assignee_email,
      name: result[0].assignee_name,
    },
    assigned: {
      email: result[0].assigned_email,
      name: result[0].assigned_name,
    },
    category: result[0].category,
    status: result[0].status,
    description: result[0].description,
    dateAdded: result[0].date_added,
    dateCompleted: result[0].date_completed,
  };
  return Promise.resolve(todo);
}
