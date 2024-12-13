// const http = require("http");
// // console.log(http);
// const myServer = http.createServer((req, res) => {
//   console.log(req);
//   console.log(res);
//   res.write("Hello all");
//   res.write("\nmake your server");
//   res.end("\nEnd");
// });
// myServer.listen(1234, () => {
//   console.log("server is running");
// });

// app.use(express.static("./express/AppleResponsive"));
// const PORT = 3030;
// app.listen(PORT, (err) => {
//   if (err) console.log(err);
//   console.log("this the error message ");
//   console.log(`server running on http://localhost:${PORT}`);
// });
const express = require("express");
const app = express();
const mysql = require("mysql2");
// app.get("/"(req,res)=>res.send("up and runnuing"));

app.listen(3001, () => console.log("listening and running on ...."));

const connection = mysql.createConnection({
  host: "localhost",
  user: "phptesting",
  password: "s12@Naftann",
  database: "phptesting",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});
