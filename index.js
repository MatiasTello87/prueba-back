/*
Dar primera instrucción a nuestra compu para que quede escuchando peticiones en un determinado puerto 1- solicitar un módule http
*/
const http = require("http")

//función controladora 
function requestController (){
    console.log("recibimos una nueva requestaa!!!")
}

// creamos servidor con esa librería
// configurar el server
const server = http.createServer(requestController)

server.listen(4000)