const express = require('express')
const app = express();

app.use(express.json())
const angularschema = require('./model/schema')
require('./db/connection')
app.get("/",async(req,res)=>{
    try{
        res.send("the server is started");
    }
    catch(e){
        console.log(e);
    }
})


app.post("/postdata",async(req,res)=>{
    try{

        const data = new angularschema(req.body);
        const insertdata = await data.save();
        res.send(insertdata)
    }catch(err){
            res.send(err)
    }
})



// app.get("/getdata",async(req,res)=>{
//     try{

//         const getd = await angularschema.find({})
//         res.send(getd)
//     }catch(e){
//             res.send(e)
//     }
// })

app.get("/getdata/:id",async(req,res)=>{
    const id = req.params.id; 
    try{

        const data = await angularschema.findOne({ _id: id });
        res.send(data)
    }catch(e){
            res.send(e)
    }
})

app.put('/updatedata/:id',async(req, res)=>{
    try{
        const _id = req.params.id;
        const updatedata = await angularschema.updateOne({_id},
            {
                $set:req.body
            }
            
        )
        res.send(updatedata)
    }
    catch(e){
        res.send(e);
    }
})

app.delete("/deleteData/:id",async(req,res)=>{
    try{
        const data = await angularschema.deleteOne({_id:req.params.id});
        res.send(data)
    }
    catch(e){
        res.send(e);
    }
})
app.listen(8000);