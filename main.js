const nav = document.querySelector("#nav");
const abrir = document.getElementById("btn_abrir");
const cerrar = document.getElementById("btn_cerrar");
let btn= document.querySelector('#scroll_up');

abrir.addEventListener('click', () => {
  nav.classList.add('visible');
        nav.classList.remove('no-visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.add('no-visible');
      nav.classList.remove('visible');
});

btn.addEventListener('click', () => {
  console.log('click');
  document.body.scrollTo({
    top: 0
  })

document.documentElement.scrollTo({
  top: 0
})
})

const navLinks = nav.querySelectorAll('a'); // Selecciona todos los enlaces dentro del nav

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Cerrar el menú inmediatamente al hacer clic en cualquier enlace
    nav.classList.remove('visible');
  });
});

// OPCIONAL: También cerrar si se hace clic fuera del menú
document.addEventListener('click', (e) => {
  // Si el clic no fue en el nav, ni en el botón de abrir
  if (!nav.contains(e.target) && !abrir.contains(e.target)) {
    nav.classList.remove('visible');
  }
});