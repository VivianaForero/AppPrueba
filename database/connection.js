
const mysql = require('mysql');
let respuesta;

const  connectionBd = {


    consultarPerdsonas(){
        
        const conection = mysql.createConnection({
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
            
         });


        const sql = 'SELECT * from person'
        console.log(sql);
        conection.query(sql,(err,result)=>{
            if (err) 
                throw err
                respuesta = result
                
                
            }); 
    
    conection.end();

    return respuesta;
    }
}

module.exports = connectionBd;