export const filtrosUI = {
    estado: document.getElementById("filtro-estado"),
    usuario: document.getElementById("filtro-usuario"),

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

    onchange(callback) {

        this.estado.addEventListener("change",
            callback
        );

        this.usuario.addEventListener("change",
            callback
        );
    }
};