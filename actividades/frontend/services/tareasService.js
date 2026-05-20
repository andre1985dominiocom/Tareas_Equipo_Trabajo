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
export const filtrarTareasServicio = async (filtros) => {
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

// RF02: Ordenar tareas por diferentes criterios
export const ordenarTareasServicio = (
    tareas,
    criterio
) => {

    const copia = [...tareas];

    switch (criterio) {

        case "nombre":

            return copia.sort((a, b) =>
                (a.title || "").localeCompare(b.title || "")
            );

        case "estado":

            return copia.sort((a, b) =>

                (a.estado || "").localeCompare(b.estado || "")
            );

        case "fecha":

            new Date(a.fechaCreacion || 0);
            
            -
            
            new Date(b.fechaCreacion || 0);

        default:
            return copia;
    }
};

//exportacion de tares 
export const exportarTareasJsonServicio = (tareasVisibles) => {

    //validamos que el arreglo tenga datos antes de procesarlos
    if(!tareasVisibles || tareasVisibles.length === 0) {
        throw new Error("no hay tareas disponibles para exportar");
    }
    //convertimos el arreglo de objetos en una cadena de texto
    const jsonString = JSON.stringify(tareasVisibles, null, 2);

    const blob = new Blob([jsonString], {type: "aplication/json"});
    //generamos una url temporal que apunta directamente a ese archivo
    const url = URL.createObjectURL(blob);

    //creamos un elemento <a> invisible en el html 
    const enlace = document.createElement("a");
    //se le asigan una url de descarga
    enlace.href = url;
    //definimos el nombre que tendra el archvivo al moment de realizar la desacarga (incluye fecha y hora)
    enlace.download = `tareas_pantalla_${new Date().toISOString().slice(0,10)}.json`
//insertamos el enlace en el documento de forma temporal para que el navegador lo reconozca
    document.body.appendChild(enlace);
    //simulamos un click en el enlace para iniciar la descarga
    enlace.click();
    //se limpia el html eliminando e enlace temporal y se liberal la memoria cache
    document.body.removeChild(enlace);
    URL.revokeObjectURL(url);

}