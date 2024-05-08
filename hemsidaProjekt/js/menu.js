let menu = document.getElementById('menu')
let menuIcon = document.getElementById('menu-icon')
menuIcon.addEventListener('click', (e) => {
  e.preventDefault()
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
  toggleMenu()
})

// function toggleMenu() {
//   var menu = document.getElementById('menu');
//   menu.classList.toggle('fade-in');
//   menu.classList.toggle('fade-out');
// }