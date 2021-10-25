// var: variables globales // ya no es recomendado usar var
var saludo = 'Hola mundo';

if (saludo) {
    var saludo = 'Hola :D';
    console.log(saludo);
}
console.log(saludo);
// let: variables limitadas al alcance del bloque donde las definimos, es decir que pueden ser mutables //let y const respetan el flujo de la programación // 

let nombre = 'Ricardo'
console.log(nombre);
if (nombre) {
    let nombre = 'Jose'
    console.log(nombre);
}
// const: variables inmutables //Es más recomendable programar con variables inmutables
const apellido = 'Guevara';
console.log(apellido);
