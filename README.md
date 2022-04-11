# PRUEBA FULL STACK BANK

## USO DE LA API REST 
Descargar y descomprimir el servicio, ejecutar el comando 'npm i' para realizar la instalación de los módulos,luego, ejecutar app.js, que va a correr el servicio de forma local en el puerto 8080.

## PRIMER SERVICIO 
Para consumir el servicio se puede usar el aplicativo Postman. Para realizar un nuevo registro:

- Abre una nueva ventana en Postman
- Selecciona POST
- ingresa la siguiente url: http://localhost:8080/api/users
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
Cuando solo un sateline envia informacion:

- Abre una nueva ventana en postman
- Selecciona POST O GET
- ingresa la siguiente url: http://fuego-de-quasar-andrex2040.herokuapp.com/api/meli/ubications/topsecret_split/{satellite_name}
- Donde dice {satellite_name} pon el nombre del satélite que se está reportando ejemplo sato
- Selecciona la opcion Body
- Selecciona la opcion raw
- Selecciona la opcion JSON
- Ingresa el json con la informacion en la siguiente estructura

```json
{ 
     "distance": 142.7,
     "message": ["este", "", "un", "", ""] 
}
```

- Da click en el botón Send
- Visualiza la respuesta del servicio en la estructura como la siguiente:

```json
{
    "position": {
        "x": -487.28591250000005,
        "y": 1557.0142250000004
    },
    "message": "este es un mensaje seceto"
}
```

![image](https://user-images.githubusercontent.com/3359026/149630510-c1aa00ae-4739-41d5-b9c0-a93b5402d627.png)


## COMPONENTES

TECNOLOGIAS IMPLEMENTADAS

![image](https://user-images.githubusercontent.com/3359026/149630816-884c0792-9bbd-4874-a0fc-dc8cc586e13f.png)
![image](https://user-images.githubusercontent.com/3359026/149630831-784b3c42-e78b-4258-9387-36708c9ba90e.png)
![image](https://user-images.githubusercontent.com/3359026/149630847-91c4f450-5f75-4564-934b-e20c0953f918.png)

- NodeJs - JavaScript
- Libreria node-trilateration
- mongodb, almacenar informacion de los satelites independientes
- Servidor Heroku


## DESARROLLADOR 
Viviana Forero Betancouth
Cel: 3104847428
email: carlos.online0@gmail.com
>>>>>>> Stashed changes
