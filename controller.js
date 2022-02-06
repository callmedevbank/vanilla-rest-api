const {getAll}= require("./model")

const findAll = async (req,res)=>{
res.writeHead(200,{ "conten-type": "application-json"})
res.end(JSON.stringify( await getAll(req,res)))
}
module.exports={
    findAll
}
