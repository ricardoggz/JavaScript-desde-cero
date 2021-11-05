function peticion() {
  //definir nuestro objeto http:
  const http = new XMLHttpRequest();

  //declarar nuestra url a llamar
  const url = "http://127.0.0.1:5500/AJAX/peticion.html";

  //definir que hará nuestro objeto http
  http.onreadystatechange = function () {
    //aquí mapearemos el estado de la solictitud, especificando el ready state y el status.
    //NOTA: el ready state será "== 4" si la solicitud se completó correctamente y el status será "== 200" y nos regresará un servidor web

    if (this.readyState == 4 && this.status == 200) {
      //mediante este evento pintaremos la peticion en el DOM
      document.getElementById("respuesta-peticion").innerHTML =
        this.responseText;
    }
  };

  //mandamos llamar al método que utilizaremos.
  http.open("GET", url); //"GET" es el método

  //También mandaremos llamar a nuestra url.
  http.send();
}

//agregamos nuestro evento en el boton del index.html

document.getElementById("btn").addEventListener("click", function () {
  peticion();
});
