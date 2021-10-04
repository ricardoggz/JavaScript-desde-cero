//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

/*const name = "Ricardo José";
const lastname = "Guevara Guzmán";
const completeName = name + lastname;
const nickname = "ricardoggz";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");*/

//solucion: 
function Misdatos(name, lastname, nickname) {

    return name + lastname + nickname;
}
console.log(Misdatos('Mi nombre es: Ricardo', ' , mi apellido es: Guevara ', ' ,pero prefiero que me digas: ricardoggz'));

Misdatos();




