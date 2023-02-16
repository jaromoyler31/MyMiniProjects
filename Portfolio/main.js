const express = require("express")
const path = require("path")
const app = express();

app.use(express.urlencoded({extended:false}))
// app.use(express.static("frontEnd"))//conecting the index.js

app.set("frontEnd", "./frontEnd") //Very important (same thing) ^
app.use(express.static("./frontEnd"))
app.set("html Engine", "html")

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+"/frontEnd/index.html"))
})

app.get("/about", (req,res)=>{
    res.sendFile(path.join(__dirname+"/frontEnd/about.html"))
})  

app.get("/projects", (req,res)=>{
    res.sendFile(path.join(__dirname+"/frontEnd/project.html"))
})

app.listen(3200, ()=>{
    console.log("Listening To Port 3200")
})