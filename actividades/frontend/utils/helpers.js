import { ESTADOS_TAREA } from "./estados.js";
export const asignarEstado = (id) => {

    return ESTADOS_TAREA[id % 3];
};