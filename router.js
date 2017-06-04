function route(handle, pathname) {// agregamos el manejador
  console.log("routeando peticion para "+pathname);
  if (typeof handle[pathname] === 'function'){//aqui evaluamos si lo recivido es una function
    return handle[pathname]();//si ens asi devolvemos el manejador.loquesea
  }
  else{
    console.log("no se encontro manipulador para "+pathname);
    return "404 no encontrado";
  }
}
exports.route = route;// secrea modulo route
