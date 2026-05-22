export const ordenarTareas = (tareas, criterio) => {
    const copia = [...tareas];

    switch (criterio) {
        case "nombre":
            return copia.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        case "estado":
            return copia.sort((a, b) =>
                a.estado.localeCompare(b.estado)
            );
        case "fecha":
            return copia.sort((a, b) =>
                new Date(b.fechaCreacion) -
                new Date(a.fechaCreacion)
            );
        default:
            return copia;
    }
};

export const filtrarTareas = (tareas, filtros) => {
    return tareas.filter(tarea => {

        const coincideEstado =
            !filtros.estado ||
            tarea.estado.toLowerCase() ===
            filtros.estado.toLowerCase();

        const coincideUsuario =
            !filtros.usuario ||
            tarea.userId === parseInt(filtros.usuario);

        return coincideEstado && coincideUsuario;
    });
};

export const exportarJSON = (tareas) => {

    const json = JSON.stringify(tareas, null, 2);
    const blob = new Blob(
        [json],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "tareas.json";
    enlace.click();
    URL.revokeObjectURL(url);
};