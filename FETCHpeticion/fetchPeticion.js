//definir nuestro endpoint mediante la url
const URL = "http://127.0.0.1:5500/FETCHpeticion/peticionFetch.html";

//agregar el metodo fetch:
fetch(URL)
  //usar la palabra reservada ".then" para obetner la respuesta y el tipo de dato que se extraerá del endpoint
  .then((response) => response.text())

  //utilizar una funcion donde declararemos el evento click para pintar nuestro endpoint en el DOM
  .then((data) => showData(data));

//Crear la función para pintar el endpoint en el DOM
const showData = (data) => {
  document
    .getElementById("btn-peticion")
    .addEventListener("click", function () {
      document.getElementById("show-data").innerHTML = data;
      console.log(data);
    });
};
