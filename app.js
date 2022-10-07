const express = require('express');
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("view engine", "ejs");

app.use("/", indexRouter);

app.use(express.static(path.join(__dirname,'/public')));

app.listen(3030, ()=>{
    console.log('Servidor funcionando en el puerto 3030');
});