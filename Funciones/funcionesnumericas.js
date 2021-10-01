var numero = 21;
var resultado = Number.isInteger(numero); //la funcionalidad de isIntenger nos dirá si el valor numerico de la variable es entero, imprimirá "true";
console.log(resultado);

var resultado2 = Number.parseInt(numero); //parseInt convertirá el valor de la variable numérica a numero entero.
console.log(resultado2);

//
var numero2 = '21.523456s';

var resultado3 = Number.parseFloat(numero2); //parseFloat convertirá el valor de la variable, ya sea numeros o cadena de texto a un valor flotante
console.log(resultado3);

var toFixed = resultado3.toFixed(3); //toFixed nos permite elegir el numero de decimales que queremos que tenga nuestra variable
console.log(toFixed);