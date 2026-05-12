import { UI } from "./ui/tareasUI.js";
import { getPostsByUser, createPost, deletePost, updatePost } from "./api/tareasApi.js";

let usuarioIdActual = null;
let tareaIdEditando = null;
let tareasLocales = []; 

// --- FUNCIÓN DE PERSISTENCIA ---
// Guarda las tareas actuales en la memoria del navegador vinculadas al ID del usuario
const guardarEnStorage = (userId, tareas) => {
    localStorage.setItem(`tareas_user_${userId}`, JSON.stringify(tareas));
};

// --- BÚSQUEDA ---
document.getElementById('boton-buscar').addEventListener("click", async () => {
    const input = document.getElementById('id-usuario');
    const id = input.value.trim();
    
    if (!id) return alert("Por favor, ingrese un ID de usuario.");

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) throw new Error("Usuario no encontrado");
        
        const user = await res.json();
        usuarioIdActual = id;
        document.getElementById('mensaje-busqueda').innerText = `Usuario: ${user.name}`;
        
        // --- LÓGICA DE CARGA INTELIGENTE ---
        // 1. Intentamos leer de LocalStorage primero
        const datosGuardados = localStorage.getItem(`tareas_user_${id}`);
        
        if (datosGuardados) {
            tareasLocales = JSON.parse(datosGuardados);
        } else {
            // 2. Si no hay nada guardado, traemos de la API por primera vez
            tareasLocales = await getPostsByUser(id);
            guardarEnStorage(id, tareasLocales);
        }
        
        // Habilitar interfaz
        document.getElementById('formulario-tareas').classList.remove('formulario-desactivado');
        document.querySelectorAll('#formulario-tareas input, #formulario-tareas textarea, #boton-guardar-tarea')
                .forEach(el => el.disabled = false);
        
        UI.resetearFormulario("registro");
        UI.renderizarLista(tareasLocales, acciones);
    } catch (err) {
        document.getElementById('mensaje-busqueda').innerText = "Error: El usuario no existe.";
        document.getElementById('contenedor-tareas').innerHTML = "";
    }
});

// --- ACCIONES CRUD ---
const acciones = {
    onDelete: async (id) => {
        if (!confirm("¿Eliminar esta tarea?")) return;
        // Simulamos éxito en la API
        await deletePost(id); 
        
        // Actualizamos localmente y PERSISTIMOS
        tareasLocales = tareasLocales.filter(t => t.id !== id);
        guardarEnStorage(usuarioIdActual, tareasLocales);
        UI.renderizarLista(tareasLocales, acciones);
    },
    onEdit: (tarea) => {
        tareaIdEditando = tarea.id;
        document.getElementById("titulo-tarea").value = tarea.title;
        document.getElementById("descripcion-tarea").value = tarea.body;
        UI.resetearFormulario("edicion");
        window.scrollTo(0, 0);
    }
};

// crear tarea o el submit
document.getElementById('formulario-tareas').addEventListener("submit", async (e) => {
    e.preventDefault();
    if (tareaIdEnEdicion) return; 

    const nueva = {
        title: document.getElementById("titulo-tarea").value,
        body: document.getElementById("descripcion-tarea").value,
        userId: parseInt(usuarioIdActual)
    };

    const creada = await createPost(nueva);
    if (creada) {
        // Añadimos ID único y guardamos
        const tareaVisual = { ...creada, id: Date.now() };
        tareasLocales.unshift(tareaVisual);
        
        guardarEnStorage(usuarioIdActual, tareasLocales); // PERSISTENCIA
        UI.renderizarLista(tareasLocales, acciones);
        UI.resetearFormulario("registro");
    }
});

// --- ACTUALIZAR TAREA (Botón Naranja) ---
UI.btnActualizar.addEventListener("click", async () => {
    const dataActualizada = {
        title: document.getElementById("titulo-tarea").value,
        body: document.getElementById("descripcion-tarea").value,
        userId: parseInt(usuarioIdActual)
    };

    const exito = await updatePost(tareaIdEditando, dataActualizada);
    if (exito) {
        // Mapeamos los cambios
        tareasLocales = tareasLocales.map(t => 
            t.id === tareaIdEditando ? { ...t, ...dataActualizada } : t
        );
        
        guardarEnStorage(usuarioIdActual, tareasLocales); // PERSISTENCIA
        tareaIdEditando = null;
        UI.resetearFormulario("registro");
        UI.renderizarLista(tareasLocales, acciones);
    }
});