# Guía de Metodología: GitFlow Profesional (El Ciclo de Vida del Código)

¡Hola, equipo de desarrollo!

En nuestra Software Factory, programar bien es solo la mitad del trabajo; la otra mitad es saber **cómo y dónde** integrar ese código sin romper el proyecto de los demás. Para eso usamos **GitFlow**, una estrategia de ramificación estricta que mantiene nuestro código organizado, seguro y listo para producción.



---

## 1. El Árbol del Proyecto (Nuestras Ramas Oficiales)

Imagina que el proyecto es una fábrica. No podemos poner las piezas a medio armar en la vitrina de ventas. Por eso, dividimos el repositorio en diferentes entornos (ramas):

1.  **`main` (La Vitrina / Producción):** Es código sagrado. Aquí solo existe software 100% funcional, probado y listo para el usuario final. **Nadie programa directamente aquí.**
2.  **`develop` (La Fábrica / Integración):** Es el corazón del proyecto. Aquí se unen todas las tareas individuales del equipo para ver cómo funcionan juntas.
3.  **`feat/...` (Tu Escritorio / Tareas):** Son ramas temporales. Cada vez que tomas una *Issue* del tablero Kanban, creas una de estas ramas para trabajar aislado sin molestar a nadie.
4.  **`release/...` (Control de Calidad):** Rama temporal que crea el Líder cuando un *Milestone* está a punto de terminar, para hacer pruebas finales antes de pasar a `main`.

---

## 2. El Flujo Diario del Desarrollador (Paso a Paso)

Este es el ciclo que repetirás todos los días por cada *Issue* que tomes del tablero Kanban.

### Paso 1: Clonar y Sincronizar (Solo el Día 1)
Baja el repositorio a tu máquina y ubícate en la rama de fábrica:
```bash
git clone [URL-DEL-REPO]
cd [nombre-de-la-carpeta]
git checkout develop
```
## Paso 2: La Sincronización Matutina (Todos los días)

Antes de empezar a programar, asegúrate de tener los últimos cambios que tus compañeros hicieron ayer:

```bash
git checkout develop
git pull origin develop
```

### Paso 3: Crear tu Rama de Tarea (feat/)

Si tomaste la tarea de hacer el Login (Issue #5), crea tu rama desde develop:

```bash
git checkout -b feat/login-screen
```

### Paso 4: Programar y Guardar (Conventional Commits)

Escribe tu código. Cuando termines partes lógicas, guárdalas usando nuestra guía de Commits Convencionales:

```bash
git add .
git commit -m "feat(auth): crear interfaz del login y validacion de campos (#5)"
```

### Paso 5: Sincronización Final y Subida

Antes de entregar, verifica que nadie haya actualizado develop mientras tú programabas:

```bash
git checkout develop
git pull origin develop
git checkout feat/login-screen
git merge develop   # (Si hay conflictos, resuélvelos aquí en tu máquina)
git push origin feat/login-screen
```

### Paso 6: El Pull Request (PR)

Ve a GitHub, abre un Pull Request de tu rama feat/login-screen hacia la rama develop. Pide la revisión del Líder y mueve tu tarjeta en el Kanban a In Review. ¡Tu trabajo aquí terminó!

## 3. El Flujo del Líder / Arquitecto (Cierre de Hito y Release)

El Líder es el guardián de la calidad. Cuando todas las tareas de un Milestone (Hito) están terminadas y unidas en develop, es hora de preparar la entrega final a main.

### Paso 1: Crear la rama release

El Líder "congela" el código de develop creando una rama de versión:

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0
```

### Paso 2: Pruebas y Ajustes Menores

En esta rama release no se agregan funciones nuevas. Solo se hacen pruebas generales, se arreglan pequeños bugs de última hora y se actualiza el README.md o el número de versión en el package.json.

### Paso 3: Despliegue a Producción (main)

Si el Control de Calidad es un éxito, el Líder sube la rama release a GitHub y abre un Pull Request hacia main.
Una vez aprobado el PR en GitHub, el Líder crea una "Etiqueta" (Tag) para marcar la versión en la historia:

```bash
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Release Milestone 1: Estructura y UI"
git push origin v1.0.0
```

### Paso 4: Devolver los ajustes a develop

Es vital que los pequeños errores que se arreglaron en la rama release regresen a la fábrica para no perderlos en el futuro:

```bash
git checkout develop
git merge origin/release/v1.0.0
git push origin develop
```

### Paso 5: Limpieza

La rama release ya cumplió su propósito. Se puede eliminar de GitHub.

## Regla de Oro del Equipo

> *"Git no es un sistema para guardar archivos, es una máquina del tiempo colaborativa. Si respetas el flujo, nunca pisarás el trabajo de tu compañero y siempre podremos volver a una versión que funcionaba. ¡Cero código a `main` sin pasar por `develop`!"*