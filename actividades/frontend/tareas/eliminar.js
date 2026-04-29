import { deletePost } from "../api/cliente.js";
import { listarTareas } from "./listar.js";

export const eliminarTarea = async (id, userId) => {
    const confirmacion = confirm("¿Estás seguro de eliminar esta tarea?");
    
    if (confirmacion) {
        const exito = await deletePost(id);
        
        if (exito) {
            alert("Tarea eliminada.");
            listarTareas(userId); 
        } else {
            alert("No se pudo eliminar la tarea.");
        }
    }
};