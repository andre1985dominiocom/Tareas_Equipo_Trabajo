// Se importan las dependencias necesarias para crear el servidor y definir las rutas.
import express from "express";
import cors from "cors"; 
import postsRoutes from "./routes/routes.js";
import { getUsers } from "./services/service.js";

// Se crea una instancia de Express para configurar el servidor.
const app = express();

// Se configuran los middlewares (funciones intermedias) necesarios para manejar las solicitudes
// y las rutas de la aplicación.
app.use(cors());
app.use(express.json());
app.use(`/api`, postsRoutes);

// RUTA PARA BUSCAR UN USUARIO ESPECÍFICO (Para habilitar el formulario)
app.get('/users/:id', async (req, res) => {
    try {
        const data = await getUsers();
        // Buscamos el usuario por el ID que viene en la URL
        const usuario = data.find(u => u.id.toString() === req.params.id);
        
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: `Error al buscar el usuario` });
    }
});

// RUTA PARA RECIBIR TAREAS (Asociar tarea al usuario)
app.post('/api/posts', (req, res) => {
    const { userId, title, body } = req.body;

    // VALIDACIÓN en el servidor
    if (!userId || !title || !body) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    console.log(`Tarea recibida para el usuario ${idUsuario}: ${titulo}`);
    
    // Aquí se guarda un array o base de datos
    res.status(201).json({ mensaje: "Tarea guardada con éxito" });
});

// ------------------------------------------------------------

// Se define una ruta GET para '/users' que utiliza el servicio correspondiente para obtener los usuarios
app.get('/users', async (req, res) => {
    try {
        const data = await getUsers();
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: `Error al obtener los usuarios` });
    }
});

// Se define una ruta GET para '/posts' que utiliza el servicio correspondiente para obtener los posts
app.get(`/posts`, async (req, res) => {
    try {
        const data = await getPosts();
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: `Error al obtener los posts` });
    }
});



// Se define una ruta GET para '/comments' que utiliza el servicio correspondiente para obtener los comentarios
app.get(`/comments`, async (req, res) => {
    try {
        const data = await getComments();
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: `Error al obtener los comentarios` });
    }
});

// Se inicia el servidor en el puerto 3000 y se muestra un mensaje en la consola indicando que el servidor está corriendo.
app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
});