//Funciones de flecha o arrow functions

var acceso = true;
var accesoUsuario = a => a; //retorna un valor
accesoUsuario(acceso == true);
if (accesoUsuario) {
    console.log('usuario permitido');
} else {
    console.log('usuario denegado');
}

//cuando no tenemos un parámetro
//sintaxis:

var accesosusuario2 = () => false;
if (accesosusuario2 == true) {
    console.log('Usuario permitido');
} else {
    console.log('usuario denegado');
}

//cuando tenemos más de un parámetro
var accesoPermitido = true;

var acceso2 = (accesoPermitido, usuario) => console.log(accesoPermitido, usuario);
acceso2('Ricardo', accesoPermitido);

//Cuando queremos ejecutar más lineas de codigo:
var accesoTrue = true;

var Acceso = (a) => {
    console.log('procesando');
    return a;
}

if(Acceso(accesoTrue)==true){
    console.log('acceso permitido');
}else{
    console.log('Acceso denegado');
}







