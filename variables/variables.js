// var: variables globales
var saludo = 'Hola mundo';
if (saludo) {
    var saludo = 'Hola :D';
    console.log(saludo);
}
console.log(saludo);
// let: variables limitadas al alcance del bloque donde las definimos

let nombre = 'Ricardo'
console.log(nombre);
if (nombre) {
    let nombre = 'Jose'
    console.log(nombre);
}
// const: variables inmutables
const apellido = 'Guevara';
console.log(apellido);
