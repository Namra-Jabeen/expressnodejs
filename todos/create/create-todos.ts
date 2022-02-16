import { ITodo } from "../../interfaces/ITodos";
import { v4 as uuidv4 } from "uuid";
import connection from "../../db.connector";

export async function createTodo(newTodo: ITodo): Promise<ITodo> {
  const todo: ITodo = {
    id: uuidv4(),
    ...newTodo,
  };

  let statusId = await connection.query(
    `SELECT id as status_id FROM Status where status.Status = '${todo.status}';`
  );

  let sql_create_query = `INSERT INTO Todo 
VALUES ('${todo.id}',
${statusId[0].status_id},
${todo.category},
'${todo.assignee}',
'${todo.assigned}',
'${todo.title}',
'${todo.description}',
'${todo.dateAdded}',
'${todo.dateCompleted}');`;

  await connection.query(sql_create_query);
  return Promise.resolve(todo);
}
