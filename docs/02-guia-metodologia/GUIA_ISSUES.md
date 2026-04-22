# Cómo usar la Plantilla de Requerimientos (Issues)

¡Hola, Desarrollador! En este proyecto no tiramos código al azar. Usamos **Issues** para planificar, porque un programador que no planea, trabaja el doble. Esta guía te enseñará a llenar tu "contrato de trabajo" (la Issue) de forma profesional y entender quién es responsable de cada parte.

---

## 1. ¿Quién debe crear las tareas (Issues)?
Para evitar el desorden en nuestro repositorio, seguimos estas reglas:

* **El Líder (Arquitecto):** Crea las tareas principales que vienen de la guía de aprendizaje. Es quien traza la "ruta maestra" del proyecto.
* **El Desarrollador (Albañil):** Crea tareas cuando encuentra un error (`[BUG]`), propone una mejora técnica (`[FEAT]`) o detecta que el código necesita limpieza (`[CLEAN]`).
* **Regla de Oro:** Cualquiera puede proponer una idea creando una Issue, pero **solo el Líder decide si se mueve a la columna de "Para hacer"**. Si eres desarrollador, crea tu propuesta y espera la validación de tu Líder.

---

## 2. El Título: Tu etiqueta de identificación
* **Lo que verás:** `[FEAT]: `
* **Cómo llenarlo:** Completa el nombre de la tarea. Ejemplo: `[FEAT]: Crear el botón de eliminar tarea`.
* **Por qué importa:** Nos permite saber de un vistazo el tipo de trabajo: Funcionalidad (`FEAT`), Error (`BUG`), Documentación (`DOCS`) o Limpieza (`CLEAN`).

---

## 3. Descripción: El "Para qué"
* **Lo que verás:** "Como usuario, quiero... para..."
* **Cómo llenarlo:** Explica quién se beneficia. Ejemplo: *"Como usuario, quiero poder borrar una tarea para limpiar mi lista de pendientes"*.
* **Por qué importa:** Te ayuda a programar con un objetivo claro, evitando hacer cosas que nadie necesita.

---

## 4. Criterios de Aceptación: Tu contrato de calidad
Aquí definimos qué se considera un "trabajo terminado y bien hecho".

### ¿Puedo modificar estos criterios?
**Sí, pero bajo estas condiciones:**
1. **Los "Intocables":** Criterios como *"Sin errores en consola"* o *"Diseño responsivo"* nunca se borran. Son el estándar mínimo de calidad.
2. **Personaliza tu tarea:** Añade criterios que sean exclusivos de lo que estás haciendo. Ejemplo: *"El sistema debe pedir confirmación antes de borrar"*.
3. **Validación:** Si un criterio de la plantilla no aplica a tu tarea, no lo borres sin avisar. Coméntalo con tu **Líder de Proyecto** y, si él lo aprueba, puedes marcarlo como `(No aplica - Validado por Líder)`.

---

## 5. Tareas Técnicas (Albañilería)
* **Cómo llenarlo:** Divide el problema en pasos pequeños y fáciles de terminar. 
   1. [ ] Crear el HTML del botón.
   2. [ ] Ponerle estilos con CSS.
   3. [ ] Crear la función de eliminar en JavaScript.
* **Por qué importa:** Si te bloqueas, será más fácil ayudarte si sabemos exactamente en qué paso técnico vas.

---

## 6. El comando mágico: `Closes #ID`
* **Cómo llenarlo:** Al terminar tu trabajo y pedir revisión (Pull Request), escribe en la descripción: `Closes #5` (usa el número de tu Issue).
* **Por qué importa:** GitHub cerrará tu tarea automáticamente cuando el Líder apruebe tu código. ¡Eficiencia pura!

---

> **Consejo Pro:** Un buen desarrollador dedica el 20% del tiempo a planear y el 80% a ejecutar. Llenar esta guía es ese 20% que te garantiza el éxito.