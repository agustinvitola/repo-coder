const nav = document.querySelector("#nav");
const abrir = document.getElementById("btn_abrir");
const cerrar = document.getElementById("btn_cerrar");
const btn = document.querySelector('#scroll_up');

// Función centralizada para cerrar el menú
const cerrarMenu = () => {
  console.log('Cerrando menú...');
  nav.classList.add('no-visible');
  nav.classList.remove('visible');
  console.log('Clases después de cerrar:', nav.className);
};

// Función centralizada para abrir el menú
const abrirMenu = () => {
  console.log('Abriendo menú...');
  nav.classList.add('visible');
  nav.classList.remove('no-visible');
  console.log('Clases después de abrir:', nav.className);
};

// Abrir menú
if (abrir) {
  abrir.addEventListener('click', (e) => {
    console.log('Click en botón abrir');
    e.stopPropagation();
    abrirMenu();
  });
} else {
  console.error('Botón abrir no encontrado');
}

// Cerrar menú con botón X
if (cerrar) {
  cerrar.addEventListener('click', (e) => {
    console.log('Click en botón cerrar');
    e.stopPropagation();
    cerrarMenu();
  });
} else {
  console.error('Botón cerrar no encontrado');
}
// Auto-cerrar al hacer clic en enlaces del menú
const navLinks = nav ? nav.querySelectorAll('a') : [];
console.log('Enlaces encontrados:', navLinks.length);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log('Click en enlace del menú');
    cerrarMenu();
  });
});

// Cerrar al hacer clic fuera del menú
document.addEventListener('click', (event) => {
  console.log('Click en documento detectado');
  
  if (!nav) {
    console.error('Nav no existe');
    return;
  }
  // Verificar si el menú está abierto
  const menuAbierto = nav.classList.contains('visible');
  console.log('¿Menú abierto?', menuAbierto);
  if (menuAbierto) {
    const clickEnNav = nav.contains(event.target);
    const clickEnAbrir = abrir && abrir.contains(event.target);
    console.log('Click en nav:', clickEnNav);
    console.log('Click en botón abrir:', clickEnAbrir);
    if (!clickEnNav && !clickEnAbrir) {
      console.log('Cerrando menú por click fuera');
      cerrarMenu();
    }
  }
});

// Botón scroll up
if (btn) {
  btn.addEventListener('click', () => {
    console.log('scroll up click');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Cerrar con tecla Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav && nav.classList.contains('visible')) {
    console.log('Escape presionado - cerrando menú');
    cerrarMenu();
  }
});