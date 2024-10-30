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
    document.getElementById('signin').addEventListener('click', function (event)  {
        const register = document.getElementById('form-register');
        register.style.display = 'block';
    });
    document.getElementById('login').addEventListener('click', function (event)  {
        const logger = document.getElementById('form-login');
        logger.style.display = 'block';
    });
});

// const logOutButton = document.getElementById('logout')
// logOutButton.style.display = 'none';

// ---------------------------------------------------------------------
// Funciones de firebase

const signUpUser = (email, password) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            console.log(userCredential)
            let user = userCredential.user;
            console.log(`se ha registrado ${user.email} ID:${user.uid}`)
            alert(`se ha registrado ${user.email} ID:${user.uid}`)
            // ...
            // Saves user in firestore
            createUser({
                id: user.uid,
                email: user.email,
                message: "hola!"
            });

        })
        .catch((error) => {
            console.log("Error en el sistema" + error.message, "Error: " + error.code);
        });
};


document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = event.target.elements.email.value;
    let pass = event.target.elements.pass.value;
    let pass2 = event.target.elements.pass2.value;

    pass === pass2 ? signUpUser(email, pass) : alert("error password");
})


const signInUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            console.log(`se ha logado ${user.email} ID:${user.uid}`)
            alert(`se ha logado ${user.email} ID:${user.uid}`)
            console.log("USER", user);

            const singInButton = document.getElementById('signin');
            singInButton.style.display = 'none';

            const logInButton = document.getElementById('login');
            logInButton.style.display = 'none';

            const logOutButton = document.getElementById('logout')
            logOutButton.style.display = 'block';
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
}

const signOut = () => {
    let user = firebase.auth().currentUser;

    firebase.auth().signOut().then(() => {
        console.log("Sale del sistema: " + user.email)
    }).catch((error) => {
        console.log("hubo un error: " + error);
    });
}


document.getElementById("form2").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = event.target.elements.email2.value;
    let pass = event.target.elements.pass3.value;
    signInUser(email, pass)
})
document.getElementById("salir").addEventListener("click", signOut);

// Listener de usuario en el sistema
// Controlar usuario logado
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(`Está en el sistema:${user.email} ${user.uid}`);
        document.getElementById("message").innerText = `Está en el sistema: ${user.uid}`;

    } else {
        console.log("no hay usuarios en el sistema");
        document.getElementById("message").innerText = `No hay usuarios en el sistema`;
    }
});

const logOutButton = document.getElementById('logout')
logOutButton.style.display = 'none';