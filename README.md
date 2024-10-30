# 📚 NYT Book Lists Web App

Este proyecto es una aplicación web que consume la API de listas de libros del [New York Times] para mostrar y gestionar información sobre libros. La aplicación está desarrollada con HTML, CSS y JavaScript (ES6), sin el uso de frameworks o librerías externas.

## 🎯 Objetivos del Proyecto

- Consumir la API del New York Times y cargar dinámicamente los datos de listas de libros.
- Implementar una animación de carga mientras se recuperan los datos.
- Visualizar las listas de libros con detalles como nombre, frecuencia de actualización y fechas.
- Permitir la exploración de cada lista para ver la información detallada de cada libro, con una disposición intuitiva y responsive.
- Aplicar buenas prácticas de desarrollo y código limpio.
- Gestionar el proyecto desde el inicio en GitHub con ramas, siguiendo principios de colaboración y versionado.

## 🚀 Características

1. **Visualización de Listas de Libros**: 
   - Se muestra el nombre de cada lista de libros.
   - Incluye la fecha del libro más antiguo, la última fecha de incorporación y la frecuencia de actualización.
   - Link para acceder a la lista completa de libros.

2. **Vista Detallada de Libros**:
   - Carátula del libro, título, posición en la lista y descripción.
   - Semanas en las que el libro ha permanecido en la lista.
   - Enlace para comprar el libro en Amazon (abre en una pestaña nueva).
   - Botón para volver a la vista general.

3. **Animación de Carga**:
   - Mientras se realiza la petición a la API, se muestra una animación de carga.

4. **Diseño Responsive**:
   - Enfoque mobile-first, adaptado a dispositivos móviles y pantallas de mayor tamaño.

## 📂 Estructura del Proyecto
```bash
├── index.html # Estructura HTML principal 
├── index.js # Lógica de la aplicación en JavaScript 
├── style.css # Estilos de la aplicación, incluyendo diseño responsive 
└── README.md # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** para la estructura semántica de la web.
- **CSS3** para estilos y animaciones.
- **JavaScript (ES6)** para la lógica de la aplicación y la manipulación del DOM.
- **Fetch API** para consumir la API del New York Times.
- **Firebase** para poder registrarte y logearte en la web.

## 🚧 Requisitos Previos

1. **Clave de API del New York Times**: Es necesario obtener una clave de API desde el [NYT Developer Portal](https://developer.nytimes.com/).
2. **Servidor Local**: Puedes utilizar una extensión de servidor como [Live Server]

## 📋 Instrucciones de Instalación y Uso

1. **Clona este repositorio**:

   ```bash
   git clone git@github.com:SortegaG/Biblioteca_nyt.git
   ```


### Abre el Proyecto en un Servidor Local:

- Si usas Visual Studio Code, puedes instalar y utilizar la extensión **Live Server**.
- O simplemente abre `index.html` en tu navegador.

### Navega por la Aplicación:

- Visualiza las listas de libros cargadas desde la API.
- Haz clic en cualquier lista para ver los libros con su información detallada.
- Vuelve a la vista principal con el botón de regreso.

### 📏 Buenas Prácticas de Desarrollo

- Se ha utilizado **JavaScript ES6**, con un código limpio y modular.
- Manipulación dinámica del **DOM** y manejo asincrónico con `async/await`.
- Proyecto gestionado en **GitHub** con ramas para cada funcionalidad.
- Diseño **responsive** siguiendo un enfoque **mobile-first**.

### 📈 Mejoras Futuras

- Implementar opciones de **filtrado y ordenación** de libros.
- Añadir más detalles en la interfaz de cada libro, como el **autor** o **género**.
- Implementación de **Favoritos** para poder almacenar los libros que necesites dentro de Firebase.
- **Refactorización modular** para mantener escalabilidad en la aplicación.
