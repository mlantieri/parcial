const cambio = document.getElementById("tema");

cambio.addEventListener("click", () => {
  const temaActual = document.documentElement.getAttribute("tema");
  const temaNuevo = temaActual === "oscuro" ? "claro" : "oscuro";
  document.documentElement.setAttribute("tema", temaNuevo);
});

const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", () => {
  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let comentarios = document.getElementById("comentarios").value.trim();

  error.textContent = "";

  if (nombre === "") {
    error.textContent = "Se requiere ingresar el nombre";
    return;
  }

  if (email === "") {
    error.textContent = "Se requiere ingresar el email";
    return;
  }

  if (comentarios === "") {
    error.textContent = "Se requiere ingresar comentarios";
    return;
  }
  error.style.color = "green";
  error.textContent = "Enviado correctamente";
});
