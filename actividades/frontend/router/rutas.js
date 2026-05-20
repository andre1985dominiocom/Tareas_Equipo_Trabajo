import { vistaUsuarios, usuariosControlador } from "../modulos/usuarios/index.js";
import { vistaTareas, tareasControlador } from "../modulos/tareas/index.js";

//definimos el arrglo de objetos que empareja cada ruta hash con su vista y logica

export const rutas = [
  {
    'ruta': '#/usuarios',
    vista: vistaUsuarios,
    controlador: usuariosControlador
  },
  {
    'ruta': '#/tareas',
    vista: vistaTareas,
    controlador: tareasControlador
  }
]