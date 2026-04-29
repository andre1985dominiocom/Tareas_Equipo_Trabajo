// Referencias a los elementos
const idUsuarioInput = document.getElementById('id-usuario');
const botonBuscar = document.getElementById('boton-buscar');
const mensajeBusqueda = document.getElementById('mensaje-busqueda');
const formularioTareas = document.getElementById('formulario-tareas');
const listaTareas = document.getElementById('contenedor-tareas');
const mensajeTarea = document.getElementById('mensaje-tarea');

//variables para podefinir estado de edicion y usuarios que van a ir cambiando, con sus respectivas tareas
let usuarioIdActual = null; 
let modoEdicion = false; 
let tareaIdAEditar = null;

//una url base, que se podra manipular
const API_URL = "http://localhost:3000/api";

// rfn-03
function mostrarNotificacion(mensaje, tipo = "success") {
    mensajeBusqueda.innerText = mensaje;
    mensajeBusqueda.style.color = tipo === "success" ? "green" : "red";
    setTimeout(() => mensajeBusqueda.innerText = "", 3000);
}

// con esta funcion obtengo los datos
async function obtenerTareasPorUsuario(userId) {
    try {
        // Usamos la ruta de posts general y filtramos por userId
        const respuesta = await fetch(`${API_URL}/posts`);
        const tareas = await respuesta.json();
        const tareasFiltradas = tareas.filter(t => t.userId == userId);

        renderizarTareas(tareasFiltradas);
    } catch (error) {
        console.error(`Error al obtener tareas: ${error}`);
    } 
}

// funcion para renderizar el dom
function renderizarTareas(tareas) {
    listaTareas.innerHTML = "";
    if (tareas.length === 0) {
        listaTareas.innerHTML = "<p>No hay tareas registradas para este usuario.</p>";
        return;
    }

    //bucle para imprimir tareas registradas/asignadas por el usuario 
    tareas.forEach(tarea => {
        const div = document.createElement("div");
        div.classList.add("tarjeta-tarea");
        div.innerHTML = `   
            <div id="tarea-${tarea.id}">
                <h3>${tarea.title}</h3>
                <p>${tarea.body}</p>
                <button onclick="prepararEdicion(${tarea.id}, '${tarea.title}', '${tarea.body}')" style="background: #007bff; color: white; border: none; padding: 5px; cursor: pointer;">Editar</button>
            </div>
        `;
        listaTareas.appendChild(div);
    });
}

// para preparas la edicion
window.prepararEdicion = (id, titulo, cuerpo) => {
    modoEdicion = true;
    tareaIdAEditar = id;
    // cargamos los datos actuales en los inputs
    document.getElementById('titulo-tarea').value = titulo;
    document.getElementById('descripcion-tarea').value = cuerpo;

    // cambio visual: avisamos al usuario que está editando
    const boton = document.getElementById('boton-guardar-tarea');
    boton.innerText = "Actualizar Tarea";
    boton.style.backgroundColor = "#ffc107"; // un colorcito naranja para "advertencia/edición"
    boton.style.color = "black";

    // hace foco en el input para que empiece a escribir
    document.getElementById('titulo-tarea').focus();
    
    mostrarNotificacion("Editando tarea #" + id, "success");
}

// busqueda y habilitacion
botonBuscar.addEventListener('click', async () => {
    const id = idUsuarioInput.value;
    if (!id) return mostrarNotificacion("Ingresa un ID", "red");
    
    try {
        const respuesta = await fetch(`${API_URL}/users`);
        const usuarios = await respuesta.json();
        const usuario = usuarios.find(u => u.id == id);

        if (usuario) {
            usuarioIdActual = id;
            mostrarNotificacion(`Usuario: ${usuario.name} encontrado.`, "success");

            // activacion del formulario
            formularioTareas.classList.remove('formulario-desactivado');
            document.querySelectorAll('#formulario-tareas input, #formulario-tareas textarea, #boton-guardar-tarea')
                    .forEach(el => el.disabled = false);

            // cargar tareas automáticamente al encontrar usuario
            obtenerTareasPorUsuario(id);
        } else {
            throw new Error("No existe");
        }
    } catch (error) {
        mostrarNotificacion("Error: Usuario no encontrado.", "red");
        formularioTareas.classList.add('formulario-desactivado');
    }
});

// evniar por medio de post y put
formularioTareas.addEventListener('submit', async (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo-tarea').value.trim();
    const descripcion = document.getElementById('descripcion-tarea').value.trim();

    if (!titulo || !descripcion) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const datosTarea = {
        userId: parseInt(usuarioIdActual),
        title: titulo,
        body: descripcion
    };

    try {
        // si modoEdicion es true, usamos PUT, sino POST (rf-03)
        const metodo = modoEdicion ? 'PUT' : 'POST';
        const url = modoEdicion ? `${API_URL}/posts/${tareaIdAEditar}` : `${API_URL}/posts`;

        const respuesta = await fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosTarea)
        });

        if (respuesta.ok) {
            alert(modoEdicion ? "¡Tarea actualizada correctamente!" : "¡Tarea registrada con éxito!");
            
            // resetear el estado
            modoEdicion = false;
            tareaIdAEditar = null;

            // devuelvo el botón a su estado original
            const boton = document.getElementById('boton-guardar-tarea');
            boton.innerText = "Guardar Tarea";
            boton.style.backgroundColor = "#28a745"; 
            boton.style.color = "white";
            
            formularioTareas.reset();

            
            // recargar lista para ver cambios
            obtenerTareasPorUsuario(usuarioIdActual);
        }
    } catch (error) {
        alert("Error de comunicación con el servidor.");
    }
});