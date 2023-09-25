export function mostrarAlerta(mensaje) {
  const formulario = document.querySelector("#formulario");
  const alerta = document.querySelector(".bg-red-100");

  if (!alerta) {
    // Crear la alerta
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">${mensaje}</span>
    `;

    formulario.appendChild(alerta);

    // Eliminar la alerta después de 3 segundos
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

export function validar(obj) {
  // Verifica si alguno de los campos del objeto esta vacio, si es asi retorna true. Si ninguno esta vacio retorna false
  return Object.values(obj).some((campo) => campo === "");
}
