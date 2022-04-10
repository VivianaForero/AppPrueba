const { request, response } = require('express');
const mysql = require('mysql');
const express = require('express');


let respuesta = [];


const personGet = (req=request,res=response) => {
    
    const {name,birth} = req.query;
    
    var conection = mysql.createConnection({
        host: 'localhost',
        database: 'pruebaTecnica',
        user: 'usuario',
        password: 'Contrasea_7'
    });

     conection.connect(function (error) {
        if (error) {
         throw error;
        }
        console.log('Successful conection');
        
     })

    const sql = 'SELECT * from person'
    console.log(sql);
    conection.query(sql,(err,result)=>{
        if (err) 
            throw err
            
        res.json(result);
        }); 
    
    conection.end();
};

const personPost = (req,res=response) => {
    
    const person = {
        name: req.body.name,
        birth: req.body.birth
    }

    
    var conection = mysql.createConnection({
        host: 'localhost',
        database: 'pruebaTecnica',
        user: 'usuario',
        password: 'Contrasea_7'
    });

     conection.connect(function (error) {
        if (error) {
         throw error;
        }
        console.log('Successful conection');
        
     })

    const sql = 'INSERT into person (name,birth) values ("'+person.name+'","'+person.birth+'")'
    console.log(sql);
    conection.query(sql,(err,result)=>{
        if (err) 
            throw err
        
        console.log('1 record inserted');
    }); 
    
    conection.end();

};
    module.exports = {
        personGet,
        personPost
    }