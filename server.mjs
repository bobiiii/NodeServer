import path from "path";
import fs from "fs";
import http from "http";
const port = 3000;

export const server = http.createServer((req, res) => {
    if (req.method == "GET") {
        let fileUrl;
        if (req.url == "/") {
            fileUrl = "input.html"
        } else {
            fileUrl = req.url;
        }
        var fileExt = path.extname(fileUrl)
        var fileloc = path.join("./input.html")
        
        if (fileExt == ".html" ) {
            fs.exists(fileUrl,(e)=>{
                if (!e) {
                    res.end(`<h1>file not exists</h1>`)
                    
                } else {
                    
            fs.createReadStream(fileUrl).pipe(res) 
            
                    
                }
            })
            
            
        } else {
            res.end(`<h1> not a html file</h1>`)
            
        }



    } else {
        res.setStatusCode = 400
        res.setHeader("Content-Type", "text/html")
        res.end(`<h1> Bad Request</h1>`)
    }




})







































// import  http  from "http"; 
// import  fs,{readFileSync}  from "fs"; 
// import  path  from "path"; 
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';


//  export const server = http.createServer((req, res) => {
//     if (req.method == "GET") {
//         var fileUrl;
//         if (req.url == "/") {
//             fileUrl = "input.html"
//         } else {
//             fileUrl = req.url
//         }
//         var filePath = path.resolve("./Public/"+fileUrl)
//         var fileExt = path.extname(filePath)
//         if (fileExt == ".html") {
//             fs.exists(filePath,(exists)=>{
//             if (!exists) {
//                 console.log("not working")
//                 res.statusCode = 200;
//                 res.setHeader("Content-Type","text/html")
//                 res.end(`<html><body><h2>file dosent exists</h2></body></html>`)

//             } else {


//             console.log("everything is working")
//             res.statusCode = 200;
//             res.setHeader("Content-Type","text/html")
//             const __dirname = dirname(fileURLToPath(import.meta.url));
//             console.log(__dirname+ "  this is output")
//             const file2 = readFileSync(__dirname+"/Public/input.html",{
//                 encoding:'utf8'
//             })
//             // const filee = path.join(abc,"Public/input.html")
//             const read = fs.createReadStream(file2).pipe(res);
//             console.log(`read stream output ${read}`)
//             }})

//         } else {
//             res.statusCode = 200;
//             res.setHeader("Content-Type","text/html")
//             res.end(`<html><body><h2>this is not a html file</h2></body></html>`)

//         }

//     } else {
//         res.statusCode = 404;
//         res.setHeader("Content-Type", "text/html")
//         res.end(`<html><body><h1> re method is not get</h1></body></html>`)
//     }
// })
