import { updatePost } from "../api/cliente.js";
import { listarTareas } from "./listar.js";

export const actualizarTarea = async (id, usuarioIdActual) => {
    const nuevaTarea = prompt("Ingresar la nueva tarea: ");
    const nuevaDescripcion = prompt("Ingresar la nueva descripción: ");

    if (!nuevaTarea || !nuevaDescripcion) return;

    await updatePost(id, {
        userId: parseInt(usuarioIdActual),
        title: nuevaTarea,
        body: nuevaDescripcion
    });
    listarTareas(usuarioIdActual);
}