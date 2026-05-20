import { UI } from "./ui/tareasUI.js";

import { filtrosUI } from "./ui/filtrosUI.js";


import {
    ordenarTareasServicio,
    exportarTareasJsonServicio //importamos el servicio de exportar tareas a json
} from "./services/tareasService.js";

import {
    getPostsByUser,
    createPost,
    deletePost,
    updatePost
} from "./api/tareasApi.js";

let usuarioIdActual = null;

let tareaIdEditando = null;

let tareasLocales = [];

// ===============================
// STORAGE
// ===============================

const guardarEnStorage = (
    userId,
    tareas
) => {

    localStorage.setItem(
        `tareas_user_${userId}`,
        JSON.stringify(tareas)
    );
};

// ===============================
// BUSCAR USUARIO
// ===============================

document
    .getElementById("boton-buscar")

    .addEventListener(
        "click",
        async () => {

            const input =
                document.getElementById(
                    "id-usuario"
                );

            const id =
                input.value.trim();

            if (!id) {

                alert(
                    "Por favor ingrese un ID."
                );

                return;
            }

            try {

                const res =
                    await fetch(
                        `https://jsonplaceholder.typicode.com/users/${id}`
                    );

                if (!res.ok) {

                    throw new Error(
                        "Usuario no encontrado"
                    );
                }

                const user =
                    await res.json();

                usuarioIdActual = id;

                document.getElementById(
                    "mensaje-busqueda"
                ).innerText =
                    `Usuario encontrado: ${user.name}`;

                // ===============================
                // CARGAR DESDE STORAGE
                // ===============================

                const datosGuardados =
                    localStorage.getItem(
                        `tareas_user_${id}`
                    );

                if (datosGuardados) {

                    tareasLocales =
                        JSON.parse(
                            datosGuardados
                        );

                } else {

                    // ===============================
                    // CARGAR DESDE API
                    // ===============================

                    const tareasAPI =
                        await getPostsByUser(id);

                    tareasLocales =
                        tareasAPI.map(
                            tarea => ({
                                ...tarea,

                                estado:
                                    [
                                        "Pendiente",
                                        "En Proceso",
                                        "Completada"
                                    ][
                                        tarea.id % 3
                                    ],

                                fechaCreacion:
                                    new Date()
                                    .toISOString()
                            })
                        );

                    guardarEnStorage(
                        id,
                        tareasLocales
                    );
                }

                // ===============================
                // HABILITAR FORMULARIO
                // ===============================

                document
                    .getElementById(
                        "formulario-tareas"
                    )
                    .classList.remove(
                        "formulario-desactivado"
                    );

                document
                    .querySelectorAll(
                        "#formulario-tareas input, #formulario-tareas textarea, #boton-guardar-tarea"
                    )
                    .forEach(
                        el =>
                            el.disabled = false
                    );

                UI.resetearFormulario(
                    "registro"
                );

                UI.renderizarLista(
                    tareasLocales,
                    acciones
                );

            } catch (error) {

                document.getElementById(
                    "mensaje-busqueda"
                ).innerText =
                    "Error: usuario no encontrado.";

                document.getElementById(
                    "contenedor-tareas"
                ).innerHTML = "";

                //se deshabiita el boton exportat si ocurre un error de busqueda
                if(UI.btnExportar) UI.btnExportar.disabled = true;
            }
        }
    );

// ===============================
// ACCIONES CRUD
// ===============================

const acciones = {

    // ===============================
    // ELIMINAR
    // ===============================

    onDelete: async (id) => {

        if (
            !confirm(
                "¿Eliminar esta tarea?"
            )
        ) return;

        await deletePost(id);

        tareasLocales =
            tareasLocales.filter(
                t => t.id !== id
            );

        guardarEnStorage(
            usuarioIdActual,
            tareasLocales
        );

        UI.renderizarLista(
            tareasLocales,
            acciones
        );
    },

    // ===============================
    // EDITAR
    // ===============================

    onEdit: (tarea) => {

        tareaIdEditando =
            tarea.id;

        document.getElementById(
            "titulo-tarea"
        ).value =
            tarea.title;

        document.getElementById(
            "descripcion-tarea"
        ).value =
            tarea.body;

        UI.resetearFormulario(
            "edicion"
        );

        window.scrollTo(0, 0);
    }
};

// ===============================
// CREAR TAREA
// ===============================

document
    .getElementById(
        "formulario-tareas"
    )

    .addEventListener(
        "submit",
        async (e) => {

            e.preventDefault();

            // Si estamos editando
            // NO crear nueva tarea

            if (tareaIdEditando) return;

            const nueva = {

                title:
                    document.getElementById(
                        "titulo-tarea"
                    ).value.trim(),

                body:
                    document.getElementById(
                        "descripcion-tarea"
                    ).value.trim(),

                userId:
                    parseInt(
                        usuarioIdActual
                    ),

                estado:
                    "Pendiente",

                fechaCreacion:
                    new Date()
                    .toISOString()
            };

            const creada =
                await createPost(
                    nueva
                );

            if (creada) {

                // IMPORTANTE:
                // usamos el ID
                // devuelto por la API

                const tareaVisual = {

                    ...nueva,

                    id:
                        creada.id || Math.random()
                };

                tareasLocales.unshift(
                    tareaVisual
                );

                guardarEnStorage(
                    usuarioIdActual,
                    tareasLocales
                );

                UI.renderizarLista(
                    tareasLocales,
                    acciones
                );

                UI.resetearFormulario(
                    "registro"
                );
            }
        }
    );

// ===============================
// ACTUALIZAR TAREA
// ===============================

UI.btnActualizar
    .addEventListener(
        "click",
        async () => {

            if (
                !tareaIdEditando
            ) return;

            const dataActualizada = {

                title:
                    document.getElementById(
                        "titulo-tarea"
                    ).value.trim(),

                body:
                    document.getElementById(
                        "descripcion-tarea"
                    ).value.trim(),

                userId:
                    parseInt(
                        usuarioIdActual
                    )
            };

            const exito =
                await updatePost(
                    tareaIdEditando,
                    dataActualizada
                );

            if (exito) {

                tareasLocales =
                    tareasLocales.map(
                        t =>

                            t.id ===
                            tareaIdEditando

                                ? {
                                    ...t,
                                    ...dataActualizada
                                }

                                : t
                    );

                guardarEnStorage(
                    usuarioIdActual,
                    tareasLocales
                );

                tareaIdEditando =
                    null;

                UI.resetearFormulario(
                    "registro"
                );

                UI.renderizarLista(
                    tareasLocales,
                    acciones
                );
            }
        }
    );

const actualizarVista = () => {

    const filtros =
        filtrosUI.obtenerFiltros();

    const orden =
        filtrosUI.obtenerOrden();

    let tareas = [...tareasLocales];

    // =========================
    // FILTRAR POR ESTADO
    // =========================

    if (filtros.estado) {

        tareas = tareas.filter(
            t => t.estado?.toLowerCase() === filtros.estado.toLowerCase()
        );
    }

    // =========================
    // FILTRAR POR USUARIO
    // =========================

    if (filtros.usuario) {

        tareas = tareas.filter(
            t =>
                t.userId ===
                parseInt(filtros.usuario)
        );
    }

    // =========================
    // ORDENAR
    // =========================

    tareas = ordenarTareasServicio(
        tareas,
        orden
    );

    UI.renderizarLista(
        tareas,
        acciones
    );
};

filtrosUI.onchange(
    actualizarVista
);

//nuevo evento para exportar taraeas a json
//agregamos el evento al detectar el click, cuando el usuario hace click en el boton exportar
UI.btnExportar.addEventListener("click", () => {
    try{
        //guardaamos en una const tareasParaExportar, el arreglo exacto de las tareas que la UI, tiene renderizadas, es decir la que se nos muestra en pantalla.
        const tareasParaExportar = UI.tareasActualesEnPantalla();
        //por medio de un condicoal if, verificamos que el arrglo contenga informacion, antes de porecsarlo
        if(!tareasParaExportar || tareasParaExportar.length === 0 ){
            alert("no hay tareas visibles en la pantalla para exportar.");
            return;
        }
    
        //si el arreglo si tiene las tareas, entonces llamsmos al servicio exportarTareasJsonServicio, pasandole el arreglo de tareas que queremos exportar
        exportarTareasJsonServicio(tareasParaExportar);
    }catch(error){
        alert("ocurrio un error al tratar de exportar las tareas: " + error.message);
    }
    
});