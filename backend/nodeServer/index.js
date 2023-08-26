const express = require('express');
const personRelatedRoutes = require("./routes/operator");
const flightRelatesRoutes = require("./routes/flight");
const app = express();


app.use((request,response , next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods',"*");
    next();
})


app.use(express.json());

app.use('/operator',personRelatedRoutes);
app.use('/flight',flightRelatesRoutes);

app.listen(9999,()=>{console.log("server Started  9999")})