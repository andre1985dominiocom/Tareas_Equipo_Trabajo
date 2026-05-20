import { rutas } from "./rutas.js";

export const enrutador = async (app) => {
  let hash = window.location.hash;

  //buscamos si el hash actual coincide con alguna regla de nuestro mapa de rutas

  let temporal = rutas.find((ruta) => {
    return ruta.ruta == hash;
  });

  //si la ruta existe inyectamos su vista 
  if (temporal) {
    app.innerHTML = temporal.vista();
    await temporal.controlador();
  }
}