const slider = document.querySelector('.swiper-container');

var swiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
     },
   });

   slider.dataset.mobile = 'true';
   document.querySelector('.swiper-pagination').classList.remove('hidden');
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      swiper.destroy();
      document.querySelector('.swiper-pagination').classList.add('hidden');
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});


const buttonShowAll = document.querySelector('.main__buttonShowAll');
const itemsContainer = document.querySelector('.main__itemsContainer');
const buttonIcon = document.querySelector('.buttonShowAll__icon');

buttonShowAll.addEventListener('click', () => {
  if(buttonShowAll.classList.contains('main__buttonShowAll-visible')) {
    itemsContainer.classList.remove('main__itemsContainer-visible');
    buttonShowAll.classList.remove('main__buttonShowAll-visible');
    buttonIcon.style.transform = 'rotate(0deg)';
  } else {
    itemsContainer.classList.add('main__itemsContainer-visible');
    buttonShowAll.classList.add('main__buttonShowAll-visible');
    buttonIcon.style.transform = 'rotate(180deg)';
  }
})






