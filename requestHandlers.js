function start() {
  console.log("manipulador de peticion 'start' se ha llamdado");
    function sleep(milliSeconds) {
      //obtenemos hora actual
      var startTime = new Date().getTime();
      //ocupamos la cpu inutilmente
      while (new Date().getTime()<startTime+milliSeconds);
    }
  sleep(10000);
  return "Hola inicio";//repornar directamente desde el nanejador
}
function up() {
  console.log("manipulador de peticion 'up' se ha llamdado");
  return "Hola subir";//repornar directamente desde el nanejador
}

exports.start = start ;
exports.up = up;
