# Guía del Sistema: Blindaje de Ramas (GitHub Rulesets)

¡Hola, Líderes y Arquitectos del equipo!

En una **Software Factory**, el código es el activo más valioso. Un error empujado directamente a la rama `main` puede tumbar toda la aplicación. Para evitar el caos, aplicaremos **Rulesets** (Conjuntos de reglas), que funcionan como candados de seguridad para nuestras ramas principales.

### ¿Qué ramas vamos a blindar?
1. **`develop` (Entorno de Integración):** Nadie empuja código directo aquí; todo entra por *Pull Request*.
2. **`main` (Entorno de Producción):** Es sagrada. Solo recibe código desde `develop` al finalizar un Hito (*Milestone*).

---

## Paso a Paso para la Configuración (Rol: Líder/Admin)

El encargado del repositorio debe seguir esta ruta exacta para activar los candados:

1. **Settings (Configuración):** Entra a la pestaña `Settings` de tu repositorio.
2. **Ruta de Rulesets:** En el menú lateral izquierdo, ve a `Rules` -> `Rulesets` -> Botón verde `New ruleset` -> `New branch ruleset`.
3. **Ruleset Name:** Escribe un nombre claro. *(Ej: "Blindaje Develop y Main")*.
4. **Enforcement status:** Asegúrate de que esté en **Active** (Activo).
5. **Bypass list (Excepciones):** - Haz clic en `Add bypass`.
   - Selecciona `Repository admin` (o tu rol específico).
   - En la opción de al lado, elige `Always allow`. 
   > *Nota: Esto permite que el Instructor o el Administrador pueda forzar un cambio en caso de emergencia extrema.*
6. **Target branches (Ramas objetivo):**
   - Haz clic en `Add target` -> `Include by pattern`.
   - Escribe el nombre de la rama: `develop`.
   - Haz clic en `Add inclusion pattern`.
   *(Puedes repetir este paso para agregar también a `main` en la misma regla).*

---

## 7. Diccionario de Reglas (Branch Rules)

En la sección final, verás una lista de opciones. Aquí te explicamos qué hace cada una y **cuáles son obligatorias (⭐)** para nuestro proyecto:

1. **Restrict creations:** Impide que alguien cree nuevas ramas que coincidan con este nombre.
2. **Restrict updates:** Congela la rama por completo. Nadie puede empujar cambios (solo se usa para archivar código histórico).
3. ⭐ **Restrict deletions:** Impide que alguien borre la rama por error. **(¡Activar siempre!)**
4. **Require linear history:** Evita que el historial de *commits* se vea desordenado, obligando a usar técnicas avanzadas de Git (*rebase* o *squash*).
5. **Require deployments to succeed:** Exige que la aplicación se despliegue con éxito (ej. en Vercel) antes de permitir que el código se una.
6. **Require signed commits:** Exige que los *commits* tengan una firma de seguridad criptográfica (GPG) para verificar la identidad del programador.
7. ⭐ **Require a pull request before merging:** **¡LA REGLA DE ORO!** Exige que todo código entre a través de un PR. **(¡Activar siempre!)**
   * *Al activarla, asegúrate de pedir al menos **1 Required approval** para que el Líder revise el código.*
8. **Require status checks to pass:** Exige que herramientas automáticas (como pruebas unitarias o GitHub Actions)