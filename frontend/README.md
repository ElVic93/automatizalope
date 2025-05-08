# Automatizalo.pe - Frontend

Este proyecto contiene el frontend para Automatizalo.pe, una plataforma que transforma procesos manuales en soluciones automatizadas para negocios.

## 🎨 Guía de Estilo y Diseño

### Estructura de Colores

#### Colores Primarios
- **Principal**: Azul oscuro (#1E3A8A) - Utilizar para elementos interactivos principales, énfasis visual y la identidad general de la marca.
- **Secundario**: Azul claro (#64B5F6) - Utilizar para complementar el principal, acentos secundarios y elementos que requieren menos énfasis.
- **Acento**: Morado medio (#8E24AA) - Utilizar para destacar llamadas a la acción importantes, enlaces clave y elementos que necesitan una fuerte diferenciación visual.

#### Colores de Texto
- **Texto Principal**: Negro (#000000) - Utilizar para el cuerpo principal del texto para máxima legibilidad sobre fondos claros.
- **Descripciones**: Gris oscuro (#374151) - Utilizar para texto secundario, etiquetas y descripciones donde un contraste ligeramente menor es aceptable.

#### Colores de Fondo y Separadores
- **Fondo claro**: Gris claro (#F3F4F6) - Utilizar como fondo principal para secciones de contenido y áreas donde el contraste con el texto negro sea alto.
- **Separadores**: Gris muy claro (#E5E7EB) - Utilizar para líneas divisorias sutiles entre secciones o elementos.
- **Fondo base**: Blanco (#FFFFFF) - Utilizar como el fondo principal de la página.

#### Colores de Estado y Acciones
- **WhatsApp CTA**: Verde (#25D366) - Utilizar para el botón o enlace de contacto a través de WhatsApp.
- **Éxito**: Verde (#10B981) - Utilizar para indicar operaciones o estados exitosos.
- **Error**: Rojo (#EF4444) - Utilizar para indicar errores, alertas críticas o estados fallidos.
- **Advertencia**: Naranja (#F59E0B) - Utilizar para indicar advertencias o situaciones que requieren precaución.
- **Información**: Azul (#3B82F6) - Utilizar para mensajes informativos.

### Estrategias para la Legibilidad del Texto sobre Imágenes

#### 1. Capa de Superposición Semitransparente Clara
```css
.texto-sobre-imagen.overlay-claro {
  position: relative;
}

.texto-sobre-imagen.overlay-claro::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  z-index: 1;
}

.texto-sobre-imagen.overlay-claro .texto-principal {
  position: relative;
  z-index: 2;
  color: #000000;
}
```

#### 2. Fondo Semitransparente Claro para el Texto
```css
.texto-con-fondo-claro {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px 15px;
  border-radius: 5px;
}

.texto-con-fondo-claro .texto-principal {
  color: #000000;
}
```

#### 3. Sombra Exterior Sutil
```css
.texto-con-sombra {
  color: #000000;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6);
}
```

#### 4. Resplandor Exterior Sutil
```css
.texto-con-resplandor {
  color: #000000;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
}
```

#### 5. Degradado Semitransparente
```css
.texto-con-degradado::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 100%);
  z-index: 1;
}

.texto-con-degradado .texto-principal {
  position: relative;
  z-index: 2;
  color: #000000;
}
```

## 🚀 Desarrollo

Para iniciar el entorno de desarrollo:

```shell
cd frontend
npm install
npm run develop
```

El sitio estará disponible en `http://localhost:8000`

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Páginas del sitio
│   ├── templates/        # Plantillas para las páginas generadas dinámicamente
│   ├── styles/           # Estilos globales y configuración de Tailwind
│   └── images/           # Imágenes utilizadas en el sitio
├── gatsby-config.js      # Configuración principal de Gatsby
├── gatsby-node.js        # Configuración de la generación de páginas
└── tailwind.config.js    # Configuración de Tailwind CSS
```

## 🧰 Tecnologías Utilizadas

- Gatsby.js
- React
- TypeScript
- Tailwind CSS
- PostCSS
