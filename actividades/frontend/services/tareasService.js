import { getAllPosts,
        getPostsByUser,
        createPost,
        deletePost,
        updatePost
    } from "../api/tareasApi.js";

// El servicio solo retorna datos o confirma operaciones
export const obtenerTareasServicio = async (userId) => {
    return await getPostsByUser(userId);
};

// RF01: Filtro avanzado de tareas
export const filtarTareasServicio = async (filtros) => {
    const tareas = await getAllPosts();

    const tareasConEstado = tareas.map(tarea => ({
        ...tarea,
        estado: ["Pendiente", "En Proceso", "Completada"] [
            tarea.id % 3
        ]
    }));

    return tareasConEstado.filter(tarea => {
        const coincideEstado =
            !filtros.estado || tarea.estado === filtros.estado;

        const coincideUsuario =
            !filtros.usuario || tarea.userId === parseInt(filtros.usuario);
            return coincideEstado && coincideUsuario;
    });
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