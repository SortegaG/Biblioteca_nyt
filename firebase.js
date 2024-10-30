// Datos de configuracion de FIREBASE

let firebaseConfig = { //objeto de configuración de Firebaseconst firebaseConfig = {
    apiKey: "AIzaSyBzhK6MsdHLuoNkAyISCk4FbgfmwKCY3Lw",
    authDomain: "demoweb-fdeb3.firebaseapp.com",
    projectId: "demoweb-fdeb3",
    storageBucket: "demoweb-fdeb3.appspot.com",
    messagingSenderId: "251150009315",
    appId: "1:251150009315:web:6a3bfcf1ae81979857d6d6"
};


firebase.initializeApp(firebaseConfig);// Inicializaar app Firebase

const db = firebase.firestore();// db representa mi BBDD //inicia Firestore
//-------------------------------------------------------------
// Lógica de botones de SING IN y LOG IN


document.addEventListener('DOMContentLoaded', function () {
    const logOutButton = document.getElementById('logout');
    logOutButton.style.display = 'none';

    document.getElementById('signin').addEventListener('click', function () {
        const register = document.getElementById('form-register');
        register.style.display = (register.style.display === 'block') ? 'none' : 'block';
    });

    document.getElementById('login').addEventListener('click', function () {
        const logger = document.getElementById('form-login');
        logger.style.display = (logger.style.display === 'block') ? 'none' : 'block';
    });
});


// Funciones de autenticación de Firebase

const signUpUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            alert(`Usuario registrado: ${user.email}`);
            createUser({ id: user.uid, email: user.email, message: "hola!" });
        })
        .catch((error) => alert("Error al registrar usuario: " + error.message));
};

const signInUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            alert(`Usuario logueado: ${user.email}`);
            toggleUserInterface(true); 
        })
        .catch((error) => alert("Error al iniciar sesión: " + error.message));
};

const signOut = () => {
    firebase.auth().signOut().then(() => {
        alert("Sesión cerrada");
        toggleUserInterface(false); 
    }).catch((error) => alert("Error al cerrar sesión: " + error.message));
};

// Evento de envío del formulario de registro
document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const pass = event.target.elements.pass.value;
    const pass2 = event.target.elements.pass2.value;
    pass === pass2 ? signUpUser(email, pass) : alert("Las contraseñas no coinciden");
});

// Evento de envío del formulario de inicio de sesión
document.getElementById("form2").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = event.target.elements.email2.value;
    const pass = event.target.elements.pass3.value;
    signInUser(email, pass);
});

// Evento de click en el botón de logout
document.getElementById("logout").addEventListener("click", signOut);

// Control de estado de autenticación
firebase.auth().onAuthStateChanged(function (user) {
    toggleUserInterface(!!user); // Cambia la interfaz según si hay un usuario logueado o no
});
// -------------------------------------------------------------------------

function toggleUserInterface(isLoggedIn) {
    document.getElementById('signin').style.display = isLoggedIn ? 'none' : 'block';
    document.getElementById('login').style.display = isLoggedIn ? 'none' : 'block';
    document.getElementById('logout').style.display = isLoggedIn ? 'block' : 'none';
    document.getElementById('forms-container').style.display = isLoggedIn ? 'none' : 'block';
}
