import { UI, filtrosUI } from "./ui/index.js";
import { buscarUsuario, crearTarea, actualizarTarea, eliminarTarea, editarTarea, state } from "./controllers/index.js";
import { validarFormulario } from "./validators/index.js";
import { filtrarTareas, ordenarTareas, exportarJSON } from "./services/index.js";
import { asignarEstado } from "./utils/index.js";

let modoEdicion = false;

document
    .getElementById("boton-buscar")
    .addEventListener("click", async () => {

        try {
            const id =
                document.getElementById("id-usuario")
                .value
                .trim();
            const usuario =
                await buscarUsuario(id);
            UI.mensajeBusqueda.innerText =
                `Usuario encontrado: ${usuario.name}`;
            renderizar();
        } catch (error) {
            UI.mensajeBusqueda.innerText =
                "Usuario no encontrado";
        }
    });

UI.formulario
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        if (modoEdicion) return;

        const titulo =
            UI.inputTitulo.value;

        const descripcion =
            UI.inputDescripcion.value;

        const validacion =
            validarFormulario(
                titulo,
                descripcion
            );

        if (!validacion.valido) {

            alert(validacion.mensaje);

            return;
        }

        await crearTarea({

            title: titulo,

            body: descripcion,

            userId: parseInt(state.usuario),

            estado: "Pendiente",

            fechaCreacion:
                new Date().toISOString()
        });

        renderizar();

        UI.limpiarFormulario();
    });

UI.btnActualizar
    .addEventListener("click", async () => {

        const titulo =
            UI.inputTitulo.value;

        const descripcion =
            UI.inputDescripcion.value;

        await actualizarTarea({

            title: titulo,

            body: descripcion,

            userId: parseInt(state.usuario)
        });

        modoEdicion = false;

        renderizar();

        UI.limpiarFormulario();
    });

const acciones = {

    eliminar: async (id) => {

        await eliminarTarea(id);

        renderizar();
    },

    editar: (tarea) => {

        modoEdicion = true;

        editarTarea(tarea);

        UI.inputTitulo.value =
            tarea.title;

        UI.inputDescripcion.value =
            tarea.body;
    }
};

const renderizar = () => {

    const filtros =
        filtrosUI.obtenerFiltros();

    const orden =
        filtrosUI.obtenerOrden();

    let tareas =
        [...state.tareas];

    tareas =
        filtrarTareas(
            tareas,
            filtros
        );

    tareas =
        ordenarTareas(
            tareas,
            orden
        );

    UI.renderizarTareas(
        tareas,
        acciones
    );
};

filtrosUI.onchange(renderizar);

UI.btnExportar
    .addEventListener("click", () => {

        exportarJSON(state.tareas);
    });