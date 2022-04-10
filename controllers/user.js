const { request, response } = require('express');
const mysql = require('mysql');
const express = require('express');
const connectionBd = require('../database/connection');


let respuesta = [];


const personGet = (req=request,res=response) => {
   
    const {name,birth} = req.query;
    const resultado = connectionBd.consultarPerdsonas();
    
    res.json({        
        resultado
    }) ;
};

const personPost = (req,res=response) => {

    console.log('hola mundo', req.body)
    
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
        res.json({
            msg: 'Registro almacenado con èxito'
        })
    }); 
    
    conection.end();

};
    module.exports = {
        personGet,
        personPost
    }