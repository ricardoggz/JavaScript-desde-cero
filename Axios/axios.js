//axios es una librería para hacer peticiones http

/*axios
.get('https://jsonplaceholder.typicode.com/users/1')
.then(({data})=>console.log(data));*/
const URL = "http://127.0.0.1:5500/Axios/peticion.html";

axios.get(URL).then(function showData({ data }) {
  document
    .getElementById("btn-peticion")
    .addEventListener("click", function () {
      document.getElementById("show-peticion").innerHTML = data;
    });
});
