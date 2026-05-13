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