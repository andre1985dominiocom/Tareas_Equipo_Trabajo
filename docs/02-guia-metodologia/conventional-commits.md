# Guía de Metodología: Commits Convencionales (El arte de guardar cambios)

¡Hola, equipo de desarrollo!

En nuestra Software Factory, no guardamos el código "porque sí". Cada vez que hacemos un `git commit`, estamos creando un punto en la historia de nuestro proyecto. Si algún día la aplicación falla, ese historial es nuestra única pista para encontrar al culpable.

Para mantener este historial limpio, profesional y fácil de leer, trabajaremos estrictamente con el estándar de la industria llamado **Conventional Commits**.

---

## 1. ¿Qué es un Commit Convencional?
Es una regla sencilla para escribir los mensajes de Git. Consiste en ponerle una "etiqueta" al principio del mensaje para que cualquier programador (o máquina) sepa exactamente qué tipo de cambio hiciste, sin tener que leer el código.

### ¿Qué ganamos al usarlos?
* **Historial legible:** Al hacer `git log`, verás una lista ordenada y categorizada de todo lo que ha pasado en el proyecto.
* **Trabajo en equipo:** Tu compañero sabrá si tu commit agrega una funcionalidad o si solo arregla un error.
* **Marca personal:** Un desarrollador que escribe buenos commits demuestra madurez técnica.

---

## 2. La Estructura de la Regla

Cada mensaje de commit debe tener esta estructura matemática:
`tipo(alcance): descripción breve`

* **Tipo:** ¿Qué clase de trabajo hiciste? (Ej: `feat`, `fix`, `docs`).
* **Alcance (Opcional):** ¿Qué parte de la app tocaste? (Ej: `login`, `navbar`, `api`). Va entre paréntesis.
* **Descripción:** Una frase corta en minúsculas y en tiempo presente imperativo (como si le dieras una orden a la máquina).

---

## 3. Los "Tipos" Permitidos (Tu vocabulario diario)

Solo puedes usar estas palabras clave al inicio de tu commit. ¡Apréndetelas!

* **`feat:`** (Feature) Agregaste una nueva funcionalidad completa a la app.
* **`fix:`** (Bug Fix) Solucionaste un error o un bug que estaba rompiendo algo.
* **`docs:`** (Documentation) Cambios exclusivos en la documentación (como el README o estas guías).
* **`style:`** (Style) Cambios de formato: espacios, puntos y comas, indentación (no afecta la lógica del código).
* **`refactor:`** (Refactor) Reescribiste un pedazo de código para mejorarlo, pero no arregla un bug ni agrega nada nuevo.
* **`chore:`** (Chore) Tareas de mantenimiento, actualización de dependencias (`package.json`) o configuraciones del entorno.

---

## 4. Ejemplos Reales: Lo Bueno, Lo Malo y Lo Feo

Para que quede claro, aquí tienes la diferencia entre un aprendiz novato y un profesional de nuestra célula ágil:

### El Novato (Prohibido)

```bash
 git commit -m "arregle el boton que no servia"
 git commit -m "subiendo la tarea de hoy"
 git commit -m "cambios en el login y en el css y agregue el index"
 git commit -m "x"
```

### El Profesional (Obligatorio)

```bass
 git commit -m "fix(ui): solucionar boton de borrar tarea que no respondia"
 git commit -m "feat(auth): crear validacion de contraseñas para el login"
 git commit -m "docs: actualizar manual de instalacion en el README"
 git commit -m "chore: actualizar version de vite en package.json"
```
---

## 5. ¿Cómo se conecta esto con nuestras Issues?

Como somos un equipo ágil, tus commits deben estar conectados a tu trabajo en el Tablero Kanban. 
Si estás resolviendo la **Issue #12**, una excelente práctica es poner el número al final de tu commit:

`git commit -m "feat(api): conectar formulario con el backend local (#12)"`

---

### Regla de Oro del Instructor:
> *"Tu código te dice **CÓMO** hace las cosas la aplicación, pero tus commits nos dicen **POR QUÉ** se hicieron. Si dentro de un mes no entiendes tu propio historial de Git, significa que no aplicaste Commits Convencionales."*