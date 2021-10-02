var edad = 17;

if(edad==18){//Las condicionales son acciones que se ejecutan si se cumple una determinada accion
    console.log('Mayor');//En este caso si nuestra varuable fuera igual a 18 se mostraría el texto 'mayor'
}else{
    console.log('Menor');//Como nuestra variable "edad" es menor a 18 se mostrará 'menor';
}

//También existe la condicional else if:
let mayor = 17;
if(mayor>=18){
    console.log('Mayor')
}

else if(mayor==18){//Else if lo podemos utlizar para ejecutar varias condiciones diferentes
    console.log('Casi es mayor');
}

else if(mayor=17){
    console.log('Te falta 1 para ser mayor');
}
