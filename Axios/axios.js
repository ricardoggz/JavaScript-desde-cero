//axios es una librería para hacer peticiones http

axios
.get('https://jsonplaceholder.typicode.com/users/1')
.then(({data})=>console.log(data));