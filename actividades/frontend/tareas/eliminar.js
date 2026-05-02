import { deletePost } from "../api/cliente.js";
import { listarTareas } from "./listar.js";

export const eliminarTarea = async (id, userId) => {
    
    if (!id || !userId) {
        console.error("ID o userId inválido.");
        return;
    }
    const confirmacion = confirm("¿Estás seguro de eliminar esta tarea?");

    if(!confirmacion) return;

    try {
        const exito = await deletePost(id);

        if (exito) {
            alert("¡Tarea eliminada con éxito!");
            listarTareas(userId);
        } else {
            alert("Hubo un error al eliminar la tarea.");
        }
    } catch (error) {
        console.error("Error al eliminar la tarea:", error);
        alert("Hubo un error al conectar con el servidor.");
    }
};