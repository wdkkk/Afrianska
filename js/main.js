const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

document.body.addEventListener("click", function (e) {
  const target = e.target;

  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == burger;

  const menu_is_active = !menu.classList.contains("none");

  if (!its_menu &&  menu_is_active) {
    menu.classList.add('none');
    document.body.classList.remove('__paused');
    
    for (let i = 0; i <= 2; i++) burger.children[i].classList.remove('__active');
  } else if (its_btnMenu && !menu_is_active) {
    menu.classList.remove('none');
    document.body.classList.add('__paused');
    
    for (let i = 0; i <= 2; i++) burger.children[i].classList.add('__active');
  }
});