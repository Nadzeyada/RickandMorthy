// Sidebar
const burgerButton = document.querySelector('.burger-button');
const burgerSvg = document.querySelector('#burger-icon use');
const sidebar = document.querySelector('.sidebar');
const listItemLinks = document.querySelectorAll('.sidebar .navbar-link');

burgerButton.addEventListener('click', toggleSidebar);
listItemLinks.forEach(link => {
  link.addEventListener('click', toggleSidebar);
});

function toggleSidebar(){
  burgerButton.classList.toggle('open');
  sidebar.classList.toggle('hidden');
  if(sidebar.classList.contains('hidden')){
    document.body.style.overflow = '';
    burgerSvg.setAttribute('xlink:href', '/assets/img/sprite.svg#burger-menu');
  } else{
    document.body.style.overflow = 'hidden';
    burgerSvg.setAttribute('xlink:href', '/assets/img/sprite.svg#burger-menu_close');
  }
}