let array = ['Ricardo', 21, 'ricardo_guevarag']
//Mandar a imprimir arreglos:
//Los arreglos empiezan desde el valor "0", es decir, dependiendo de la posicion del valor comenzará con 0,1,2,3,3,4:
console.log(array[0]); //se imprimirá el valor 0 de "let array", en este caso es 'Ricardo'

//Si queremos agregar otro valor al imprimir: 
console.log(array[0,2]);

//Pueden existir arreglos dentro de un arreglo:

let arreglo2 = ['Nombre: Ricardo', ['edad: 21 años', 'sexo: masculino']];
//mandamos a imprimir el arreglo dentro de "let arreglo2" conforme a su posición iniciando desde 0:
console.log(arreglo2[0,1]);

//Un arreglo también puede recibir un objeto:

var objeto = {
    nombre: 'Ricardo',
    nombre2: 'José',
    edad: 21,
    genero: 'masculino'
}

var Miarreglo = ['Hola', 'Mis datos son:', objeto]
console.log(Miarreglo);

//Los arreglos pueden recibir una funcion:
let miFuncion = function(a,b){
    a = 1;
    b = 1;
    c = a+ b;  
}
miFuncion();
console.log(c);

let arrayFunction = ['suma:', miFuncion];
console.log(arrayFunction);
