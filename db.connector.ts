import * as dotenv from "dotenv";
import * as mysql from "mysql";
import * as util from "util";

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

connection.query = util.promisify(connection.query).bind(connection);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

export default connection;
