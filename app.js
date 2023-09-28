const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Hello world!");
    res.send("Seja bem vindo ao meu app!");
});


app.get("/segredo", function(req,res){
    res.send("Você achou um segredo!");
});

app.get("/sobre", function(req,res){
    res.send("Criador: Tiago César da Silva Lopes");
    res.send("Data: 28/09/23");
});

// App.listen tem que ser o último código 
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081 ");
});