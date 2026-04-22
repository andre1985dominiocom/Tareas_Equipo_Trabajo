# PROYECTO BASE: [Nombre de la Aplicación] - Software Factory SENA

**Metodología:** *"Del Requerimiento al Producto"*

Este repositorio constituye la base técnica y administrativa para el desarrollo del proyecto. No es solo un contenedor de código, es una simulación de un entorno profesional donde se aplican estándares de calidad, gestión ágil y flujos de trabajo colaborativos reales.

---

## INTRODUCCIÓN Y PROPÓSITO

El objetivo de este proyecto es desarrollar una solución tecnológica funcional, priorizando:

- Arquitectura limpia  
- Código escalable  
- Trazabilidad total  

### El "Por qué" (Justificación)

Dominar el ciclo de vida del software es tan importante como programar. Esta metodología alinea las habilidades técnicas con las exigencias de la industria, garantizando que cada línea de código tenga un propósito claro y demostrable.

---

## CENTRO DE DOCUMENTACIÓN (WIKI DEL PROYECTO)

Antes de escribir la primera línea de código o ejecutar un comando, es obligatorio revisar las guías de trabajo.

### Nivel 1. Sistema  
**Ubicación:** `docs/01-guia-sistema/`  
- Manuales técnicos: creación de Issues y Milestones  

### Nivel 2. Metodología  
**Ubicación:** `docs/02-guia-metodologia/`  
- Reglas para reportar tareas y solicitar revisiones (PR)  

### Nivel 3. Formatos  
**Ubicación:** `docs/03-formatos-maestros/`  
- Plantillas oficiales de documentos  

---

## ROLES DE LA CÉLULA ÁGIL

### Líder (Arquitecto)

- **Responsabilidad:** Integridad del repositorio y control de calidad  
- **Tareas en GitHub:**
  - Protección de ramas  
  - Gestión de Milestones  
  - Aprobación de Pull Requests  

---

### Desarrollador (Albañil)

- **Responsabilidad:** Construcción de módulos y lógica  
- **Tareas en GitHub:**
  - Desarrollo en ramas `feat/`  
  - Reporte de avances  
  - Solicitud de revisión técnica  

---

### El "Por qué"

La división de roles evita duplicidad de tareas y establece una jerarquía clara de responsabilidad (segregación de funciones), esencial en equipos de alto rendimiento.

---

## CONFIGURACIÓN DEL ENTORNO (LOCAL)

Para estandarizar el desarrollo y evitar errores de compatibilidad, sigue estos pasos en tu terminal:

```bash
# Paso 1. Clonar el repositorio
git clone [URL-del-repositorio-grupal]

# Paso 2. Instalar dependencias
npm install

# Paso 3. Ejecutar el servidor local
npm run dev
```

### El "por que"

Estandarizar el entorno asegura la paridad entre las máquinas de todos los colaboradores, erradicando para siempre la excusa de "en mi máquina sí funciona".

## ARQUITECTURA Y ESTRUCTURA DEL PROYECTO

Mantenemos una organización modular para facilitar el mantenimiento:

```
/
├── .github/              # Motor de plantillas (Issues y Pull Requests)
├── docs/                 # Guías metodológicas y reportes técnicos
├── public/               # Recursos estáticos (imágenes, iconos)
├── src/                  # Código fuente principal
│   ├── assets/           # Estilos globales y multimedia
│   ├── components/       # Piezas de interfaz reutilizables (UI)
│   ├── services/         # Lógica de consumo de datos o APIs
│   ├── views/            # Secciones o páginas principales
│   └── main.js           # Punto de entrada de la aplicación
├── .gitignore            # Archivos que Git debe ignorar
├── package.json          # Dependencias y scripts del proyecto
├── README.md             # Manual principal del repositorio
└── TEAM_AGREEMENT.md     # Acuerdo y normas de convivencia del equipo
```

## METODOLOGÍA DE TRABAJO (GITFLOW PROFESIONAL)

El flujo de trabajo es el corazón de nuestra colaboración.  
Está estrictamente prohibido hacer commits directos sobre las ramas `main` o `develop`.

---

### Paso 1. Sincronizar
Trae los últimos cambios aprobados del equipo:

```bash
git checkout develop
git pull origin develop
```
### Paso 2. Rama de Tarea

Crea un espacio aislado para tu requerimiento:

```bash
git checkout -b feat/nombre-tarea
```

### Paso 3. Desarrollo

Escribe código limpio y realiza commits descriptivos.

### Paso 4. Sincronización Final

Antes de entregar, integra los cambios recientes del equipo para resolver conflictos en tu máquina:

```bash
git checkout develop
git pull origin develop
git checkout feat/nombre-tarea
git merge develop
```

### Paso 5. Solicitud de PR

Sube tu rama y solicita la revisión técnica en GitHub:

```bash
git push origin feat/nombre-tarea
```

### El "Por qué"

Este flujo protege la estabilidad del código base. Si tu código falla, solo falla en tu rama, manteniendo el proyecto principal intacto y siempre funcional.

## BLINDAJE DE RAMAS Y SEGURIDAD

Para garantizar la integridad del producto, el repositorio cuenta con candados de seguridad:

- **Rama `main`:**
  - Representa el estado de producción  
  - Solo recibe código desde `develop` cuando un Milestone (Hito) está al 100%  

- **Restricción de Merge:**
  - El botón de integración está bloqueado para los desarrolladores  
  - Solo el Líder tiene el permiso final tras la revisión  

---

## ESTÁNDARES DE CALIDAD (DEFINITION OF DONE)

Antes de que el Líder apruebe un Pull Request, el desarrollador debe garantizar:

- **Limpieza:**  
  Cero `console.log`, variables sin uso o código comentado (*"por si acaso"*)  

- **Responsive:**  
  El diseño se adapta sin romperse a pantallas móviles  

- **Sincronización:**  
  La rama está actualizada y sin conflictos de merge  

- **Automatización:**  
  La descripción del PR incluye `Closes #ID` para cerrar la tarea  

### El "Por qué"

Un control de calidad preventivo reduce la deuda técnica (errores acumulados) y automatiza el proceso administrativo.

---

## CRITERIOS DE ENTREGA Y EVALUACIÓN

La fase del proyecto se considera exitosa, terminada y lista para calificación únicamente cuando:

- El **Milestone** en GitHub marca el **100%** de progreso  
- Todas las **Issues** del hito están cerradas y vinculadas a un PR aprobado  
- El proyecto está desplegado en vivo (ej. Vercel, GitHub Pages) y funciona sin errores  

### El "Por qué"

En la industria, el software que no está publicado no existe. Esto vincula el resultado técnico con la gestión profesional.

---

## DIRECCIÓN DEL PROYECTO

- **Instructor:** [Tu Nombre Aquí]  
- **Institución:** Servicio Nacional de Aprendizaje (SENA)  
- **Centro:** [Nombre de tu Centro de Formación]  
- **Programa:** Análisis y Desarrollo de Software  

---

Este repositorio es propiedad del equipo de desarrollo y se rige por las políticas de formación profesional integral del SENA.