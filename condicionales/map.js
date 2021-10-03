//La funcion map modifica cada uno de los elementos de un array creando un nuevo resultado

opcion1 = {
    nombre: 'pelicula1', clasificacion: 'B', valoracion: 5
}
opcion2 = {
    nombre: 'pelicula2', clasificacion: 'C', valoracion: 4
}
opcion3 = {
    nombre: 'pelicula3', clasificacion: 'A', valoracion: 5
}

let opciones = [opcion1, opcion2, opcion3];

let sumarValoracion = ({valoracion}) => valoracion >= 5 ? valoracion += 1 : valoracion += 0;

let valorado = opciones.map(sumarValoracion);
console.log(valorado);