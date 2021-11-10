import express from "express"
import { createConnection } from "mysql";

const PORT = process.env.PORT || 5000
const app = express()

const connection = createConnection({
  // host: "localhost",
  // port: "3307",
  // user: "root",
  // password: "",
  // database: "myvybes",

  
  host: "db-mysql-lon1-78196-do-user-10179262-0.b.db.ondigitalocean.com",
  port: "25060",
  user: "doadmin",
  password: "GXSoj7jL9V0qNQJD",
  database: "defaultdb",
  sslmode: "REQUIRED"
});

app.get("/", (req, res) => {
  res.send("Welcome to your App!")
})

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})