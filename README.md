<<<<<<< Updated upstream
INSTRUCCIONES:

1. 
=======
# PRUEBA FULL STACK BANK

## USO DE LA API REST 
Existen dos servicios que permiten obtener el mensaje de la nave y su ubicación.

## PRIMER SERVICIO 
Cuando los tres satélites envían información al mismo tiempo para determinar el mensaje y la posición de la nave:

Se puede usar el aplicativo Postman para el consumo del servicio:

- Abre una nueva ventana en postman
- Selecciona POST
- ingresa la siguiente url: http://fuego-de-quasar-andrex2040.herokuapp.com/api/meli/ubications/topsecret
- Selecciona la opcion Body
- Selecciona la opcion raw y JSON
- Ingresa el Json con la informacion en la siguiente estructura

```json
{ 
    "satellites": [ 
        { 
            "name": "kenobi", 
            "distance": 100.0, 
            "message": ["este", "", "", "mensaje", ""] 
        }, 
        { 
            "name": "skywalker", 
            "distance": 115.5, 
            "message": ["", "es", "", "", "secreto"] 
        }, 
        { 
            "name": "sato", 
            "distance": 142.7, 
            "message": ["este", "", "un", "", ""] 
        }
    ]
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
    "message": "este es un mensaje secreto"
}
```
![image](https://user-images.githubusercontent.com/3359026/149630225-0074c288-ceff-466e-88b0-51dcdb87ceb5.png)



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
