const cambio = document.getElementById("tema");

cambio.addEventListener("click", () => {
  const temaActual = document.documentElement.getAttribute("tema");
  const temaNuevo = temaActual === "dark" ? "claro" : "oscuro";
  document.documentElement.setAttribute("data-theme", temaNuevo);
});
