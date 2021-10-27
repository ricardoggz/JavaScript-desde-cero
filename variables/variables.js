// var: variables globales // ya no es recomendado usar var

var saludo = 'Hola mundo';// aqui declaramos un valor a nuestra variable var.

if (saludo) {
    var saludo = 'Hola :D';//aquí redeclaramos nuestra variable asignándole otro valor y la mandamos a imprimir
    console.log(saludo);//nos imprimirá 'Hola :D'.
}
console.log(saludo); //Aqui también nos imprimirá 'Hola :D', ya que volvimos a re-declarar la variable con ese valor.







// let: variables limitadas al alcance del bloque donde las definimos, es decir que pueden ser mutables //let y const respetan el flujo de la programación // 

let nombre = 'Ricardo'
if (nombre) {
    let nombre = 'Jose'
    console.log(nombre);
}
console.log(nombre);
// const: variables inmutables //Es más recomendable programar con variables inmutables
const apellido = 'Guevara';
console.log(apellido);
