// Se importan los servicios necesarios para manejar las solicitudes relacionadas con los posts.
import { getPosts as getPostsService, getUsers as getUsersService} from "../services/service.js";
import { getComments as getCommentsService } from "../services/service.js";

// Controlador para manejar la solicitud de obtener los usuarios.
// Utiliza el servicio correspondiente para obtener los datos
// y responde con el resultado en formato JSON. Si ocurre un error,
// se captura y se responde con un mensaje de error.
export const getUsers = async (req, res) => {
    try {
        const data = await getUsersService();
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: `Error al obtener los usuarios` });
    }
};

// Controlador para manejar la solicitud de obtener los posts.
// Utiliza el servicio correspondiente para obtener los datos
// y responde con el resultado en formato JSON. Si ocurre un error,
// se captura y se responde con un mensaje de error.
export const getPosts = async (req, res) => {
    try {
        const data = await getPostsService();
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: `Error al obtener los posts` });
    }
};

// Controlador para manejar la solicitud de obtener los comentarios.
// Utiliza el servicio correspondiente para obtener los datos
// y responde con el resultado en formato JSON. Si ocurre un error,
// se captura y se responde con un mensaje de error.
export const getComments = async (req, res) => {
    try {
        const data = await getCommentsService();
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: `Error al obtener los comentarios` });
    }
};

// Se exporta el controlador para que pueda ser utilizado en otras partes de la aplicación.
export default {
    getUsers,
    getPosts,
    getComments
};