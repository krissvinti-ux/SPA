# CURIOCITY

CURIOCITY es una página web que consume la API pública de [Useless Facts](https://uselessfacts.jsph.pl/) para mostrar datos curiosos y permitir que el usuario guarde sus favoritos en la misma interfaz.

## Funcionalidades

- Botón **“📘 Curious fact”**: obtiene un dato curioso aleatorio desde la API usando `fetch` y `async/await` y lo muestra en pantalla.
- Botón **“⭐ Add to favorites”**: guarda el dato curioso actual en una lista de favoritos.
- Botón **“⭐ Favorites”**: muestra la lista de todos los datos curiosos marcados como favoritos.
- Sección de **favoritos**: los hechos guardados se renderizan dinámicamente en un `<ul>` dentro de la página.
- Uso de un **grid de imágenes** almacenadas en la carpeta `images/` para complementar el diseño visual de la SPA.

## Tecnologías utilizadas

- **HTML5**: estructura de la página (`src/page.html`).
- **CSS3**: estilos y maquetación (`src/style.css`).
- **JavaScript (Vanilla)**:
  - Consumo de la API `https://uselessfacts.jsph.pl/api/v2/facts/random`.
  - Manejo de eventos de los botones.
  - Gestión de la variable del dato actual y del array de favoritos.
  - Creación dinámica de elementos `<li>` para la lista de favoritos.
- **Node.js (opcional)**: para pruebas en la carpeta `src/testing-js`.

## Estructura del proyecto

```text
SPA/
├── images/                 # Imágenes usadas en la página
│   ├── background.jpg
│   ├── background.png
│   ├── img1.jpeg
│   ├── img1.png
│   ├── img2.png
│   ├── img3.png
│   ├── img4.png
│   ├── img5.png
│   ├── img6.png
│   ├── img7.png
│   ├── img8.png
│   └── img9.png
└── src/
    ├── testing-js/         # Carpeta para pruebas de JavaScript en terminal
    ├── page.html           # Página principal CURIOCITY
    ├── page.js             # Lógica JS (API + favoritos)
    ├── style.css           # Estilos principales
    └── README.md           # Documentación del proyecto
Instalación y Uso
Prerrequisitos
Tener instalado Visual Studio Code.

Extensión Live Server instalada en VS Code.

Pasos de instalación
Clona el repositorio

bash
Copiar código
git clone https://github.com/krissvinti-ux/SPA.git
cd curiocity
Sustituye tu-usuario y curiocity por tu usuario y nombre real del repo en GitHub.

Abre el proyecto en VS Code

bash
Copiar código
code .
Inicia Live Server

Haz clic derecho sobre page.html (dentro de la carpeta src/).

Selecciona “Open with Live Server”.

El proyecto se abrirá en tu navegador, normalmente en http://localhost:5500.

⚠️ Importante: Es recomendable usar Live Server para que las rutas relativas a images/ y src/ funcionen correctamente y puedas ver los cambios en tiempo real.

👥 Equipo de Desarrollo
Este proyecto fue desarrollado por:

Desarrolladora	Rol	GitHub
Cristina Viejo	Frontend Lead	GitHub
Cristina Viejo	JavaScript Dev	GitHub
Cristina Viejo	UI/UX Designer	GitHub
Cristina Viejo	QA & Testing	GitHub

💜 Proyecto desarrollado en el bootcamp FemCoders 2025.

Posibles mejoras futuras

Permitir eliminar elementos individuales de la lista de favoritos.
Filtrar o buscar dentro de la lista de favoritos.
Desarrollo de testing

