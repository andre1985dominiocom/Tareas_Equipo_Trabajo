const API_URL = "http://http://10.5.225.105:4173/";

export const getAllPosts = async () => {
    try {
        const res = await fetch(`${API_URL}/posts`);
        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        return [];
    }
};

export const getPostsByUser = async (userId) => {
    try {
        const res = await fetch(`${API_URL}/posts?userId=${userId}`);
        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        return [];
    }
};

export const createPost = async (data) => {
    try {
        const res = await fetch(`${API_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });
        return await res.json();
    } catch (error) {
        return null;
    }
};

export const updatePost = async (id, data) => {
    try {
        const res = await fetch(`${API_URL}/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });

        if (!res.ok) {
            console.error(`Error HTTP: ${res.status}`);
            return false;
        }

        return await res.json();

    } catch (error) {
        console.error(error);
        return false;
    }
};

export const deletePost = async (id) => {
    try {
        const res = await fetch(`${API_URL}/posts/${id}`, { method: 'DELETE' });
        return res.ok;
    } catch (error) {
        return false;
    }
};