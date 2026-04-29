import { createPost } from "../api/cliente.js";
import { listarTareas } from "./listar.js";

export const crearTarea = async () => {
    // 1. Referencias a los inputs (asegúrate de que estos IDs existan en tu HTML)
    const inputTitulo = document.getElementById("titulo-tarea");
    const inputDescripcion = document.getElementById("descripcion-tarea");
    const inputUsuarioId = document.getElementById("id-usuario"); // El ID del usuario buscado

    // 2. Validación: Si no hay título o no hay usuario seleccionado, no hacemos nada
    if (!inputTitulo.value.trim() || !inputUsuarioId.value) {
        alert("Por favor, busca un usuario e ingresa un título para la tarea.");
        return;
    }
    
    // 3. Creamos el objeto con los datos reales
    const nuevaTarea = {
        userId: parseInt(inputUsuarioId.value), // El ID que buscaste arriba
        title: inputTitulo.value,
        body: inputDescripcion.value || "Sin descripción" // Usamos la descripción del textarea
    };

    // 4. Enviamos a la API
    const resultado = await createPost(nuevaTarea);

    if (resultado) {
        alert("¡Tarea creada con éxito!");
        // 5. Limpiamos los campos del formulario
        inputTitulo.value = "";
        inputDescripcion.value = "";
        
        // 6. Refrescamos la lista para ver la nueva tarea
        listarTareas(); 
    } else {
        alert("Hubo un error al crear la tarea.");
    }
}