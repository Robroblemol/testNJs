function route(handle, pathname,response) {// agregamos el manejador
  console.log("routeando peticion para "+pathname);
  if (typeof handle[pathname] === 'function'){//aqui evaluamos si lo recivido es una function
    handle [pathname](response);//llamamos la respuesta desde el manejador
    //return handle[pathname]();//si ens asi devolvemos el manejador.loquesea
  }
  else{
    console.log("no se encontro manipulador para "+pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 No Encontrado");
    response.end();
  }
}
exports.route = route;// secrea modulo route
