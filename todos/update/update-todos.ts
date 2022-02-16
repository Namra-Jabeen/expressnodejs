import { ITodo } from "../../interfaces/ITodos";
import connection from "../../db.connector";

export async function updateTodo(todo: ITodo): Promise<{ message: string }> {
  const statusId = await connection.query(
    `SELECT id as status_id from Status where status.status = '${todo.status}';`
  );
  const sql_query = `Update Todo Set status = ${statusId[0].status_id},category = ${todo.category}, assignee = '${todo.assignee.email}', assigned = '${todo.assigned.email}', title = '${todo.title}', description = '${todo.description}', date_added = '${todo.dateAdded}', date_completed = '${todo.dateCompleted}' where Todo.id = '${todo.id}'`;
  await connection.query(sql_query);
  return Promise.resolve({ message: "Todo Updated" });
}
