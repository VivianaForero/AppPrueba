
const mysql = require('mysql');
let respuesta;

const  connectionBd = {


    consultarPerdsonas(query){
        
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

         

        conection.query(query,(err,result)=>{
            if (err) {
                throw err}
                
                respuesta = result;
                console.log(result)
            
                
            }); 
    
        conection.end();

        return respuesta;
    },

    registrarPersona(query){

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


        console.log(query);
        conection.query(query,(err,result)=>{
            if (err) {
                throw err
            }
                console.log('1 record inserted');

            }); 
    
    conection.end();

    return respuesta;

    }

}

module.exports = connectionBd;