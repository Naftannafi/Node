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
const express = require("express");
const app = express();
app.use(express.static("./express/AppleResponsive"));
const PORT = 3030;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("this the error message ");
  console.log(`server running on http://localhost:${PORT}`);
});
