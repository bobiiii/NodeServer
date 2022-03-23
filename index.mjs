import {server} from "./server.mjs"
// const http = require("http");
// const path = require("path");
// const fs = require("fs")
const port = 3000;


server.listen(port, () => {
    console.log("server iss running 2")
})









// console.log(req.headers);
// res.statusCode = 200;
// res.setHeader("Content-Type", "text/html")
// res.end(`<html><body><h1>Connection success</h1></body></html>`)














// const http = require("http");
// const hostname = "localhost";
// const port = 2000;

// const server =http.createServer((req,res)=>{
//     console.log(req.headers);
//     res.statusCode- 200;
//     res.setHeader("Content-Type", "text/html");
//     res.end(`<html> <body> <h1> connection success</h1> </body> </html>`)


// });

// server.listen(port,hostname,()=>{
//     console.log(`server running at http://${hostname}:${port}`)
// })