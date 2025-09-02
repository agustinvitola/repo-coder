const nav = document.querySelector("#nav");
const abrir = document.getElementById("btn_abrir");
const cerrar = document.getElementById("btn_cerrar");

abrir.addEventListener('click', () => {
  nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});