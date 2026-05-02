// Se importan las dependencias necesarias para configurar las rutas de la aplicación.
import  express  from "express";
import controller from "../controllers/controller.js";

// Se crea un router utilizando Express para definir las rutas de la aplicación.
const router = express.Router(); // Se define una ruta GET para '/posts' que utiliza el controlador correspondiente

// Se define una ruta GET para '/posts' que utiliza el controlador correspondiente
router.get('/users', controller.getUsers);
router.get(`/posts`, controller.getPosts);
router.post(`/posts`, controller.createPost);
router.delete(`/delete`, controller.deletePost);
router.put('/posts/:id', controller.updatePost); // para RF-03

// Se exporta el router para que pueda ser utilizado en otras partes de la aplicación.
export default router;