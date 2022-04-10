const express = require('express');
const app = express();
const morgan = require('morgan');

class Server {
    constructor(){
        this.app = express();
        this.port=process.env.PORT;
        this.usersPath = '/api/users';
        
        //database conection
     //   this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();  

    }

    middlewares() {

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio público
        this.app.use(express.static('public'));

        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user')); 
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }
}

module.exports = Server;