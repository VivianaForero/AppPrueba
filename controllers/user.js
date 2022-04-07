const { request, response } = require('express');


const personGet = (req=request,res=response) => {
    
    const {q,nombre,apikey} = req.query;
    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    })};

const personPost = (req,res=response) => {
    
    const {nombre,edad} = req.body;

    res.json({
        msg: 'post API - controller',
        nombre,
        edad
    })
};
    module.exports = {
        personGet,
        personPost
    }