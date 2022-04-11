# PRUEBA FULL STACK BANK

## USO DE LA API REST 
Descargar y descomprimir el servicio, ejecutar el comando 'npm i' para realizar la instalación de los módulos,luego, ejecutar app.js, que va a correr el servicio de forma local en el puerto 8080.

## PRIMER SERVICIO 
Para consumir el servicio se puede usar el aplicativo Postman. Para realizar un nuevo registro:

- Abre una nueva ventana en Postman
- Selecciona POST
- Ingresa la siguiente url: http://localhost:8080/api/users
- Selecciona la opcion Body
- Selecciona la opcion raw y JSON
- Ingresa el Json con la informacion en la siguiente estructura

```json
{  
        { 
            "name": "Santiago", 
            "birth": "1980/07/23" 
        }
}
```
- Da click en el botón Send
- Visualiza la respuesta con la misma estructura enviada, confirmando que la información proporcionada se almacenó con éxito.


## SEGUNDO SERVICIO 
Para visualizar los registros existentes en la base de datos:

- Abre una nueva ventana en postman
- Selecciona GET
- Ingresa la siguiente url: http://localhost:8080/api/users
- Dar clic en el botón Send
- Allí se visualizan todos los registros almacenados en la base de datos, así:

```json
{ 
     "name": "Santiago",
     "birth": "1980/07/23" 
},
{ 
     "name": "Laura",
     "birth": "2000/04/15" 
}

```

## COMPONENTES

TECNOLOGIAS IMPLEMENTADAS

- NodeJs - JavaScript
- MySQL
- Docker
- GitHub



## DESARROLLADOR 
Viviana Forero Betancouth
Cel: 3193797896
email: vforerob300@gmail.com
>>>>>>> Stashed changes
