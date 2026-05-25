import {
    getUserById,
    getPostsByUser,
    createPost,
    updatePost,
    deletePost
} from "../api/index.js";

import {
    guardarTareasStorage,
    obtenerTareasStorage
} from "../storage/index.js";

import {
    asignarEstado
} from "../utils/index.js";

let tareasLocales = [];

let usuarioActual = null;

let tareaEditando = null;

export const state = {

    get tareas() {
        return tareasLocales;
    },

    get usuario() {
        return usuarioActual;
    }
};

export const buscarUsuario = async (id) => {

    const usuario = await getUserById(id);

    usuarioActual = id;

    const storage =
        obtenerTareasStorage(id);

    if (storage) {

        tareasLocales = storage;

    } else {

        const tareasAPI =
            await getPostsByUser(id);

        tareasLocales = tareasAPI.map(t => ({
            ...t,
            estado: asignarEstado(t.id),
            fechaCreacion:
                new Date().toISOString()
        }));

        guardarTareasStorage(
            id,
            tareasLocales
        );
    }

    return usuario;
};

export const crearTarea = async (data) => {

    const creada = await createPost(data);

    const nuevaTarea = {

        ...data,

        id: creada.id || Date.now()
    };

    tareasLocales.unshift(nuevaTarea);

    guardarTareasStorage(
        usuarioActual,
        tareasLocales
    );
};

export const editarTarea = (tarea) => {

    tareaEditando = tarea.id;

    return tarea;
};

export const actualizarTarea = async (data) => {

    await updatePost(
        tareaEditando,
        data
    );

    tareasLocales =
        tareasLocales.map(t =>

            t.id === tareaEditando

                ? { ...t, ...data }

                : t
        );

    guardarTareasStorage(
        usuarioActual,
        tareasLocales
    );

    tareaEditando = null;
};

export const eliminarTarea = async (id) => {

    await deletePost(id);

    tareasLocales =
        tareasLocales.filter(
            t => t.id !== id
        );

    guardarTareasStorage(
        usuarioActual,
        tareasLocales
    );
};