//For es un ciclo y puede incrementar

for(i=0; i<=10; i++){

    console.log('Hola ' + i + ' veces');
}

//Dentro de nuestro for podemos escribir otro bloque de código para ejecutar

for(i=0; i<=10; i++){

    if(i===1){
        console.log('Hola ' + i + ' vez');
    }else{
        console.log('Hola ' + i + ' Veces');
    }
}

//Ejecutar un Array dentro de un for:

let arreglo = ['Hola', 'soy', 'Ricardo'];

for(index = 0; index<arreglo.length; index++){//length nos dice la cantidad de elementos tiene nuestro arreglo

    const elemento = arreglo[index];
    console.log(elemento);
}

//Ejecutar en un for un array que contenga objetos:

let objeto ={
    nombre: 'Ricardo',
    edad: 21,
    genero: 'Masculino'
}

let objeto2 ={
    nombre: 'Ernesto',
    edad: 15,
    genero: 'masculino'
}

let Miarreglo = [objeto, objeto2];

for(i=0; i<Miarreglo.length; i++){

    const mostrarNombre = Miarreglo[i].nombre;
    const mostrarEdad = Miarreglo[i].edad;
    const mostrarGenero = Miarreglo[i].genero;

    console.log('Me llamo: ' + mostrarNombre + ' Mi edad es: ' + mostrarEdad + ' años de edad, ' +  ' Mi género es: ' + mostrarGenero);
}

//foreach
//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
//el método foreach() son especiales para los arreglos

const objetoForeach = {
    nombre: 'José',
    apellido: 'Guzmán',
    edad: 21
}
const arregloForeach = ['Hola', 'Adiós', objetoForeach];
arregloForeach.forEach(element => console.log(element));




