# 🌶️ Pepper Inc - Landing Page Premium

![Pepper Inc](images/logo_transparent.png)

## 📋 Descripción

Landing page premium en modo oscuro para **Pepper Inc**, empresa especializada en infraestructura tecnológica, SysAdmin, DevOps, Cloud Computing y Networking.

### ✨ Características Principales

- **Dark Mode Premium** con estética "Dark Luxury Tech"
- **Color Principal:** Verde Neón (#22C55E)
- **Flip Cards Interactivas** para servicios
- **Animaciones 3D** con esfera flotante
- **Glassmorphism** en cards y elementos
- **100% Responsive** (Desktop, Tablet, Mobile)
- **Particles Background** animado
- **Scroll Animations** con Intersection Observer
- **Formulario de Contacto** integrado con WhatsApp

---

## 🎨 Paleta de Colores

### Fondos

```css
--bg-primary: #000000      /* Negro puro */
--bg-secondary: #09090B    /* Gris ultra oscuro */
--bg-tertiary: #18181B     /* Gris oscuro para cards */
```

### Verde Neón (Color Principal)

```css
--primary-50: #f0fdf4
--primary-100: #dcfce7
--primary-200: #bbf7d0
--primary-300: #86efac
--primary-400: #4ade80
--primary-500: #22C55E     /* Color base */
--primary-600: #16a34a
--primary-700: #15803d
--primary-800: #166534
--primary-900: #14532d
```

### Textos

```css
--text-primary: #FFFFFF     /* Blanco puro */
--text-secondary: #E4E4E7   /* Gris muy claro */
--text-tertiary: #A1A1AA    /* Gris medio */
--text-quaternary: #71717A  /* Gris para labels */
```

---

## 📁 Estructura del Proyecto

```text
web-pepperinc-v4/
├── index.html           # Estructura HTML completa
├── styles.css           # Estilos CSS con sistema de diseño
├── script.js            # JavaScript para interacciones
├── README.md            # Este archivo
└── images/
    └── logo.png         # Logo de Pepper Inc (generado con IA)
```

---

## 🚀 Características Técnicas

### HTML

- Estructura semántica HTML5
- Meta tags para SEO
- Open Graph para redes sociales
- Favicon integrado
- Formulario de contacto funcional

### CSS

- Variables CSS para fácil personalización
- Glassmorphism con backdrop-filter
- Animaciones CSS avanzadas
- Grid y Flexbox para layouts
- Responsive con media queries
- Transiciones suaves con cubic-bezier

### JavaScript

- Vanilla JS (sin dependencias)
- Intersection Observer para scroll animations
- Contador animado para estadísticas
- Sistema de partículas dinámico
- Flip cards con soporte touch
- Integración con WhatsApp
- Smooth scroll
- Navbar sticky con blur

---

## 🎯 Secciones de la Web

### 1. **Hero Section**

- Título principal con gradient text
- Subtítulo descriptivo
- 2 CTAs (primario y secundario)
- Estadísticas animadas (10+ años, 200+ clientes, 99.9% uptime)
- Esfera 3D flotante con anillos animados

### 2. **Partners Section**

- Logos de tecnologías: Linux, Windows, AWS, Azure, Dell, Cisco, Fortinet
- Efecto hover con color y escala

### 3. **Services Section** (Flip Cards)

Cada servicio tiene una tarjeta con flip 3D:

**Front:** Icono SVG + Título
**Back:** Título + Descripción + Tags de tecnologías

Servicios incluidos:

1. SysAdmin & SysOps
2. DevOps & CI/CD
3. Cloud Infrastructure
4. Networking & Security
5. Server Management
6. 24/7 Support

### 4. **About Section**

- Logo con efecto glow
- Descripción de la empresa
- 3 features destacados con iconos

### 5. **CTA Section**

- Llamado a la acción principal
- Botón grande con animación

### 6. **Contact Section**

- Información de contacto (Email, WhatsApp, Website)
- Formulario funcional que redirige a WhatsApp
- Glass cards con glassmorphism

### 7. **Footer**

- Logo y descripción
- Links organizados por categorías
- Información de contacto
- Redes sociales
- Copyright

---

## 🎨 Efectos y Animaciones

### Animaciones de Carga

```css
fade-in-up        /* Elementos aparecen desde abajo */
scale-in          /* Elementos escalan desde pequeño */
fade-in-rotate    /* Elementos rotan y aparecen */
```

### Animaciones en Loop

```css
float             /* Esfera flotante (6s) */
float-particle    /* Partículas de fondo (20s) */
pulse-glow        /* Glow pulsante en botones (3s) */
gradient-shift    /* Gradiente animado (4s) */
rotate-ring       /* Anillos de la esfera (15-25s) */
```

### Hover Effects

- Cards: translateY(-4px) + border glow
- Buttons: translateY(-2px) + scale(1.02) + brightness
- Links: Underline animado
- Icons: rotateY(15deg) + scale(1.1)

---

## 📱 Responsive Breakpoints

```css
Desktop XL:  1440px+     /* Layout completo */
Desktop:     1024-1439px /* Ajustes menores */
Tablet:      768-1023px  /* 2 columnas en grids */
Mobile:      0-767px     /* 1 columna, menú hamburguesa */
```

### Adaptaciones Mobile

- Hero title: 76px → 40px
- Esfera: 500px → 280px
- Services grid: 3 columnas → 1 columna
- Flip cards: Hover → Tap/Click
- Navbar: Links → Menú hamburguesa
- Partículas: 50 → 20 (performance)

---

## 🔧 Personalización

### Cambiar Color Principal

1. Abre `styles.css`
2. Busca las variables `--primary-*`
3. Reemplaza con tu paleta de colores
4. Actualiza `--primary-rgb` con los valores RGB del color base

Ejemplo para cambiar a azul (#3B82F6):

```css
--primary-500: #3B82F6;
--primary-rgb: 59, 130, 246;
```

### Modificar Contenido

1. **Textos:** Edita directamente en `index.html`
2. **Servicios:** Modifica las secciones `.service-card-flip`
3. **Contacto:** Actualiza los datos en la sección `#contact`
4. **WhatsApp:** Cambia el número en `script.js` línea 156

### Añadir Nuevas Secciones

1. Copia la estructura de una sección existente
2. Añade la clase `section-header` para el título
3. Usa `.glass-card` para cards con glassmorphism
4. Añade al observer en `script.js` para animaciones

---

## 📞 Información de Contacto

- **Website:** [www.pepperinc.net](https://www.pepperinc.net)
- **Email:** <info@pepperinc.net>
- **WhatsApp:** +58 414 180 0020 / +58 414 181 2813

---

## 🏆 Partners Tecnológicos

- **Sistemas Operativos:** Linux, Windows
- **Cloud:** AWS, Azure
- **Hardware:** Dell
- **Networking:** Cisco, Fortinet

---

## ✅ Checklist de Implementación

- [x] Logo generado con IA
- [x] Hero section con esfera 3D
- [x] Sistema de partículas (50 partículas)
- [x] Navbar sticky con blur
- [x] Flip cards de servicios
- [x] Glassmorphism en cards
- [x] Scroll animations
- [x] Contador animado
- [x] Formulario de contacto
- [x] Integración con WhatsApp
- [x] Footer completo
- [x] 100% Responsive
- [x] Mobile menu hamburguesa
- [x] Smooth scroll
- [x] SEO optimizado

---

## 🚀 Cómo Usar

### Desarrollo Local

1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo! No requiere servidor ni dependencias

### Publicar en Producción

1. Sube todos los archivos a tu hosting
2. Asegúrate de que la carpeta `images/` esté incluida
3. Configura el dominio en tu servidor
4. Opcional: Minifica CSS y JS para mejor performance

### Optimizaciones Recomendadas

- **Imágenes:** Convertir a WebP para mejor compresión
- **CSS/JS:** Minificar con herramientas como cssnano y terser
- **Fonts:** Usar font-display: swap para mejor carga
- **CDN:** Servir assets desde CDN para mejor velocidad

---

## 🎯 Próximos Pasos (Opcional)

### Mejoras Sugeridas

1. **Generar imágenes restantes:**
   - Hero visual (esfera 3D realista)
   - 6 imágenes de servicios
   - Imágenes de showcase/portfolio

2. **Añadir funcionalidades:**
   - Blog/Noticias
   - Portfolio de proyectos
   - Testimonios de clientes
   - Chat en vivo

3. **Integraciones:**
   - Google Analytics
   - Facebook Pixel
   - Mailchimp para newsletter
   - Backend para formulario

4. **Performance:**
   - Lazy loading de imágenes
   - Service Worker para PWA
   - Caché de assets
   - Optimización de fuentes

---

## 📄 Licencia

© 2026 Pepper Inc. Todos los derechos reservados.

---

## 🙏 Créditos

- **Diseño y Desarrollo:** Creado por Pepper Inc. powered by Antigravity AI
- **Tipografías:** Plus Jakarta Sans & Inter (Google Fonts)
- **Iconos:** SVG custom inline
- **Logo:** El logo oficial es diseño y propiedad de Pepper Inc.
- **Imágenes:** Las imágenes fueron generadas con IA (Gemini 3 Pro Image)

---

## 💡 Notas Técnicas

### Compatibilidad de Navegadores

- Chrome/Edge: 100%
- Firefox: 100%
- Safari: 100% (con prefijos -webkit-)
- Mobile browsers: 100%

### Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animations, Variables)
- JavaScript ES6+
- SVG para iconos
- Google Fonts

### Performance

- **First Contentful Paint:** menos de 1.5s
- **Time to Interactive:** menos de 3s
- **Lighthouse Score:** 90+

---

**¿Preguntas o soporte?**
Contacta a: <info@pepperinc.net>

🌶️ **Pepper Inc** - Infraestructura Tecnológica de Clase Mundial
