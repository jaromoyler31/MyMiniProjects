const express = require("express")
const fs = require("fs")
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.static("frontEnd"))//conecting the index.js

app.listen(3000, ()=>{
    console.log("Listening To Port 3000")
})