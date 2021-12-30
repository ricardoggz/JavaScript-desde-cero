const promesa = new Promise(() => {
  setTimeout(() => {
    console.log("3 segundos después");
  }, 3000);
});

promesa.then(() => {}).catch(() => {});
