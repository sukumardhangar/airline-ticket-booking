const express = require('express');
const appForflightTb =  express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Sd@152027',
    database : 'airline'
});


//=======================================================
appForflightTb.get("/:id",(request,response)=>{

    var query = 
    `select fname,lname,airline_name,category,arrival_time,deparutre_time,destination,source,price,seat_count,seat_type from seat,schedule,flight_detail,person where person.id=flight_detail.person_id and flight_detail.id=schedule.flight_detail_id and schedule.id=seat.schedule_id and person.id=${request.params.id};`;

    connection.query(query,(error ,result)=>{
        if(error==null)
        {
            console.log()
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);            
        }
        response.end();
    })
})

appForflightTb.put("/:", (request, response)=>{
    console.log("sdsd")
      var query = 
      `update person set email = '${request.body.email}', fname = '${request.body.fname}',lname = '${request.body.lname}',mob = '${request.body.mob}'  ,  where id=${request.body.id} `;
    
      connection.query(query, (error, result)=>{
                          if(error==null)
                          {
                              var data = JSON.stringify(result) 
                              response.setHeader("Content-Type","application/json");
                              response.write(data);
                          } 
                          else
                          {
                              console.log(error);
                              response.setHeader("Content-Type","application/json");
                              response.write(error)
                          }
                          response.end();
                  })
    })

//=======================================================

module.exports = appForflightTb;
