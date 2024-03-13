const topMenu = document.getElementById("top-menu");
const topToggleMenu = document.getElementById("top-toggle-menu");

document.addEventListener('click', (e) => {
  if (topToggleMenu.contains(e.target)) {
    topMenu.classList.toggle('top-menu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    if (topMenu.classList.contains('top-menu-expanded')) {
        topMenu.classList.remove('top-menu-expanded');
        topMenu.classList.add('hidden')
    }
  }
});
