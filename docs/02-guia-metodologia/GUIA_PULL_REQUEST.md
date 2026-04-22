# Cómo pedir una revisión de código (PR)

¡Felicidades! Has terminado tu tarea en tu rama local. Ahora llega el momento más importante: el **Pull Request (PR)**.

Imagina que el PR es el documento de entrega de una obra. No puedes simplemente decir "ya acabé"; debes demostrar que seguiste los planos, que usaste materiales de calidad y que no dejaste basura en la construcción.

Aquí te explicamos cómo llenar cada sección de tu solicitud:

---

## 1. Descripción del Cambio: El "Qué" y el "Por qué"

- **¿Qué poner?** Un resumen de lo que hiciste.  
  No pongas: *"arreglé el código"*.  
  Pon: *"He creado la lógica para que el botón de 'Guardar' valide que el campo no esté vacío antes de enviar".*

- **¿Por qué importa?** Tu Líder de Proyecto no estuvo contigo mientras programabas. Necesita este contexto para saber qué buscar en tu código.

---

## 2. Tipo de Cambio: Clasifica tu trabajo

- Marca solo la opción que corresponda:

  - **feat:** Si agregaste algo nuevo  
  - **fix:** Si algo no funcionaba y lo arreglaste  
  - **docs/style:** Si solo cambiaste textos, manuales o formato del código (espacios, puntos y coma)  
  - **refactor:** Si mejoraste el código sin cambiar su funcionamiento  

---

## 3. Relación con Tareas: El comando de "Cierre Automático"

- **¿Cómo se llena?** Escribe:  
  `Closes #12` (ejemplo)

- **¿Por qué importa?** Cuando tu Líder apruebe este PR, GitHub cerrará tu tarea automáticamente y actualizará tu progreso en el tablero.

---

## 4. Checklist de Calidad Universal: Tu propio control de calidad

Antes de marcar estos cuadros, sé honesto contigo mismo:

- **Sincronización:**  
  ¿Ejecutaste `git pull origin develop` y mezclaste los cambios en tu rama?  
  No envíes un PR con conflictos.

- **Limpieza:**  
  Elimina `console.log`, código comentado innecesario o pruebas temporales.  
  El código profesional es código limpio.

- **Estándares:**  
  ¿Usaste `camelCase`?  
  ¿Incluiste comentarios JSDoc en tus funciones?  
  Si no, corrígelo antes de enviar.

---

## 5. Validación FRONTEND / BACKEND (Solo si aplica)

Completa solo la sección correspondiente:

- **Frontend:**
  - Verifica que el diseño sea responsive (no se rompa en móviles)
  - Optimiza imágenes (peso adecuado y organización en carpetas)

- **Backend:**
  - Verifica respuestas correctas de la API:
    - `200` → éxito  
    - `400` → error del cliente  
  - No esperes a que el Líder detecte errores

---

## 6. Evidencia de Trabajo: Una imagen vale más que mil palabras

- **¿Cómo se llena?**  
  Adjunta una captura de pantalla del navegador o del JSON que responde tu servidor.

- **¿Por qué importa?**  
  Es la evidencia de que tu código funciona. Genera confianza en la revisión.

---

## 7. Análisis de Impacto: No rompas el trabajo de tus compañeros

- **¿Qué poner?**  
  Informa si hiciste cambios que afectan a otros.

- **Ejemplo:**  
  *"Instalé una librería de iconos, deben ejecutar `npm install` al actualizar el proyecto".*

---

## 8. Regla de Oro del Aprendiz Profesional

Si tú no estás orgulloso de tu PR, no lo envíes todavía.

Tómate unos minutos para revisar tu código una última vez.  
Un PR bien documentado y limpio habla mejor de ti que cualquier diploma.

---

## Cierre

**¡A construir con calidad!**