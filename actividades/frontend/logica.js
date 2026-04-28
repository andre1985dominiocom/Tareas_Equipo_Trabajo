//  Referencias a los elementos
const idUsuarioInput = document.getElementById('id-usuario');
const botonBuscar = document.getElementById('boton-buscar');
const mensajeBusqueda = document.getElementById('mensaje-busqueda');
const formularioTareas = document.getElementById('formulario-tareas');

let usuarioIdActual = null; // Para "asociar" la tarea al usuario encontrado

// Lógica para BUSCAR Y HABILITAR
botonBuscar.addEventListener('click', async () => {
    const id = idUsuarioInput.value;
    
    try {
      // const respuesta = await fetch(`http://localhost:3000/usuarios/${id}`);
        const respuesta = await fetch(`http://localhost:3000/users/${id}`);

        
        if (respuesta.ok) {
            const usuario = await respuesta.json();
            usuarioIdActual = id; // Asociamos el ID
            
            mensajeBusqueda.innerText = `Usuario: ${usuario.nombre} encontrado.`;
            mensajeBusqueda.style.color = "green";

            // Habilitamos el formulario quitando la clase y el atributo disabled
            formularioTareas.classList.remove('formulario-desactivado');
            document.querySelectorAll('#formulario-tareas input, #formulario-tareas textarea, #boton-guardar-tarea')
                    .forEach(el => el.disabled = false);
        } else {
            throw new Error("No existe");
        }
    } catch (error) {
        mensajeBusqueda.innerText = "Error: Usuario no encontrado.";
        mensajeBusqueda.style.color = "red";
        formularioTareas.classList.add('formulario-desactivado');
    }
});

// Lógica para ENVIAR SIN RECARGAR y VALIDAR
formularioTareas.addEventListener('submit', async (e) => {
    e.preventDefault(); // ¡IMPORTANTE! Evita que la página se recargue

    const titulo = document.getElementById('titulo-tarea').value;
    const descripcion = document.getElementById('descripcion-tarea').value;

    // VALIDACIÓN de campos completos
    if (!titulo.trim() || !descripcion.trim()) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    const datosTarea = { 
    userId: parseInt(usuarioIdActual),
    title: titulo,
    body: descripcion
    };

    try {
      // const respuesta = await fetch('http://localhost:3000/tareas',
        const respuesta = await fetch('http://localhost:3000/api/posts',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosTarea)
        });

        if (respuesta.ok) {
            alert("¡Tarea registrada correctamente!");
            formularioTareas.reset(); // Limpia los campos
            // Opcional: volver a bloquear el formulario tras éxito
        }
    } catch (error) {
        alert("Hubo un error al conectar con el servidor.");
    }
});
