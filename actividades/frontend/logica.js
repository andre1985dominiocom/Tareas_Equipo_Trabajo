import { listarTareas } from "./tareas/listar.js";
import { crearTarea } from "./tareas/crear.js";

//  Referencias a los elementos
const idUsuarioInput = document.getElementById('id-usuario');
const botonBuscar = document.getElementById('boton-buscar');
const mensajeBusqueda = document.getElementById('mensaje-busqueda');
const formularioTareas = document.getElementById('formulario-tareas');

//variables para podefinir estado de edicion y usuarios que van a ir cambiando, con sus respectivas tareas
let usuarioIdActual = null; 
let modoEdicion = false; 
let tareaIdAEditar = null;

botonBuscar.addEventListener("click", async () => {
    const id = idUsuarioInput.value.trim();
    if (!id) {
        alert("Ingresar un ID de usuario.");
        return;
    }


    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!respuesta.ok) throw new Error("Usuario no encontrado");

        const usuario = await respuesta.json();
        usuarioIdActual = id; // Asociamos el ID

        mensajeBusqueda.innerText = `Usuario: ${usuario.name} encontrado.`;
        mensajeBusqueda.style.color = "green";

        formularioTareas.classList.remove('formulario-desactivado');
        document.querySelectorAll('#formulario-tareas input, #formulario-tareas textarea, #boton-guardar-tarea').forEach(el => el.disabled = false);

        listarTareas(usuarioIdActual);
    } catch (error) {
        console.error(`Error al obtener tareas ${error}`);
        mensajeBusqueda.innerText = "Error: Usuario no encontrado.";
        mensajeBusqueda.style.color = "red";
        usuarioIdActual = null; // Limpiamos el ID asociado
    }

} catch (error) {
    mostrarNotificacion("Error: Usuario no encontrado.", "red");

    formularioTareas.classList.add('formulario-desactivado');
}
});

// Evento para crear tarea
formularioTareas.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!usuarioIdActual) {
        alert("No se ha encontrado un usuario válido. Por favor, busca un usuario antes de crear una tarea.");
        return;
    }

    crearTarea(usuarioIdActual);
});