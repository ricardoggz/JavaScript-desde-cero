//JSON: JavaScript Object Notaion

//JSON es un formato para el intercambio de datos y un subconjunto de los objetos
const Objeto ={
    nombre:'Ricardo',
    edad: 22
}
console.log(JSON.stringify(Objeto)); //Este sistema de intercambio de datos está siendo muy utilizado, nos sirve para cambiar datos entre el frontend  y el backend, aunque esté escrito en otro lengc

console.log(Objeto);

//

const OtroObjeto ={
    name: "Ricardo",
    age: 21,
}

console.log(OtroObjeto.name);

//Nota: Las API REST utilizan el formato JSON para el intercambio de datos, normalmente vienen con la extensión .json

//Destructuracion de objetos

const {nombre, edad, direccion, lugarOrigen} ={
    nombre: 'José',
    edad: 21,
    direccion: 'mi direccion',
    lugarOrigen: 'mi lugar de origen'
}
console.log(nombre, edad, direccion, lugarOrigen);