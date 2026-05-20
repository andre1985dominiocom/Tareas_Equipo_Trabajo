export const filtrosUI = {
    estado: document.getElementById("filtro-estado"),
    usuario: document.getElementById("filtro-usuario"),
    orden: document.getElementById("orden-tareas"),

    obtenerFiltros: () => {
        return {
            estado: filtrosUI.estado.value,
            usuario: filtrosUI.usuario.value
        };
    },

    limpiarFiltros() {
            filtrosUI.estado.value = "";
            filtrosUI.usuario.value = "";
    },

    obtenerOrden() {
        return filtrosUI.orden.value;
    },

    onchange(callback) {
    
        filtrosUI.estado.addEventListener("change",
            callback
        );
    
        filtrosUI.usuario.addEventListener("change",
            callback
        );
    
        filtrosUI.orden.addEventListener("change",
            callback
        );
    }
};