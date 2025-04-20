#   🎬 Mi Movie App

Aplicación web construida con React, Vite y Tailwind CSS que consume la API de The Movie Database (TMDB) para mostrar información de películas en tiempo real. Incluye paginación, modales de detalles, un sidebar interactivo y gráficos para visualizar datos.

## 📋 Tabla de contenidos

* 🚀 [Características](#caracteristicas)  


* 🛠️ [Tecnologías utilizadas](#tecnologias-utilizadas)


* 📦 [Instalación](#instalacion)  
  

* 📖 [Uso](#uso)  



##  Caracteristicas

**Listado de películas|:** Muestra 10 películas por página con paginación.

**Modal de detalles:** Al hacer clic en una película, se abre un modal con información extendida.

**Sidebar dinámico:** Navegación lateral colapsable con enlaces a secciones (Inicio, Gráficos, Idiomas) y toggle de tema claro/oscuro.

**Modo claro / oscuro**: Soporte completo a través de clases de Tailwind y un botón en el sidebar.

**Gráficos interactivos:**

- **Gráfico de barras**: Promedio de votación de las películas.

- **Gráfico de pastel:** Distribución de películas por idioma original.

##  Tecnologias utilizadas

React y Vite

Tailwind CSS (darkMode: 'class', plugin @tailwindcss/line-clamp)

React Router DOM para navegación

Recharts para gráficos interactivos

Axios para peticiones HTTP a TMDB API

##  Instalacion

- Clona el repositorio:

```bash
git https://github.com/AndresUrango10/MovieJundre.git
cd dashboard-juandre
```
Instala dependencias:

```bash
npm install
```

Configura tu API Key, en el componente GetMovies.jsx:

```bash
tu_api_key
```

Inicia la aplicación:

```bash
npm run dev
```
Abre en tu navegador:http://localhost:5173

## Uso

Navega entre Inicio, Gráficos e Idiomas usando el sidebar.

Utiliza los botones de paginación para cambiar de página.

Haz clic en una película para ver más detalles en el modal.

Cambia entre tema claro/oscuro con el botón del sidebar.

