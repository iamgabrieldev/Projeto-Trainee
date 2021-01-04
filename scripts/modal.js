const btn_duvida = document.querySelector(".sobre .duvida");
btn_duvida.addEventListener("click", () => {
  const modal = document.querySelector(".modal-container");
  modal.classList.add("mostrar");
  modal.addEventListener("click", (event) => {
    if (
      event.target.id === "modal-info" ||
      event.target.className === "modal-cancelar" ||
      event.target.className === "modal-enviar"
    ) {
      modal.classList.remove("mostrar");
    }
  });
});
