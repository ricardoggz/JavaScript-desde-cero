let array = ['Ricardo', 21, 'ricardo_guevarag']
//Mandar a imprimir arreglos:
//Los arreglos empiezan desde el valor "0", es decir, dependiendo de la posicion del valor comenzará con 0,1,2,3,3,4:
console.log(array[0]); //se imprimirá el valor 0 de "let array", en este caso es 'Ricardo'

//Si queremos agregar otro valor al imprimir: 
console.log(array[0,2]);

//Pueden existir arreglos dentro de un arreglo:(Arreglos multidimensionales)

let arreglo2 = ['Nombre: Ricardo', ['edad: 21 años', 'sexo: masculino']];
//mandamos a imprimir el arreglo dentro de "let arreglo2" conforme a su posición iniciando desde 0:
console.log(arreglo2[0,1][1]);//agregamos otros corchetes para acceder a cualquier posición de nuestro arreglo que está dentro del arreglo principal

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

//let arrayFunction = ['suma:', miFuncion];
//console.log(arrayFunction);

//como agregar uno o más elementos al final del arreglo con la propiedad push()

var letras = ['a', 'b', 'c', 'd'];
letras.push('e', 'f');
console.log(letras);

//como remover el último elemento del arreglo con la propiedad pop()

letras.pop();
console.log(letras);


//como añadir elementos en cualquier parte del arreglo con las propiedad splice()
letras.splice(1, 0, 'Hola mundo');//ponemos la posisicion en la que queremos poner nuestro nuevo valor y agregamos un 0 para indicar que no queremos borrar nada dentro del arreglo
console.log(letras)

//para eliminar valores dentro de nuestro arreglo.

letras.splice(1, 2); //nos posicionamos en el dato que quieras eliminar e indicamos cuantos valores queremos remover
console.log(letras)

//para eliminar o agregar valores de derecha a izquierda:

let nuevoArreglo = [1, 2, 3, 4, 5];
nuevoArreglo.splice(-3, 2);//Ahora la posición empieza a la inversa: -1,-2,-3,etc.
console.log(nuevoArreglo);

