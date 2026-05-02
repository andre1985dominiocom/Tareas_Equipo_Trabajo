import { getPostsByUser } from "../api/cliente.js";
import { eliminarTarea } from "./eliminar.js";
import { actualizarTarea } from "./actualizar.js";

export const listarTareas = async (userId) => {

    const lista = document.getElementById("contenedor-tareas");
    
    if (!lista) return;
    lista.innerHTML = "";

    const tareas = await getPostsByUser(userId);
    console.log("Tareas obtenidas", tareas);

    tareas.forEach(tarea => {

        const div = document.createElement("div");
        div.classList.add("seccion-lista");

        div.innerHTML = `
            ${tarea.title}
            ${tarea.body}
            <button class="btn-actualizar">Actualizar</button>
            <button class="btn-eliminar">Eliminar</button>`;

        const btnActualizar = div.querySelector(".btn-actualizar");
        const btnEliminar = div.querySelector(".btn-eliminar");

        btnEliminar.addEventListener("click", () => {
            eliminarTarea(tarea.id, tarea.userId);
        });

        btnActualizar.addEventListener("click", () => {
            actualizarTarea(tarea.id, tarea.userId);
        });
        lista.appendChild(div);
    });
};