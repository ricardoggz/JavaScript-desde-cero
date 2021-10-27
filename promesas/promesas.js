//Las promesas son código que promete resolver algo en específico y darnos una respuestas de ello

const promesa = (a, b)=>{

    //las promesas reciben un callback (arrow function)
    //también reciben 2 parametros ("resolve: nos dará una respuesta en caso de que la ejecucion sea exitosa" y "reject: nos dará una respuesta en caso de que algo no se ejecute correctamente o no pueda cumplirse")

    return new Promise((resolve,  reject)=>{

        if(a < 0 || b <0){
            reject(console.log('suma invalida'))
        }else{
            resolve(a + b);
        }


    })

}

let resultado = promesa(5, 3).then((resInvalid)=>{
    console.log(resInvalid);

}).catch((error)=>{
    console.log(error);

});//el catch es lo que se va ejecutar si es que algo falla
console.log(resultado);