var exec = require("child_process").exec;
function start(response) {
  console.log("manipulador de peticion 'start' se ha llamdado");
  exec("ls -lah",function (error,stdout,stderr) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(stdout);
    response.end();
  });
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
