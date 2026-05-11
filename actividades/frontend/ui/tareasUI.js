// // Este módulo TIENE la responsabilidad de tocar el DOM
// export const UI = {
//     setModoFormulario: (editando = false) => {
//         const tituloForm = document.querySelector(".seccion-tareas h2");
//         const btnGuardar = document.getElementById("boton-guardar-tarea");
        
        
//         if (editando) {
//             tituloForm.innerText = "Edición Tarea";
//             btnGuardar.innerText = "Actualizar Cambios";
//             // Ocultamos todos los botones de la lista para forzar el foco en la edición
//             document.querySelectorAll(".contenedor-btn").forEach(el => el.style.display = "none");
//         } else {
//             tituloForm.innerText = "Registrar Nueva Tarea";
//             tituloForm.style.color = "inherit";
//             btnGuardar.innerText = "Guardar Tarea";
//         }
//     },

//     renderizarLista: (tareas, acciones) => {
//         const contenedor = document.getElementById("contenedor-tareas");
//         contenedor.innerHTML = ""; 

//         tareas.forEach(tarea => {
//             const div = document.createElement("div");
//             div.className = "seccion-lista"; 
//             div.innerHTML = `
//                 <h4>${tarea.title}</h4>
//                 <p>${tarea.body}</p>
//                 <div class="contenedor-btn">
//                     <button type="button" class="btn-actualizar" data-id="${tarea.id}">Editar</button>
//                     <button type="button" class="btn-eliminar" data-id="${tarea.id}">Eliminar</button>
//                 </div>
//             `;

//             div.querySelector(".btn-eliminar").onclick = () => acciones.onDelete(tarea.id);
//             div.querySelector(".btn-actualizar").onclick = () => acciones.onEdit(tarea);
//             contenedor.appendChild(div);
//         });
//     },

//     prepararFormularioParaEdicion: (tarea) => {
//         document.getElementById("titulo-tarea").value = tarea.title;
//         document.getElementById("descripcion-tarea").value = tarea.body;
//         const btn = document.getElementById("boton-guardar-tarea");
//         btn.innerText = "Actualizar Tarea";
//         btn.classList.add("btn-actualizar");
//     },

//     resetearFormulario: () => {
//         document.getElementById("formulario-tareas").reset();
//         const btn = document.getElementById("boton-guardar-tarea");
//         btn.innerText = "Guardar Tarea";
//         btn.classList.remove("btn-actualizar");
//     },

//     limpiarFormulario: () => {
//         document.getElementById("formulario-tareas").reset();
//         UI.setModoFormulario(false);
//     }
// };

export const UI = {
    btnGuardar: document.getElementById("boton-guardar-tarea"),
    btnActualizar: document.getElementById("boton-actualizar-tarea"),
    tituloForm: document.querySelector(".seccion-tareas h2"),

    // Limpia y ajusta el formulario
    resetearFormulario: (modo = "registro") => {
        document.getElementById("formulario-tareas").reset();
        if (modo === "edicion") {
            UI.tituloForm.innerText = "📝 Editando Tarea";
            UI.btnGuardar.style.display = "none";
            UI.btnActualizar.style.display = "block";
        } else {
            UI.tituloForm.innerText = "Registrar Nueva Tarea";
            UI.btnGuardar.style.display = "block";
            UI.btnActualizar.style.display = "none";
        }
    },

    renderizarLista: (tareas, acciones) => {
        const contenedor = document.getElementById("contenedor-tareas");
        contenedor.innerHTML = "";

        if (tareas.length === 0) {
            contenedor.innerHTML = "<p>No hay tareas para mostrar.</p>";
            return;
        }

        tareas.forEach(tarea => {
            const div = document.createElement("div");
            div.className = "seccion-lista";
            div.innerHTML = `
                <h4>${tarea.title}</h4>
                <p>${tarea.body}</p>
                <div class="contenedor-btn">
                    <button type="button" class="btn-actualizar">Editar</button>
                    <button type="button" class="btn-eliminar">Eliminar</button>
                </div>
            `;

            div.querySelector(".btn-eliminar").onclick = () => acciones.onDelete(tarea.id);
            div.querySelector(".btn-actualizar").onclick = () => acciones.onEdit(tarea);
            contenedor.appendChild(div);
        });
    }
};