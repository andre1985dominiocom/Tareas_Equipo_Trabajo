# Guía del Sistema: Gestión Visual con Tablero Kanban (GitHub Projects)

¡Hola, equipo de desarrollo! 

Imagina que estamos construyendo una casa. Tenemos los planos (**Milestones**) y tenemos los ladrillos listos para usar (**Issues**). Pero, ¿cómo sabemos qué obrero está pegando qué ladrillo en este momento? ¿Cómo sabemos si alguien se quedó sin cemento y está de brazos cruzados?

Para eso utilizamos el **Tablero Kanban**. Es nuestro "radiador de información": un panel visual que le dice a todo el equipo exactamente cómo va el proyecto en tiempo real.



---

## 1. ¿Qué es un Tablero Kanban?

La palabra **Kanban** viene del japonés y significa "tarjeta visual". Funciona exactamente igual que un corcho en la pared lleno de notas adhesivas (Post-its). 

Cada *Issue* (tarea) es un Post-it. A medida que avanzas en tu trabajo, vas moviendo tu Post-it de izquierda a derecha hasta llegar a la meta.

### ¿Qué ganamos al usarlo?
* **Cero estrés:** Tu mente no tiene que recordar qué debes hacer; el tablero te lo dice.
* **Transparencia:** El Instructor y el Líder saben exactamente en qué estás trabajando sin tener que preguntarte.
* **Detección de atascos:** Si una tarea lleva 3 días en la misma columna, el equipo sabe que debe entrar a ayudarte.

---

## 2. El Camino del Código (Nuestras Columnas)

Nuestro tablero está dividido en 4 columnas obligatorias. Todo Post-it (*Issue*) debe recorrer este camino:

1. **To Do (Por Hacer):** * **¿Qué es?** La sala de espera. Aquí están todas las tareas que el Líder aprobó para este Hito (*Milestone*), pero que nadie ha empezado a programar.

2. **In Progress (En Progreso):**
   * **¿Qué es?** El área de construcción. Cuando te asignas una tarea y empiezas a tirar código en tu rama `feat/`, mueves la tarjeta aquí.
   * *Regla de Oro:* **¡Solo un Post-it a la vez!** No puedes tener 3 tareas en progreso. Termina una antes de empezar la otra.

3. **In Review (En Revisión):**
   * **¿Qué es?** La zona de inspección. Ya terminaste de programar y abriste tu **Pull Request (PR)**. Ahora la tarjeta espera aquí hasta que el Líder revise tu código.

4. **Done (Terminado):**
   * **¿Qué es?** ¡La victoria! El Líder aprobó tu código, lo unió al proyecto principal (`Merge`) y la tarea está 100% finalizada.

---

## 3. Cómo configurar el Tablero (Solo para el Líder)

El Líder (Arquitecto) del equipo es el responsable de crear el tablero por primera vez siguiendo estos pasos:

1. Ve a la pestaña **Projects** en tu repositorio de GitHub.
2. Haz clic en **Link a project** > **New project**.
3. Elige la plantilla **Board** (Tablero) y dale a *Create*.
4. Ponle un nombre profesional (Ej: `Tablero de Desarrollo - [Nombre de la App]`).
5. **Ajusta las columnas:** Por defecto tendrás *Todo*, *In Progress* y *Done*. Haz clic en el `+` para agregar una nueva columna llamada **In Review** y ponla justo antes de *Done*.

> ** Truco de Automatización:** En los tres puntos (`...`) de la esquina superior derecha del tablero, ve a **Workflows** y activa *Auto-add to project* y *Item closed*. ¡Así las tarjetas se moverán solas cuando abras o cierres una Issue!

---

## 4. La Rutina Diaria del Aprendiz

Para que el tablero funcione, el equipo debe convertirlo en su herramienta de todos los días. Úsenlo en sus reuniones de sincronización (Daily Stand-ups). 

Cada día, abran el tablero y respondan tres preguntas mirando sus tarjetas:
1. **¿Qué tarjeta moví ayer?** (Qué logré).
2. **¿Qué tarjeta voy a mover hoy?** (En qué me voy a enfocar).
3. **¿Hay algo bloqueando mi tarjeta?** (Necesito ayuda porque no entiendo un error).

---

### Consejo del Instructor:

> *"Un desarrollador profesional no es solo el que escribe el código más complejo, sino el que sabe **comunicar su progreso**. Mantener tu tarjeta actualizada en el tablero Kanban demuestra madurez, responsabilidad y trabajo en equipo. ¡Esa es la actitud que buscan las empresas de software reales!"*