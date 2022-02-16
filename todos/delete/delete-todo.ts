import connection from "../../db.connector";

export async function deleteTodo(id: string): Promise<{ message: string }> {
  const sql_query = `DELETE FROM Todo WHERE Todo.id = \'${id}\';`;

  await connection.query(sql_query);
  return Promise.resolve({ message: "Todo Deleted" });
}
