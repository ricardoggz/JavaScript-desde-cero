const timeout = ()=>{
    const suma = 1 + 1;
    if(suma <=1){

       console.log('Tengo que esperar...')

    }else{
        console.log('No tengo que esperar...')
    }
}

setTimeout(()=>{
    console.log('Ejecutando...');
    timeout();
}, 1000); //setTimeout nos permite recibir un callabck y ejecutar otra cosa en lo que nuestra funcion principal se ejecuta



