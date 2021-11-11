const express = require("express");
//const bodyParser = require("body-parser");
const routes = require('./routes/routes.js');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));





app.get('/',(req,res) =>{
    res.json({"msg":"welcome"});
});

app.use(routes);




app.listen(3000, function(){
    console.log("port 3000 & listening")
});
