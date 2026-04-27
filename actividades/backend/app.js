// Se importan las dependencias necesarias para crear el servidor y definir las rutas.
import express from "express";
import cors from "cors";
import postsRoutes from "./routes/routes.js";
import { getUsers } from "./services/service.js";

// Se crea una instancia de Express para configurar el servidor.
const app = express();

//uso el midleware de cors, con esto abro puerta a las peticiones
app.use(cors());
app.use(express.json());

//mis rutas
app.use('/api', postsRoutes);

app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
});

// Se configuran los middlewares (funciones intermedias) necesarios para manejar las solicitudes
// y las rutas de la aplicación.
app.use(express.json());
app.use(`/api`, postsRoutes);

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