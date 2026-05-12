// import { getPostsByUser,
//         createPost,
//         deletePost,
//         updatePost } from "../api/tareasApi.js";

// // Exportamos la función listarTareas para que pueda ser utilizada en otras partes de la aplicación
// export const listarTareas = async (userId) => {

//     const lista = document.getElementById("contenedor-tareas");
    
//     if (!lista) return;
//     lista.innerHTML = "";

//     const tareas = await getPostsByUser(userId);
//     console.log("Tareas obtenidas", tareas);

//     tareas.forEach(tarea => {

//         const div = document.createElement("div");
//         div.classList.add("seccion-lista");

//         div.innerHTML = `
//             ${tarea.title}
//             ${tarea.body}
//             <button class="btn-actualizar">Actualizar</button>
//             <button class="btn-eliminar">Eliminar</button>`;

//         const btnActualizar = div.querySelector(".btn-actualizar");
//         const btnEliminar = div.querySelector(".btn-eliminar");

//         btnEliminar.addEventListener("click", () => {
//             eliminarTarea(tarea.id, tarea.userId);
//         });

//         btnActualizar.addEventListener("click", () => {
//             actualizarTarea(tarea.id, tarea.userId);
//         });
//         lista.appendChild(div);
//     });
// };

// // Exportamos la función crearTarea para que pueda ser utilizada en otras partes de la aplicación
// export const crearTarea = async (usuariosIdActual) => {
//     // 1. Referencias a los inputs que existen en el HTML
//     const inputTitulo = document.getElementById("titulo-tarea");
//     const inputDescripcion = document.getElementById("descripcion-tarea");

//     // 2. Validación: Si no hay título o no hay descripción no se realiza la creación de la tarea
//     if (!inputTitulo.value.trim() || !inputDescripcion.value.trim()) {
//         alert("Todos los campos son obligatorios.");
//         return;
//     }
    
//     // 3. Creamos el objeto con los datos reales para enviar a la API
//     const nuevaTarea = {
//         userId: parseInt(usuariosIdActual), // El ID que recibimos como parámetro
//         title: inputTitulo.value, // Usamos el título del input
//         body: inputDescripcion.value // Usamos la descripción del textarea
//     };

//     // 4. Enviamos la nueva tarea a la API utilizando la función createPost
//     const resultado = await createPost(nuevaTarea);

//     if (resultado) {
//         alert("¡Tarea creada con éxito!");
//         // 5. Limpiamos los campos del formulario para que el usuario pueda ingresar una nueva tarea
//         // sin tener que borrar los datos anteriores
//         inputTitulo.value = "";
//         inputDescripcion.value = "";
        
//         // 6. Refrescamos la lista para ver la nueva tarea utilizando la función listarTareas
//         // y pasando el ID del usuario actual
//         listarTareas(usuariosIdActual);
//     } else {
//         alert("Hubo un error al crear la tarea.");
//     }
// }

// // Exportamos la función actualizarTarea para que pueda ser utilizada en otras partes de la aplicación
// export const actualizarTarea = async (id, usuarioIdActual) => {
//     const nuevaTarea = prompt("Ingresar la nueva tarea: ");
//     const nuevaDescripcion = prompt("Ingresar la nueva descripción: ");

//     if (!nuevaTarea || !nuevaDescripcion) return;

//     await updatePost(id, {
//         userId: parseInt(usuarioIdActual),
//         title: nuevaTarea,
//         body: nuevaDescripcion
//     });
//     listarTareas(usuarioIdActual);
// }

// // Exportamos la función eliminarTarea para que pueda ser utilizada en otras partes de la aplicación
// export const eliminarTarea = async (id, userId) => {
    
//     if (!id || !userId) {
//         console.error("ID o userId inválido.");
//         return;
//     }
//     const confirmacion = confirm("¿Estás seguro de eliminar esta tarea?");

//     if(!confirmacion) return;

//     try {
//         const exito = await deletePost(id);

//         if (exito) {
//             alert("¡Tarea eliminada con éxito!");
//             listarTareas(userId);
//         } else {
//             alert("Hubo un error al eliminar la tarea.");
//         }
//     } catch (error) {
//         console.error("Error al eliminar la tarea:", error);
//         alert("Hubo un error al conectar con el servidor.");
//     }
// };
import { getPostsByUser, createPost, deletePost, updatePost } from "../api/tareasApi.js";

// El servicio solo retorna datos o confirma operaciones
export const obtenerTareasServicio = async (userId) => {
    return await getPostsByUser(userId);
};

export const crearTareaServicio = async (userId, titulo, descripcion) => {
    const nuevaTarea = {
        userId: parseInt(userId),
        title: titulo.trim(),
        body: descripcion.trim()
    };
    return await createPost(nuevaTarea);
};

export const eliminarTareaServicio = async (id) => {
    return await deletePost(id);
};

export const actualizarTareaServicio = async (id, datos) => {
    return await updatePost(id, datos);
};