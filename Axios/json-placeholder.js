axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then(
    ({ data }) =>
      (document.getElementById("show-data").innerHTML = 
      `<ul>
        <li>${data.title}</li>
        <li>${data.id}</li>
        <li>${data.body}</li>
      </ul>`)
  )
  .catch((error) => {
    console.log(error);
  });
