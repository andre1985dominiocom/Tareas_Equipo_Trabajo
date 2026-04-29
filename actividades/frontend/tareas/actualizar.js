import { updatePost } from "../api/cliente.js";
import { listarTareas } from "./listar.js";

export const actualizarTarea = async (id) => {
    const nuevaTarea = prompt("Ingresar la nueva tarea: ");

    if (!nuevaTarea) return;

    await updatePost(id, {
        userId: "",
        title: nuevaTarea,
        body: ""
    });
    listarTareas();
} 