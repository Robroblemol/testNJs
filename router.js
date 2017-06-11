function route(handle, pathname,response,postData) {// agregamos el manejadory peticion post
  console.log("routeando peticion para "+pathname);
  if (typeof handle[pathname] === 'function'){//aqui evaluamos si lo recivido es una function
    handle [pathname](response,postData);//llamamos la respuesta desde el manejador y enviamos la peticion post
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
