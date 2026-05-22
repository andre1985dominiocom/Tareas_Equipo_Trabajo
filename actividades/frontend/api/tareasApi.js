import { API_URL } from "./client.js";
export const getUserById = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);
    if (!response.ok) {
        throw new Error("Usuario no encontrado");
    }
    return await response.json();
};

export const getPostsByUser = async (userId) => {
    const response = await fetch(
        `${API_URL}/posts?userId=${userId}`
    );
    if (!response.ok) return [];
    return await response.json();
};

export const createPost = async (data) => {
    const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
};

export const updatePost = async (id, data) => {

    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
};

export const deletePost = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "DELETE"
    });
    return response.ok;
};