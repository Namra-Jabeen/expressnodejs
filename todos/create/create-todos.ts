import { ITodo } from "../../interfaces/ITodos";
import { v4 as uuidv4 } from "uuid";
import connection from "../../db.connector";

export async function createTodo(newTodo: ITodo): Promise<ITodo> {
  const todo: ITodo = {
    id: uuidv4(),
    ...newTodo,
  };
  let mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jjt82sqq",
    database: "TodoDatabase",
  });
  connection.connect();

  let status_query = `SELECT id FROM Status where status.Status = '${todo.status}';`;
  connection.query(status_query, function (err, rows) {
    if (err) throw err;

    todo.status = rows[0];
  });
  let sql_query = `INSERT INTO Todo VALUES ('${todo.id}',${todo.status},1,'${todo.assignee}','${todo.assigned}','${todo.title}','${todo.description}','${todo.dateAdded}','${todo.dateCompleted}');`;
  connection.query(sql_query, function (err, rows, fields) {
    if (err) throw err;
  });
  connection.end();
  return Promise.resolve(todo);
}
