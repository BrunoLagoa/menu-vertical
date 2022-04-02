const subBtn = document.querySelectorAll('.sub-btn');

function toggleMenu(event) {
  const menu = event.currentTarget.nextElementSibling;
  menu.classList.toggle('active');

  event.currentTarget
    .getElementsByClassName('dropdown')[0]
    .classList.toggle('rotate');
}

subBtn.forEach((btn) => {
  btn.addEventListener('click', toggleMenu);
});

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  document.querySelector('.side-bar').classList.toggle('active');
  menuBtn.style.visibility = 'hidden';
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  document.querySelector('.side-bar').classList.remove('active');
  menuBtn.style.visibility = 'visible';
});
