//Las funciones son un conjunto de sentencias que realizan una tarea
//sintaxis:
function miFuncion() {
    console.log('Hola mundo');
}
miFuncion();  //Mandar a llamar la funcion

//Las funciones también pueden recibir parámetros:

function suma(a,b){
    let resultado = a + b;
    console.log(resultado);
}
suma(1,1);  //Le daremos valor a las variables

//Las funciones también pueden retornar valores:

function suma2(c,d){
    return c + d;
}
console.log(suma2(2,2));

//También podemos escribir una funcion de una variable:

var funcionVariable = function(e,f){
    return e + f;
}
console.log(funcionVariable(3,3));

//Las funciones pueden ser reutilizables: 
console.log(funcionVariable(4,4));