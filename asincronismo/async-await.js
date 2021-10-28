//todas las funciones async se convierten en promesas

/*const saludo = async () => {
  return "Hola mundo";
};

saludo().then((response) => console.log(response));*/

//await

const peticion = () => {
  setTimeout(() => {
    const datos = {

      Username: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"

    };
    console.log(datos);
  }, 1000);
};

peticion();
