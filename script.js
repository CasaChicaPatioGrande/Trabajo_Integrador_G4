const buttons = document.querySelectorAll(".carrito");
const overlay = document.querySelector(".overlay");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    overlay.style.display = "block";
    const crearCuenta = document.createElement("div");
    crearCuenta.classList.add("crear-cuenta");
    crearCuenta.innerHTML = "<h3>Creá tu cuenta</h3><button class='cerrar'>Cerrar</button>";
    document.body.appendChild(crearCuenta);
    const cerrar = document.querySelector(".cerrar");
    cerrar.addEventListener("click", () => {
      overlay.style.display = "none";
      crearCuenta.remove();
    });
  });
});
