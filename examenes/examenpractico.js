//Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
//nombre: string
//apellido: string
//usuario: string
//edad: number
//correo: string
//mayor de edad: boolean
//dinero ahorrado: number
//deudas: null

//Traduce a código JavaScript las variables del ejemplo anterior:

let nombre = 'Ricardo';
let apellido = 'Guevara Guzmán';
let usuario = 'ricardo_guevarag';
let edad = 21;
let correo = 'ricardo_ggzicm@outlook.com';
let mayorDeEdad = true;
let dineroAhorrado = 1500;
let deudas = 500;

//Calcula e imprime las siguientes variables 
//Nombre completo (nombre y apellido)
//Dinero real (dinero ahorrado menos deudas)

let misDeudas = dineroAhorrado - deudas;

console.log('Mi nombre es:', nombre, ', Mi apellido es: ', apellido, ', Mi dinero real es: ', + misDeudas);



