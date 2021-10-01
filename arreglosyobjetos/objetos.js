let Objeto = {
    //Los objetos se conforman por una variable y un valor, pueden recibir cualquier tipo de variable, arreglos e incluso otros objetos
    nombre:'Ricardo'
    ,apellido: 'Guevara Guzmán'
}
console.log(Objeto.nombre);
console.log(Objeto.apellido);
console.log(Objeto);

//Los objetos igual pueden recibir funciones:

let Objeto2 = {
    miFuncion: (a,b) => a * b
}
console.log(Objeto2.miFuncion(2, 2));