// Se importan las dependencias necesarias para realizar solicitudes HTTP.
import axios from "axios";

// Se define la URL base para las solicitudes a la API externa.
const BASE_URL = "https://jsonplaceholder.typicode.com/";

// Servicio para obtener los posts desde la API externa.
export const getPosts = async () => { // Se define una función asíncrona para obtener los posts.
    const response = await axios.get(`${BASE_URL}posts`); // Se realiza una solicitud GET a la URL de los posts.
    return response.data; // Se devuelve la data obtenida de la respuesta, que contiene los posts.
};

// Servicio para obtener los usuarios desde la API externa.
export const getUsers = async () => { // Se define una función asíncrona para obtener los usuarios.
    const response = await axios.get(`${BASE_URL}users`); // Se realiza una solicitud GET a la URL de los usuarios.
    return response.data; // Se devuelve la data obtenida de la respuesta, que contiene los usuarios.
};

export const getComments = async () => { // Se define una función asíncrona para obtener los comentarios.
    const response = await axios.get(`${BASE_URL}comments`); // Se realiza una solicitud GET a la URL de los comentarios.
    return response.data; // Se devuelve la data obtenida de la respuesta, que contiene los comentarios.
};

export const createPost = async ({ userId, title, body}) => {
    const response = await axios.post(`${BASE_URL}posts`, { userId, title, body }); // Se realiza una solicitud POST a la URL de los posts, enviando el nuevo post en el cuerpo de la solicitud.
    return response.data; // Se devuelve la data obtenida de la respuesta, que contiene el nuevo post creado.
}

// Se exportan los servicios para que puedan ser utilizados en otras partes de la aplicación.
export default {
    getPosts,
    getUsers,
    getComments,
    createPost
};