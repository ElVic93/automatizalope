# 🚀 Automatizalo.pe - Proyecto Web con Gatsby + Strapi

**Versión:** 2.0
**Fecha:** 07 de mayo de 2025
**Autor:** Automatizalo.pe

---

## 🧭 ¿Qué es esta web y por qué importa?

Esta web está diseñada para mostrar quiénes somos, qué hacemos y cómo ayudamos a empresas a automatizar procesos con inteligencia artificial. No necesitas saber de programación para entenderla ni usarla. Carga rápido, se adapta a todos los dispositivos y está pensada para convertir visitantes en clientes.

---

## 💡 ¿Por qué hacemos esto? (Golden Circle - Why)

En Automatizalo.pe creemos que el futuro pertenece a quienes automatizan procesos, mejoran la eficiencia y se apoyan en inteligencia artificial para escalar sus negocios. Nuestro objetivo es hacer que la automatización y la IA sean accesibles para todos.

---

## ⚙️ ¿Cómo lo hacemos? (Golden Circle - How)

* Analizamos los procesos internos y externos del cliente
* Creamos prototipos usando herramientas automáticas como n8n y bots
* Implementamos flujos automatizados y tableros de datos
* Usamos plataformas sin código para lograr resultados rápidos

---

## 🌐 ¿Qué ofrecemos? (Golden Circle - What)

* Automatización de tareas con IA
* Integración entre herramientas y plataformas
* Creación de bots para tareas repetitivas
* Dashboards con datos en tiempo real
* Consultoría digital orientada a resultados

---

## 🧰 ¿Con qué tecnologías funciona nuestra web?

| Área           | Herramienta                  |
| -------------- | ---------------------------- |
| Frontend       | Gatsby.js (React + SSG)      |
| CMS            | Strapi Headless CMS          |
| Base de Datos  | Neon (PostgreSQL serverless) |
| Hosting Front  | Cloudflare Pages             |
| Hosting Back   | Render.com                   |
| Imágenes       | Cloudinary + Gatsby plugin   |
| Automatización | n8n autoalojado              |

---

## 📁 Estructura del Proyecto

```
automatizalo/
├── backend/               # CMS editable (Strapi)
├── frontend/              # Web pública (Gatsby)
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Página de inicio, contacto, etc.
│   │   ├── templates/     # Diseño dinámico para servicios, blog...
│   │   └── styles/        # Estilos base y tokens CSS
│   └── gatsby-config.js
├── docs/                  # Documentación de diseño
└── README.md
```

---

## 🎨 Nuestra guía de diseño (Design System)

### 1. Colores principales

| Rol           | Nombre         | Hex       |
| ------------- | -------------- | --------- |
| Principal     | Azul           | `#2962FF` |
| Secundario    | Azul claro     | `#64B5F6` |
| Texto         | Gris oscuro    | `#374151` |
| Descripciones | Gris medio     | `#6B7280` |
| Fondo claro   | Gris claro     | `#F3F4F6` |
| Separadores   | Gris muy claro | `#E5E7EB` |
| Fondo base    | Blanco         | `#FFFFFF` |
| WhatsApp CTA  | Verde          | `#25D366` |
| Éxito         | Verde          | `#10B981` |
| Error         | Rojo           | `#EF4444` |
| Advertencia   | Naranja        | `#F59E0B` |
| Información   | Azul           | `#3B82F6` |

### 2. Tipografía

* **Principal:** Inter
* **Alternativas:** Poppins, Montserrat, Lato

| Elemento       | Tamaño | Peso    |
| -------------- | ------ | ------- |
| Título H1      | 32px   | Bold    |
| Subtítulo H2   | 24px   | Medium  |
| Sección H3     | 20px   | Medium  |
| Texto base     | 16px   | Regular |
| Texto auxiliar | 14px   | Regular |

* Altura de línea: `1.4`
* Unidades responsivas: `rem`

### 3. Tokens CSS

```css
:root {
  --color-primary: #2962FF;
  --color-secondary: #64B5F6;
  --color-success: #10B981;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
  --color-info: #3B82F6;
  --color-text: #374151;
  --color-text-light: #6B7280;
  --color-background: #FFFFFF;
  --color-gray-light: #F3F4F6;
  --color-gray-lighter: #E5E7EB;
  --radius-base: 12px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --font-base: 'Inter', sans-serif;
}
```

---

## 🧱 Páginas que tendrá el sitio

* `/` → Inicio con mensaje de valor + Secciones de Propósito, Cómo lo hacemos, Servicios
* `/servicios/` → Lista de servicios automatizados (tarjetas interactivas)
* `/como-lo-hacemos/` → Pasos del proceso como línea de tiempo (timeline)
* `/proposito/` → Declaración del por qué existimos
* `/blog/` → Artículos con categorías y autoría
* `/contacto/` → Formulario + botón flotante de WhatsApp visible siempre

---

```js
```

---

## ♿ Accesibilidad y experiencia de usuario

* Contraste accesible validado (AA mínimo)
* Navegación con teclado (`tab`, `enter`)
* Áreas táctiles mínimas de `44x44px`
* Feedback visual en formularios y botones
* Microtextos para guiar la interacción (ej. “¿Tienes dudas? Escríbenos”)

---

## ✨ Animaciones

* Transiciones suaves: `all 0.3s ease-in-out`
* Scroll reveal en secciones destacadas (no abusar)
* Efectos visuales en `:hover`, `:focus`, `:disabled`

---

