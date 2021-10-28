fetch("https://jsonplaceholder.typicode.com/users/1")//endpoint(rutas finales).
 .then((response) => {
    return response.json();//esta promesa pasa por un proceso json y lo retorna
})
 .then((data)=>{
    console.log(data);//después que nuestra promesa anterior pasa por json ahora si podemos usar los datos de nuesro objeto

});
