const express = require('express');
const path = require("path");

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");

const app = express();

app.set("view engine", "ejs");

app.get('/login', function(req, res){
    res.render("login");
});
app.get('/register', function(req, res){
    res.render("register");
});

app.use("/", indexRouter);
// app.use("/login", userRouter);

app.use(express.static(path.join(__dirname,'/public')));



const puertoDelServidor = 3030;

app.listen(puertoDelServidor, ()=>{
    console.log('Servidor funcionando en el puerto ' + puertoDelServidor);
});