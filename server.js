
const http = require ("http")

const {findAll} = require("./controller")

const port = 5061

const web = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application-json"})
    findAll(req,res)
})  
web.listen(port,()=>{
    console.log("listen to port" + port)
})