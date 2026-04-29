import { getPosts } from "../api/cliente.js";
import { eliminarTarea } from "./eliminar.js";
import { actualizarTarea } from "./actualizar.js";

export const listarTareas = async () => {

    const lista = document.getElementById("contenedor-tareas");
    
    if (!lista) return;
    lista.innerHTML = "";

    const tareas = await getPosts();
    console.log("Tareas obtenidas", tareas);

    tareas.slice(1, 10).array.forEach(tarea => {

        const li = document.createElement("li");
        li.classList.add("seccion-tareas");

        li.innerHTML = `
            ${tarea.title}
            <button class=btn-actualizar">Actualizar</button>
            <button class=btn-eliminar">Eliminar</button>`;

        const btnActualizar = li.querySelector("boton-actualizar-tarea");
        const btnEliminar = li.querySelector("boton-eliminar-tarea");

        btnEliminar.addEventListener("click", () => {
            eliminarTarea(tarea.id, tarea.userId);
        });

        btnActualizar.addEventListener("click", () => {
            actualizarTarea(tarea.id, tarea.userId);
        });
        lista.appendChild();
    });
};