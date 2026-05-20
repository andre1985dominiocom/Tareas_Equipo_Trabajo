export const validarTarea = (data) => {
    const { title, body } = data;
    
    // Limpieza de espacios (trim)
    const tituloLimpio = title?.trim();
    const cuerpoLimpio = body?.trim();

    if (!tituloLimpio || !cuerpoLimpio) {
        return { esValido: false, mensaje: "El título y la descripción son obligatorios." };
    }

    if (tituloLimpio.length < 3) {
        return { esValido: false, mensaje: "El título debe tener al menos 3 caracteres." };
    }

    return {
        esValido: true,
        datos: { title: tituloLimpio, body: cuerpoLimpio }
    };
};

export const validarFormularioTarea = (titulo, descripcion) => {
    const t = titulo.trim();
    const d = descripcion.trim();

    if (t === "" || d === "") {
        return { valido: false, error: "Todos los campos son obligatorios." };
    }
    if (t.length < 3) {
        return { valido: false, error: "El título es demasiado corto." };
    }
    return { valido: true, data: { title: t, body: d } };
};

// RF01: Validación de filtros
export const validarFiltroEstado = (
    estado
) => {

    const estadosValidos = [
        "",
        "Pendiente",
        "En proceso",
        "Completada"
    ];

    return estadosValidos.includes(estado);
};