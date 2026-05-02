import { createPost } from "../api/cliente.js";
import { listarTareas } from "./listar.js";

export const crearTarea = async (usuariosIdActual) => {
    // 1. Referencias a los inputs (asegúrate de que estos IDs existan en tu HTML)
    const inputTitulo = document.getElementById("titulo-tarea");
    const inputDescripcion = document.getElementById("descripcion-tarea");

    // 2. Validación: Si no hay título o no hay usuario seleccionado, no hacemos nada
    if (!inputTitulo.value.trim() || !inputDescripcion.value.trim()) {
        alert("Todos los campos son obligatorios.");
        return;
    }
    
    // 3. Creamos el objeto con los datos reales
    const nuevaTarea = {
        userId: parseInt(usuariosIdActual), // El ID que recibimos como parámetro
        title: inputTitulo.value,
        body: inputDescripcion.value // Usamos la descripción del textarea
    };

    // 4. Enviamos a la API
    const resultado = await createPost(nuevaTarea); 

    if (resultado) {
        alert("¡Tarea creada con éxito!");
        // 5. Limpiamos los campos del formulario
        inputTitulo.value = "";
        inputDescripcion.value = "";
        
        // 6. Refrescamos la lista para ver la nueva tarea
        listarTareas(usuariosIdActual);
    } else {
        alert("Hubo un error al crear la tarea.");
    }
}