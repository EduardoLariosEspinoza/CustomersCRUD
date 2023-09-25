const url = "http://localhost:4000/clientes";

export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json", // El contenido que se esta enviando es de un tipo JSON
      }, // Informacion del contenido que se esta enviando
    });

    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(url);
    const clientes = await resultado.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarCliente = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCliente = async (id) => {
  try {
    // Para traer un resultado con cierto id se debe colocar el id al final de la url, por ejemplo: http://localhost:4000/clientes/2
    const respuesta = await fetch(`${url}/${id}`);
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const editarCliente = async (cliente) => {
  try {
    fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });

    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};