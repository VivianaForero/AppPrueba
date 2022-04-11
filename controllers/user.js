const { request, response } = require('express');
const mysql = require('mysql');
const express = require('express');
const connectionBd = require('../database/connection');


let respuesta = [];


const personGet = (req=request,res=response) => {
   
    const sql = 'SELECT * from person'
    const {name,birth} = req.query;
    const personas = connectionBd.consultarPerdsonas(sql);
    
    res.json({        
        personas
    }) ;
};

const personPost = (req,res=response) => {


    
    const person = {
        name: req.body.name,
        birth: req.body.birth
    }
    
    const sql = 'INSERT into person (name,birth) values ("'+person.name+'","'+person.birth+'")'
    
    const resultado = connectionBd.registrarPersona(sql);
    
    res.json({        
        resultado
    }) ;
    

};
    module.exports = {
        personGet,
        personPost
    }