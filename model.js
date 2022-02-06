 const student = require("./data.json")

 const getAll = (req,res)=>{
     return new Promise((resolve,reject)=>{
         resolve(student)
     })
 }
 module.exports ={
     getAll
 }