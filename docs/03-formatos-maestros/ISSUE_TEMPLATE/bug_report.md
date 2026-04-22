---
name: "Reporte de Error (Bug)"
about: Utiliza esta plantilla para informar un fallo técnico. Incluye ejemplos para guiarte.
title: "bug: [Escribe un resumen corto del error]"
labels: bug
assignees: ''
---

## Descripción del Error
**Ejemplo:** *El servidor se cierra inesperadamente al intentar conectar a la base de datos cuando falta una variable de entorno.*

## Pasos para Reproducir
**Ejemplo:**
1. Abrir el archivo `.env` y borrar la línea `DB_PASSWORD`.
2. Ejecutar el comando `npm start` en la terminal.
3. Intentar realizar una petición al endpoint `/api/users`.
4. Ver el error `Access denied for user...` en la consola.

## Comportamiento Esperado vs. Actual
- **Lo que debería pasar:** *El sistema debería mostrar un mensaje de error controlado o usar un valor por defecto.*
- **Lo que pasa actualmente:** *La aplicación se detiene (crash) y el proceso de Node.js se cierra por completo.*

## Entorno de Desarrollo
**Ejemplo:**
- **Sistema Operativo:** Windows 11 / Linux Ubuntu 22.04.
- **Versión de Node.js:** v20.11.0.
- **Base de Datos:** MySQL 8.0.

## Evidencia (Opcional)
---
> *Recuerda: Un bug bien reportado ahorra horas de frustración al equipo.*