export const validarFormulario = (title, body) => {
    const titulo = title.trim();
    const descripcion = body.trim();
    
    if (!titulo || !descripcion) {
        return {
            valido: false,
            mensaje: "Todos los campos son obligatorios"
        };
    }

    if (titulo.length < 3) {
        return {
            valido: false,
            mensaje: "El título es demasiado corto"
        };
    }
    return {
        valido: true
    };
};