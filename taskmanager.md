🚀 Gestor de Tareas del Proyecto: Automatizalo.pe Web (v2.0)
Este gestor de tareas está diseñado para guiar el desarrollo del sitio web Automatizalo.pe, utilizando Gatsby para el frontend y Strapi como CMS headless.

Estado de las Tareas:
🟡 En Progreso
✅ Completado
⏳ Pendiente
⚠️ Bloqueado

Fases del Proyecto y Tareas Principales:

Fase 1: Fundación y Configuración Inicial del Frontend
    1. Tarea: Inicialización del Proyecto y Configuración del Entorno
        ◦ Subtarea: Configurar el repositorio Git con ramas (main, develop, feature/*).
            ▪ Estado: ✅ Completado
            ▪ Dependencia: Ninguna
        ◦ Subtarea: Inicializar el proyecto Frontend (Gatsby).
            ▪ Estado: ✅ Completado
            ▪ Dependencia: Ninguna
            ▪ Notas: 
                - Node.js v22.14.0 y npm v11.3.0 instalados correctamente
                - Gatsby instalado con TypeScript
                - Configuración de TypeScript completada
        ◦ Subtarea: Configurar el Hosting para el Frontend (Cloudflare Pages).
            ▪ Estado: ⏳ Pendiente (Movido a Fase 7 - Despliegue)
            ▪ Dependencia: Desarrollo Frontend completo
            ▪ Notas: Se configurará durante la fase de despliegue
        ◦ Subtarea: Configurar el manejo de Imágenes (Cloudinary + plugin de Gatsby).
            ▪ Estado: ⏳ Pendiente (Movido a Fase 3 - Desarrollo Frontend)
            ▪ Dependencia: Desarrollo de componentes que requieran imágenes
            ▪ Notas: Se configurará cuando se implementen los componentes que lo necesiten

Fase 2: Sistema de Diseño e Interfaz de Usuario Principal
    2. Tarea: Implementar el Sistema de Diseño
        ◦ Subtarea: Definir e implementar la paleta de colores en variables/tokens CSS.
            ▪ Estado: ✅ Completado
            ▪ Dependencia: Configuración del proyecto Frontend.
            ▪ Notas: Implementado en src/styles/tokens/colors.css
        ◦ Subtarea: Configurar la tipografía (Inter, Poppins, Montserrat, Lato) y tamaños de fuente responsivos.
            ▪ Estado: ✅ Completado
            ▪ Dependencia: Configuración del proyecto Frontend.
            ▪ Notas: Implementado en src/styles/tokens/typography.css
        ◦ Subtarea: Implementar Tokens CSS para espaciado, radio, etc.
            ▪ Estado: ✅ Completado
            ▪ Dependencia: Configuración del proyecto Frontend.
            ▪ Notas: Implementado en src/styles/tokens/spacing.css
        ◦ Subtarea: Crear componentes base de UI (botones, inputs, tarjetas, elementos de layout) basados en el sistema de diseño.
            ▪ Estado: 🟡 En Progreso
            ▪ Dependencia: Tokens del Sistema de Diseño implementados.
            ▪ Notas: Estilos globales implementados en src/styles/global/global.css
            ▪ [x] Componente Button con variantes (primary, secondary, outline, ghost)
            ▪ [x] Componente Input con estados (default, error, disabled)
            ▪ [x] Componente Card con secciones (header, body, footer)
            ▪ [x] Componentes de layout (Container, Grid, Flex)
            ▪ [x] Componentes de navegación (Navbar, Footer)

Fase 3: Desarrollo del Frontend (Gatsby)
    3. Tarea: Desarrollar la Estructura Principal del Frontend
        ◦ Subtarea: Configurar gatsby-config.js con los plugins necesarios
            ▪ Estado: ✅ Completado
            ▪ Dependencia: Configuración del proyecto Frontend.
            ▪ Notas: 
                - [x] Plugin de SEO básico (gatsby-plugin-react-helmet)
                - [x] Plugin de Sitemap (gatsby-plugin-sitemap)
                - [x] Plugin de Robots.txt (gatsby-plugin-robots-txt)
                - [x] Componente SEO reutilizable creado
                - [ ] Plugin de Cloudinary (Pendiente hasta configuración de Strapi)
        ◦ Subtarea: Crear componentes de layout (Encabezado, Pie de página, Navegación).
            ▪ Estado: ✅ Completado
            ▪ Dependencia: Componentes UI del Sistema de Diseño.
            ▪ Notas: Implementados Navbar y Footer
        ◦ Subtarea: Implementar el enrutamiento para todas las páginas.
            ▪ Estado: ✅ Completado
            ▪ Dependencia: Componentes de layout completados.
            ▪ Notas:
                - [x] Componente Layout base creado
                - [x] Página de Inicio implementada
                - [x] Página de Servicios implementada
                - [x] Página Cómo lo Hacemos implementada
                - [x] Página de Propósito implementada
                - [x] Página de Blog implementada
                - [x] Página de Contacto implementada
        ◦ Subtarea: Crear datos mock para desarrollo y pruebas.
            ▪ Estado: ⏳ Pendiente
            ▪ Dependencia: Estructura de páginas definida.

    4. Tarea: Desarrollar Páginas
        ◦ Subtarea: Desarrollar la Página de Inicio (/)
            ▪ Secciones: Mensaje de valor, Propósito, Cómo lo hacemos, Servicios.
            ▪ Dependencia: Estructura Principal del Frontend, Sistema de Diseño.
        ◦ Subtarea: Desarrollar la Página de Servicios (/servicios/)
            ▪ Tarjetas interactivas para servicios.
            ▪ Dependencia: Estructura Principal del Frontend, Sistema de Diseño.
        ◦ Subtarea: Desarrollar la Página Cómo lo Hacemos (/como-lo-hacemos/)
            ▪ Línea de tiempo para los pasos del proceso.
            ▪ Dependencia: Estructura Principal del Frontend, Sistema de Diseño.
        ◦ Subtarea: Desarrollar la Página de Propósito (/proposito/)
            ▪ Declaración de por qué existe Automatizalo.pe.
            ▪ Dependencia: Estructura Principal del Frontend, Sistema de Diseño.
        ◦ Subtarea: Desarrollar la Página de Blog (/blog/) y Plantillas de Publicaciones de Blog
            ▪ Listados, categorías, información del autor.
            ▪ Dependencia: Estructura Principal del Frontend, Sistema de Diseño.
        ◦ Subtarea: Desarrollar la Página de Contacto (/contacto/)
            ▪ Formulario y botón flotante de WhatsApp siempre visible.
            ▪ Dependencia: Estructura Principal del Frontend, Sistema de Diseño.
        ◦ Subtarea: Crear plantillas dinámicas para servicios, publicaciones de blog, etc.
            ▪ Dependencia: Tareas de desarrollo de páginas.

    5. Tarea: Implementar Funcionalidades de Accesibilidad y UX
        ◦ Subtarea: Asegurar contraste WCAG AA para todos los elementos.
            ▪ Dependencia: Desarrollo de páginas completo.
        ◦ Subtarea: Implementar navegación con teclado (tab, enter).
            ▪ Dependencia: Desarrollo de páginas completo.
        ◦ Subtarea: Asegurar áreas táctiles mínimas de 44x44px.
            ▪ Dependencia: Desarrollo de páginas completo.
        ◦ Subtarea: Añadir feedback visual para formularios y botones.
            ▪ Dependencia: Desarrollo de páginas completo.
        ◦ Subtarea: Integrar microtextos para guiar la interacción.
            ▪ Dependencia: Desarrollo de páginas completo.

    6. Tarea: Implementar Animaciones
        ◦ Subtarea: Aplicar transiciones suaves (all 0.3s ease-in-out).
            ▪ Dependencia: Sistema de Diseño y desarrollo de Páginas.
        ◦ Subtarea: Implementar "scroll reveal" para secciones destacadas (usar con moderación).
            ▪ Dependencia: Desarrollo de páginas.
        ◦ Subtarea: Añadir efectos para los estados :hover, :focus y :disabled.
            ▪ Dependencia: Sistema de Diseño y desarrollo de Páginas.

Fase 4: Desarrollo del Backend (CMS - Strapi)
    7. Tarea: Configuración del CMS Strapi y Modelado de Contenido
        ◦ Subtarea: Inicializar el proyecto Backend (Strapi).
            ▪ Dependencia: Desarrollo Frontend completo.
        ◦ Subtarea: Configurar la Base de Datos (Neon - PostgreSQL serverless).
            ▪ Dependencia: Inicialización del proyecto Strapi.
        ◦ Subtarea: Configurar el Hosting para el Backend (Render.com).
            ▪ Dependencia: Inicialización del proyecto Strapi.
        ◦ Subtarea: Definir Tipos de Colección basados en la estructura del Frontend:
            ▪ Servicios (para la página /servicios/)
            ▪ Publicaciones de Blog (para la página /blog/, incluyendo categorías, autor)
            ▪ Pasos del Proceso (para la línea de tiempo de /como-lo-hacemos/)
            ▪ Contenido de la Declaración de Propósito (para la página /proposito/)
            ▪ Contenido General de Página (para bloques de contenido reutilizables, CTAs)
        ◦ Subtarea: Configurar Tipos Únicos para:
            ▪ Secciones de contenido de la Página de Inicio (Valor, Propósito, Cómo lo hacemos, Servicios).
        ◦ Subtarea: Configurar campos para cada Tipo de Colección y Tipo Único (texto, texto enriquecido, medios, relaciones).
        ◦ Subtarea: Configurar roles y permisos para editores de contenido.
        ◦ Subtarea: Implementar endpoints de API (GraphQL/REST) para que Gatsby los consuma.
            ▪ Dependencia: Modelos de contenido definidos.

Fase 5: Integración Frontend-Backend
    8. Tarea: Integrar Gatsby con Strapi
        ◦ Subtarea: Configurar el plugin de Gatsby para Strapi.
            ▪ Dependencia: Backend Strapi configurado y Frontend Gatsby desarrollado.
        ◦ Subtarea: Reemplazar datos mock con datos reales de Strapi.
            ▪ Dependencia: Plugin de Gatsby para Strapi configurado.
        ◦ Subtarea: Implementar consultas GraphQL en Gatsby para obtener datos de Strapi.
            ▪ Dependencia: Endpoints de API de Strapi listos.

Fase 6: Contenido y SEO
    9. Tarea: Carga de Contenido y Optimización SEO
        ◦ Subtarea: Redactar e ingresar todo el texto del sitio web en el CMS Strapi.
            ▪ Dependencia: Integración Frontend-Backend completa.
        ◦ Subtarea: Optimizar imágenes (compresión, texto alternativo).
            ▪ Dependencia: Configuración de Cloudinary, Carga de contenido.
        ◦ Subtarea: Implementar mejores prácticas de SEO on-page (títulos meta, descripciones, etiquetas de encabezado).
            ▪ Dependencia: Desarrollo de páginas, Carga de contenido.
        ◦ Subtarea: Configurar analíticas (ej. Google Analytics).
            ▪ Dependencia: Despliegue del Frontend.

Fase 7: Pruebas y Aseguramiento de Calidad (QA)
    10. Tarea: Pruebas Exhaustivas
        ◦ Subtarea: Pruebas unitarias para componentes/funciones críticas.
            ▪ Dependencia: Desarrollo del Componente/Función.
        ◦ Subtarea: Pruebas de integración (Gatsby + Strapi).
            ▪ Dependencia: Desarrollo de Frontend y Backend completo.
        ◦ Subtarea: Pruebas de extremo a extremo (End-to-End) de los flujos de usuario.
            ▪ Dependencia: Desarrollo de todas las páginas completo.
        ◦ Subtarea: Pruebas en diferentes navegadores y dispositivos.
            ▪ Dependencia: Desarrollo de todas las páginas completo.
        ◦ Subtarea: Pruebas de rendimiento (Lighthouse, WebPageTest).
            ▪ Dependencia: Desarrollo de todas las páginas completo.
        ◦ Subtarea: Pruebas de accesibilidad (herramientas automáticas + revisiones manuales).
            ▪ Dependencia: Implementación de accesibilidad completa.
        ◦ Subtarea: Pruebas de Aceptación del Usuario (UAT) con los stakeholders.
            ▪ Dependencia: Todas las fases de prueba anteriores completas.

Fase 8: Despliegue y Lanzamiento
    11. Tarea: Despliegue
        ◦ Subtarea: Configurar pipelines de construcción para Strapi (Render.com).
            ▪ Dependencia: Desarrollo de Strapi completo y probado.
        ◦ Subtarea: Configurar pipelines de construcción para Gatsby (Cloudflare Pages).
            ▪ Dependencia: Desarrollo de Gatsby completo y probado.
        ◦ Subtarea: Revisión final y aprobación del contenido.
            ▪ Dependencia: Carga de contenido y UAT.
        ◦ Subtarea: Ejecución de la lista de verificación para el lanzamiento (Go-live checklist).
        ◦ Subtarea: Monitorear el lanzamiento inicial.

Fase 9: Post-Lanzamiento y Documentación
    12. Tarea: Documentación y Entrega
        ◦ Subtarea: Finalizar el README.md con cualquier información nueva.
        ◦ Subtarea: Crear documentación de usuario para la gestión de contenido del CMS.
        ◦ Subtarea: Documentar en docs/ las decisiones de diseño si no están ya cubiertas.
        ◦ Subtarea: Transferencia de conocimiento al cliente/equipo de mantenimiento.

Sugerencia de Dinámica y Flujo de Trabajo:
    • Enfoque Ágil (Sprints):
        ◦ Dividir las fases en sprints de 1-2 semanas.
        ◦ Planificación del Sprint: Seleccionar tareas/subtareas para el próximo sprint.
        ◦ Reuniones Diarias (Daily Stand-ups): Actualizaciones rápidas sobre el progreso y bloqueos.
        ◦ Revisión del Sprint: Demostrar el trabajo completado al final de cada sprint.
        ◦ Retrospectiva del Sprint: Discutir qué salió bien y qué se puede mejorar.
    • Control de Versiones (Git):
        ◦ Rama main para código listo para producción.
        ◦ Rama develop para desarrollo e integración continua.
        ◦ Ramas feature/<nombre-de-tarea> para tareas/funcionalidades individuales. Las Pull Requests (PRs) a develop deben ser revisadas.
    • Herramienta de Seguimiento de Tareas: Usar una herramienta digital (Jira, Trello, Asana, Monday.com, Notion, etc.) para gestionar estas tareas, asignar responsables, establecer plazos y seguir el progreso.
    • Comunicación: Canales de comunicación regulares (Slack, Teams) para consultas rápidas y actualizaciones. Reuniones programadas para discusiones más detalladas.
    • Ciclos de Revisión y Feedback:
        ◦ Revisión de Diseño: Antes de la codificación extensiva de elementos UI.
        ◦ Revisión de Código: Para todas las PRs para mantener la calidad del código.
        ◦ Revisión de Contenido: Antes de que el contenido se publique.
        ◦ Revisión de Stakeholders: En hitos clave (ej. después de desarrollar una página importante, antes de UAT).
Esta estructura proporciona una visión general completa. Puedes ajustar la granularidad de las subtareas y el orden según las necesidades y prioridades específicas de tu equipo. ¡Mucha suerte con tu proyecto!
