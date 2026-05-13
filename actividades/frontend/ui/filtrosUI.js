export const filtrosUI = {
    estado: document.getElementById("filtro-estado"),
    usuario: document.getElementById("filtro-usuario"),
    orden: document.getElementById("orden-tareas"),

    obtenerFiltros: () => {
        return {
            estado: this.estado.value,
            usuario: this.usuario.value
        };
    },

    limpiarFiltros: () => {
        this.estado.value = "";
        this.usuario.value = "";
    },

    obtenerOrden() {
        return this.orden.value;
    },

    onchange(callback) {

        this.estado.addEventListener("change",
            callback
        );

        this.usuario.addEventListener("change",
            callback
        );

        this.orden.addEventListener("change",
            callback
        );
    }
};