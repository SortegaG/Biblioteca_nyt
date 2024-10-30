
// Variables donde almacenar las APIS

const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists'
const API_KEY = 'Vdy9zGETp9GFsQwbAh8DZVYXG4a8upH7';

// ----------------------------------------------------------------------------------------------------

// Seleccionar elementos del DOM
const content = document.getElementById('content');
const loader = document.getElementById('loader');
const bookListsContainer = document.getElementById('book-lists');


// Mostrar el cargador y cargar listas iniciales
loader.style.display = 'block';
getData();

// Función para obtener listas de libros
async function getData() {
    try {
        const response = await fetch(`${BASE_URL}/names.json?api-key=${API_KEY}`);
        const data = await response.json();
        const results = data.results
        console.log(results)

        // Ocultar cargador y mostrar listas
        loader.style.display = 'none';
        pintarListasLibros(results);
    } catch (error) {
        loader.textContent = 'Error al cargar las listas.';
        console.error(error);
    }
}

// Función para renderizar listas en el DOM
function pintarListasLibros(results) {
    results.forEach(list => {
        const listCard = document.createElement('div');
        listCard.className = 'list-card';

        listCard.innerHTML = `
            <h2>${list.list_name}</h2>
            <p>Fecha del libro más antiguo: ${list.oldest_published_date}</p>
            <p>Última fecha de incorporación: ${list.newest_published_date}</p>
            <p>Frecuencia de actualización: ${list.updated}</p>
            <a href="#" onclick="cargarDetalles('${list.list_name_encoded}')">Ver lista completa</a>
        `;
        bookListsContainer.appendChild(listCard);
    });
}

// Función para cargar detalles de una lista específica
async function cargarDetalles(list_name_encoded) {
    loader.style.display = 'block';
    bookListsContainer.innerHTML = ''; // Limpiar el contenedor

    try {
        const response = await fetch(`${BASE_URL}/current/${list_name_encoded}.json?api-key=${API_KEY}`);
        const data = await response.json();
        const list = data.results;

        loader.style.display = 'none';
        pintarListaDetalles(list);
    } catch (error) {
        loader.textContent = 'Error al cargar los detalles de la lista.';
        console.error(error);
    }
}

// Función para renderizar detalles de una lista específica
function pintarListaDetalles(list) {
    const backButton = document.createElement('button');
    const divBackButton = document.getElementById('back-btn')
    backButton.textContent = 'Volver';
    backButton.onclick = () => location.reload();
    divBackButton.appendChild(backButton);

    list.books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        bookCard.innerHTML = `
            <img src="${book.book_image}" alt="Portada de ${book.title}">
            <h3>#${index + 1} ${book.title}</h3>
            <p>Semanas en la lista: ${book.weeks_on_list}</p>
            <p>${book.description}</p>
            <a href="${book.amazon_product_url}" target="_blank">Comprar en Amazon</a>
        `;

        content.appendChild(bookCard);
    });
}

const logOutButton = document.getElementById('logout')
logOutButton.style.display = 'none';