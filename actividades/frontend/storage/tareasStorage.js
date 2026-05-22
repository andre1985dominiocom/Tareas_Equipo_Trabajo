export const guardarTareasStorage = (userId, tareas) => {
    localStorage.setItem(
        `tareas_user_${userId}`,
        JSON.stringify(tareas)
    );
};

export const obtenerTareasStorage = (userId) => {
    const tareas = localStorage.getItem(
        `tareas_user_${userId}`
    );
    return tareas ? JSON.parse(tareas) : null;
};