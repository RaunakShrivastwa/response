const express= require('express');

const app =express();
const PORT = 3000

app.use(express.json())

app.get("/home",(req,res)=>{
    return res.json("Home PAge")
})


app.listen(PORT,(err)=>{
    if(err){
        return console.log("There is Error");
    }

    console.log("Servre is Running");
})