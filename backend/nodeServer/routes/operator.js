const express = require('express');
const appForpersonTb =  express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Sd@152027',
    database : 'airline'
});

//=================================================================

appForpersonTb.patch("/",(request,response)=>{
    console.log("in")
    var query=`select * from person where email='${request.body.email}' and password='${request.body.password}'`
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


appForpersonTb.get("/profile/:id",(request,response)=>{
  
    var query1 = 
    `select id,email,fname,lname,mob,role,status  from person  where id=${request.params.id}  `;

    connection.query(query1,(error ,result)=>{
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

//=========================  to Update the status  of the operator whether approved or pending   ========================================
appForpersonTb.put("/:id", (request, response)=>{
    var query = 
    `update person set status='${request.body.status}' where id=${request.params.id}`;
  
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

//====================   sees only pending  or approved Operator   =============================================

appForpersonTb.get("/:status",(request,response)=>{
  
    var query1 = 
    `select id,email,fname,lname,mob,role,status  from person where   role="operator"  and  status='${request.params.status}'  `;

    connection.query(query1,(error ,result)=>{
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

//===========================================  Edit the profile ======================

appForpersonTb.put("/editProfile:", (request, response)=>{
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

//===================================   delete the operator by the id ======================================================


appForpersonTb.delete("/:id", (request, response)=>{
    var query = `delete from person where id = ${request.params.id}`;
                    
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

//=======================================================================================








module.exports = appForpersonTb;