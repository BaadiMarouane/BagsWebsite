let search = document.querySelector('#search-icon');
let box = document.querySelector('.search-box');

search.onclick = () => {
  box.classList.toggle('active');
  navbar.classList.remove('active');
}
// navbar
let navbar = document.querySelector('.navbar');
let icon = document.querySelector('#menu-icon');

icon.onclick = () => {
  navbar.classList.toggle('active');
  box.classList.remove('active');
}




window.onscroll = () => {
  box.classList.remove('active');
  navbar.classList.remove('active');
}

// header animation
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('active', window.scrollY > 0);
});