const seta_direita = document.querySelector(".seta-direita");
const seta_esquerda = document.querySelector(".seta-esquerda");
const img = document.querySelector(".img");

seta_direita.addEventListener("click", () => {
  if (img.getAttribute("src") === "assets/sobre-bg.png") {
    img.setAttribute("src", "assets/team.svg");
  } else if (img.getAttribute("src") === "assets/team.svg") {
    img.setAttribute("src", "assets/sobre-bg.png");
  }
});

seta_esquerda.addEventListener("click", () => {
  if (img.getAttribute("src") === "assets/sobre-bg.png") {
    img.setAttribute("src", "assets/team.svg");
  } else if (img.getAttribute("src") === "assets/team.svg") {
    img.setAttribute("src", "assets/sobre-bg.png");
  }
});
