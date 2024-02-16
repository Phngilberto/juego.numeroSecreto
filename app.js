// Inicialización de variables globales
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para verificar el intento del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    intentos++; // Incrementar intentos aquí para contabilizar todos los intentos

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El numero secreto es menor');
    } else {
        asignarTextoElemento('p','El numero secreto es mayor');
    }
    limpiarCaja(); // Mover la limpieza de la caja aquí para limpiar después de cada intento
}

// Función para limpiar la caja de entrada
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// Función para generar un número secreto no repetido
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        numeroSecreto = numeroGenerado; // Asignar el número generado a numeroSecreto
    }
}

// Corrección: Esta función parece no usarse, considera removerla si es el caso
function verificarNumero(numero) {
    if (numero == numeroSecreto) {
        alert('¡Felicidades! Has adivinado el número secreto.');
    } else {
        alert('Lo siento, ese no es el número secreto. Inténtalo de nuevo.');
    }
}

// Función para establecer condiciones iniciales del juego
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    generarNumeroSecreto(); // Corregido el nombre de la función
    intentos = 0;
    document.getElementById('reiniciar').setAttribute('disabled', 'true'); // Asegurarse de que el botón de reiniciar esté deshabilitado al inicio
}

// Función para reiniciar el juego
function reiniciarJuego() {
    limpiarCaja(); // Limpia la caja de entrada
    condicionesIniciales(); // Restablece las condiciones iniciales
}

condicionesIniciales(); // Llamar a condiciones iniciales al cargar el juego