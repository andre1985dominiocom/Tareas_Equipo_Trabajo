// URL de la API
const API_URL = "http://localhost:3000/api";

// Funciones para interactuar con la API
export const getPosts = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en el posts:", error);
        return [];
    }
}

export const getPostsByUser = async (userId) => {
    try {
        // Usamos la ruta específica para el usuario
        const response = await fetch(`${BASE_URL}/users/${userId}/posts`);
        if (!response.ok) throw new Error("No se pudieron obtener las tareas");
        return await response.json();
    } catch (error) {
        console.error("Error al obtener posts del usuario:", error);
        return [];
    }
}

export const getAllPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        return await response.json();
    } catch (error) {
        console.error("Error en todos los posts:", error);
        return [];
    }
}

// Función para crear un post
export const createPost = async (post) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la creación del post:", error);
        return null;
    }
}

// Función para actualizar un post
export const updatePost = async (id, post) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la actualización del post:", error);
        return null;
    }
}

// Función para eliminar un post
export const deletePost = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
        return response.ok;
    } catch (error) {
        console.error("Error en la eliminación del post:", error);
        return false;
    }
}