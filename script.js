let nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  if(window.scrollY > 100) {
    nav.style.setProperty('--bs-bg-opacity', '1');
  } else {
    nav.style.setProperty('--bs-bg-opacity', '.4');
  }
})