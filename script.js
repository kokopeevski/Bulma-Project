// Намалява opacity на navbar при скрол
document.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

//За бутоните за скриване и показване на отг на въпросите
document.querySelectorAll('.toggle-answer').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      button.textContent = 'Скрий отговора';
    } else {
      answer.style.display = 'none';
      button.textContent = 'Покажи отговора';
    }
  });
});

// За бутона за качване догоре в страницата
const toTopButton = document.getElementById('toTopButton');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTopButton.style.opacity = 0.7;
    toTopButton.style.pointerEvents = 'auto';
  } else {
    toTopButton.style.opacity = 0;
    toTopButton.style.pointerEvents = 'none';
  }
});

toTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('.navbar-menu');

burger.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});

// Затваряне на менюто след клик на навигационен елемент при мобилен размер
const navbarItems = document.querySelectorAll('.navbar-item');

navbarItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Ако е активен бургер бутона (малък екран)
        if (burger.classList.contains('is-active')) {
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
        }
    });
});