var server = require("./server");//llamamos el modulo del servidor.
var router = require("./router");//llamamos el modulo del ruteador
var requestHandlers = require("./requestHandlers");//agregamos el modulo manejador de peticiones

var handle = {}
handle["/"]=requestHandlers.start;//si la peticion es "/" (root) vamos a inicio
handle["/start"]=requestHandlers.start;
handle["/up"]=requestHandlers.up;//si la peticion es suubir

server.init(router.route,handle);//llamamos la funcion init del archivo app y pasamos el route por parametros
                          //pasamoso el objeto handle
