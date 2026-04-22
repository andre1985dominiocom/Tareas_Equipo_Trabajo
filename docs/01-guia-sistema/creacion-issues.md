# Guía del Sistema: Gestión de Issues en GitHub

Para construir software de calidad, no basta con escribir código; debemos saber gestionar el trabajo. En GitHub, la herramienta principal para esto son las **Issues** (tareas o requerimientos).

---

## ¿Qué es una Issue y para qué sirve?

Una **Issue** es una unidad de trabajo. Imagínala como un "ticket" o una ficha técnica donde describimos un problema a resolver o una funcionalidad a crear.

### ¿Qué ganamos al usarlas?

- **Trazabilidad:** Sabemos quién hizo qué, cuándo y por qué  
- **Organización:** El equipo no se pisa los pies; cada integrante sabe en qué están trabajando los demás  
- **Historial:** Permite revisar decisiones en caso de fallos futuros  

---

## Los Labels (Etiquetas): ¿Para qué sirven?

Las etiquetas son marcas de colores que nos ayudan a clasificar las tareas visualmente.

### ¿Para qué sirven?

Permiten **filtrar y priorizar** el trabajo. Por ejemplo:

- Si el Líder quiere ver errores → filtra por `bug`  
- Si quiere ver funcionalidades nuevas → filtra por `enhancement` o `feat`  

### Ejemplos comunes:

- `bug`: Algo no funciona  
- `enhancement` / `feat`: Nueva funcionalidad  
- `documentation`: Manuales o README  
- `invalid`: Tareas que no se van a realizar  

---

## Las Asignaciones (Assignees): ¿Para qué sirven?

El campo **Assignee** define quién es el responsable directo de que una tarea se cumpla.

### ¿Para qué sirven?

Evitan la ambigüedad en el equipo. Si una Issue tiene tu nombre, tú eres responsable de su ejecución.

> **Regla de oro:** No debe haber tareas sin asignar.  
> Si una tarea no tiene responsable, nadie la va a terminar.

---

## Ciclo de Vida: Abrir y Cerrar

### Cómo abrir una Issue

1. Ve a la pestaña **Issues** de tu repositorio  
2. Haz clic en el botón **New Issue**  
3. Selecciona la plantilla correspondiente (ej: *Feature Request*)  

**Importante:**
- Llena todos los campos  
- Asigna las **Labels**  
- Define el **Milestone**  
- Asígnate a ti mismo o a un compañero (**Assignees**)  

---

### Cómo cerrar una Issue

Existen dos formas:

- **Manual:**  
  Entrando a la Issue y haciendo clic en **Close issue**  
  *(Solo cuando la tarea esté 100% terminada)*  

- **Automática (Recomendada):**  
  En el Pull Request escribe:  
  `Closes #5`  

  Al aprobarse el código, GitHub cerrará la tarea automáticamente.

---

## Criterios de Calidad para una Issue

Evita títulos como *"ayuda"* o *"no funciona"*.  
Para que una Issue sea profesional, debe cumplir con:

- **Título Descriptivo:**  
  Debe iniciar con el tipo de tarea  
  *(Ej: `[FEAT]: Crear validación de email`)*  

- **Descripción Clara:**  
  Explica qué se va a desarrollar de forma directa  

- **Contexto:**  
  Si es un error (*bug*), describe cómo ocurrió y adjunta evidencia  

- **Vinculación:**  
  Debe estar asociada a un **Milestone**  

---

## Consejo para el aprendiz

> *"Una Issue bien escrita es el 50% de la tarea resuelta. Si sabes qué vas a hacer y cómo se te va a evaluar, programar es mucho más sencillo."*