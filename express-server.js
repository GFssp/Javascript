const express = require("express")
const app = express()

// Prevent "Cannot Get /" error to occured, gets a router
app.get("/", function(req, res){
    res.send("Welcome to my app!")
})

// Callback - actions that happens with events
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})