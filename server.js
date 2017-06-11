var http = require("http");
var url = require("url");//para encontrar rutas
//otra forma de inisiar el server

// var server = http.createServer();//pero no hace mas nada
// server.listen(8888);

// http.createServer(function (request,response) {
//   response.writeHead(200,{"Content-Type":"text/html"});
//   response.write("Hola Roberto");
//   response.end();
// }).listen(8888);
function init(route,handle) {//recive el parámetro route y el manejador
  function onRequest(request,response) {
    var dataPost = "";
    var pathname = url.parse(request.url).pathname;//obtenemos la url
    console.log("Peticion para "+pathname+" recibida.");

    request.setEncoding("utf8");

    request.addListener("data",function(trozoPost){
      dataPost += trozoPost;
      console.log("Recibido trozo POST '" + trozoPost + "'.");
    });

    request.addListener("end",function(){
      route (handle,pathname,response,dataPost);//pasamos el manejador y la ruta
      //y todos los trozos de los datos

    });

  }

  http.createServer(onRequest).listen(8888);
  console.log("server on.");
}

exports.init=init;//exportamos esta funcion para que sea utilizada desde otro modulo


// function say(palabra) {//declaramos funciones
//   console.log(palabra);
// }
// function play(anyFunction,param) {
//   anyFunction(param);
// }
// //play(say,"Hola Roberto perdon");//le pasomos como parametro la funcion say
// play(function (param){console.log(param)},"Hola roberto esta bien");//definimos la funcion dentro del llemado.
