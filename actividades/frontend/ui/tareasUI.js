export const UI = {

    formulario:
        document.getElementById("formulario-tareas"),

    inputTitulo:
        document.getElementById("titulo-tarea"),

    inputDescripcion:
        document.getElementById("descripcion-tarea"),

    btnGuardar:
        document.getElementById("boton-guardar-tarea"),

    btnActualizar:
        document.getElementById("boton-actualizar-tarea"),

    btnExportar:
        document.getElementById("boton-exportar-tareas"),

    contenedor:
        document.getElementById("contenedor-tareas"),

    mensajeBusqueda:
        document.getElementById("mensaje-busqueda"),

    renderizarTareas(tareas, acciones) {

        UI.contenedor.innerHTML = "";

        if (!tareas.length) {

            UI.contenedor.innerHTML =
                "<p>No hay tareas.</p>";

            return;
        }

        tareas.forEach(tarea => {

            const div = document.createElement("div");

            div.classList.add("seccion-lista");

            div.innerHTML = `
                <h4>${tarea.title}</h4>

                <p>${tarea.body}</p>

                <p>
                    <strong>Estado:</strong>
                    ${tarea.estado}
                </p>

                <button class="editar">
                    Editar
                </button>

                <button class="eliminar">
                    Eliminar
                </button>
            `;

            div.querySelector(".editar")
                .addEventListener("click", () =>
                    acciones.editar(tarea)
                );

            div.querySelector(".eliminar")
                .addEventListener("click", () =>
                    acciones.eliminar(tarea.id)
                );

            UI.contenedor.appendChild(div);
        });
    },

    limpiarFormulario() {

        UI.formulario.reset();
    }
};