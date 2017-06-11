var exec = require("child_process").exec;
function start(response) {
  console.log("manipulador de peticion 'start' se ha llamdado");
  var body = '<html>'+
  '<head>'+

    '</head>'+
    '<body>'+
    '<form action="/up" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';


    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

  //return "Hola inicio";//repornar directamente desde el nanejador
}
function up(response) {
  console.log("manipulador de peticion 'up' se ha llamdado");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}

exports.start = start ;
exports.up = up;
