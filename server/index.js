const express=require('express')

const bodyParser=require('body-parser')

const mongoose=require('mongoose')

const EmployeesRouter = require('./routes/employees')

const app=express()

//variables
const port=process.env.PORT || 8081
const database = "prakharsirproject";

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,PATCH")
    res.setHeader("Access-Control-Allow-Headers","Content-Type","application/json")
    next()
})

app.use(EmployeesRouter.router);

mongoose
  .connect(
    `mongodb+srv://pavan:pavan@cluster0.8ixmj.mongodb.net/prakharsirproject?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((result) => {
    app.listen(port);
    console.log(result);
  })
  .catch((err) => console.log(err)); 