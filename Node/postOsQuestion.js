const express = require("express")
const app = express()
const connectdb = require("./MongoConnect")
const cors = require("cors")
app.use(express.json());
app.use(cors())

app.get("/",async(req,resp)=>{
    resp.header("Access-control-Allow-Origin","*")

    let db = await connectdb()
    let data = await db.find().toArray();
    console.log(data)
    resp.send(data);
})
app.listen(9000); 