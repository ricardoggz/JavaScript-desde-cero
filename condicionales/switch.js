//switch recibe una expresión o petición y de acuerdo a ella ejecuta un caso
let opcion = 2;

switch (opcion) {
    case 1:
        console.log('Opcion 1');
        break;

    case 2: console.log('Opcion 2');
        break;


    default:
        console.log('Default');
        break;
}

//Los switch también pueden recibir datos de tipo string:

let nombre = 'Ricardo';
let apellido = 'Guevara';
switch(apellido){
    case 'Ricardo':
        console.log(nombre);
        break;

    case 'Guevara':
        console.log(apellido);
        break;

    default:
        console.log('Default');
        break;  
}