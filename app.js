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

app.get("/ola/:cargo/:nome/:idade", function(req, res){
    // res.send(req.params);
    // ele aceita html
    res.send("<h1>Olá,  " + req.params.nome +"!</h1><h2>Seu cargo é: " + req.params.cargo +"</h2><h2>Sua idade é: " + req.params.idade +"</h2>");
})

// App.listen tem que ser o último código 
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081 ");
});