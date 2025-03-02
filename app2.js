let numeroSecreto = 0; //Buena practica asignarle un valor OJO condiciones iniciales le dara el valor correcto
let intentos = 0; //Buena practica asignarle un valor 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
        document.getElementById('reiniciar').removeAttribute('disabled'); //OJO aqui no lleva el numeral no lo aceptaria
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p','El número secreto es menor');
        } else {
            asignarTextoElemento ('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja(); 
    }
    return;

}
//Esta función se llama cuando la persona no acierta
function limpiarCaja(){
    //Esta variable es una opción pero se puede reducir
    /*let valorCaja = document.querySelector('#valorUsuario') //Esta función sirve para limpiar la caja y nop borrar manualmente
    valorCaja.value = ''; */
    document.querySelector('#valorUsuario').value = ''; //Asi se reduce la funcion anterior
}

function generarNumeroSecreto (){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista 
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles'); 
    } else {

    //Si el numero generado ya esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); //Recursividad se llama asi misma para generar numero sin repetir
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
//Aquí se encapsulan los mensajes
function condicionesIniciales (){
    asignarTextoElemento('h1','Bienvenido al Juego de número secreto');  
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; //OJO se le asigno nuevo valor 
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos 
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //Para apagara el boron de reinicio setar atributo
}

condicionesIniciales();//Aquí llamamos la función creada de los mensajes 


//Estos 2 mensajes se colocaran en una función para tener mejor presentación en el código
//asignarTextoElemento('h1','Bienvenido al Juego de número secreto'); //Para llamar a la función solo se asigna nombre y parentesis.AQUI SE AÑADE TEXTO 
//asignarTextoElemento('p','Indica un número del 1 al 10'); //Se llama a p. 
