const cargarInfo = () => {
  fetch("http://localhost:3000/transaction")
    .then((response) => response.json())
    .then((data) => {
      // Verificar si la lista ya existe y eliminarla si es necesario
      const existingList = document.getElementById("listaShow");
      if (existingList) {
        existingList.remove();
      }

      // Crear el contenedor de la nueva lista con clases de Tailwind
      const transactionList = document.createElement("ul");
      transactionList.id = "listaShow";
      transactionList.classList.add(
        "list-disc",
        "flex",
        "flex-col",
        "w-screen",
        "h-screen",
        "justify-center",
        "items-center"
      );

      if (Array.isArray(data)) {
        data.forEach((element) => {
          console.log(element);

          // Crear cada item de la lista con clases de Tailwind
          const listItem = document.createElement("li");
          listItem.textContent = `Descripción: ${element.descripcionT}, Precio: ${element.precioT}`;
          listItem.classList.add("mb-2", "text-gray-700");

          transactionList.appendChild(listItem);
        });

        document.body.appendChild(transactionList);
      } else {
        console.error("La respuesta no es un array:", data);
      }
    })
    .catch((e) => {
      console.log("Error: ", e);
    });
};

const form = document.getElementById("savetransaction");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let descripcion = document.getElementById("descripciondelatransaccion").value;
  let precio = document.getElementById("Precio").value;

  let transaccion = { descripcionT: descripcion, precioT: precio };

  let tJson = JSON.stringify(transaccion);

  fetch("http://localhost:3000/transaction", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: tJson,
  }).then((x) => console.log(x));

  cargarInfo();
});

cargarInfo();
