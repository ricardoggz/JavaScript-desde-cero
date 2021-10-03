//El ciclo while crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

const lista = ['texto1', 'texto2', 'texto3'];
let i = 0;
let text = '';
while(lista[i]){

    text = lista[i];
    i++;
    //console.log(i);
    console.log(text);
}

//La sentencia do while crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

let resultado = '';
let a = 0;
do{
    a = a + 1;
    resultado = resultado + a;
}while(a < 5)

console.log(resultado);
