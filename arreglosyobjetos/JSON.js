//JSON es un formato para el intercambio de datos y un subconjunto de los objetos
const Objeto ={
    nombre:'Ricardo',
    edad: 22
}
console.log(JSON.stringify(Objeto)); //Este sistema de intercambio de datos está siendo muy utilizado, nos sirve para cambiar datos entre el frontend  y el backend, aunque esté escrito en otro lengc

console.log(Objeto);

//Nota: Las API REST utilizan el formato JSON para el intercambio de datos, normalmente vienen con la extensión .json