function start() {
  console.log("manipulador de peticion 'start' se ha llamdado");
  return "Hola inicio";//repornar directamente desde el nanejador
}
function up() {
  console.log("manipulador de peticion 'up' se ha llamdado");
  return "Hola subir";//repornar directamente desde el nanejador
}

exports.start = start ;
exports.up = up;
