$(document).ready(function(){
  $('.header__menu-burger').click(function(){
    $('body').toggleClass('open')
  })
});
// =====================================================================================
//in case js in turned off
$(window).on('load', function () {
  $(".header").removeClass("scroll")
});
$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 0) {
    $(".header").addClass("scroll")
  } else {
    $(".header").removeClass("scroll")
  }
});
// =====================================================================================
var header = $('.header'),
  scrollPrev = 0;
$(window).scroll(function() {
  var scrolled = $(window).scrollTop();
  if ( scrolled > 100 && scrolled > scrollPrev ) {
    header.addClass('out');
  } else {
    header.removeClass('out');
  }
  scrollPrev = scrolled;
});
// =====================================================================================
new Swiper('.first-slider',{

  // крапки навігації
  pagination: {
    el: '.first__pagination',
    type: 'bullets',
    clickable: true,
  },

  // включення/виключення
  // свайп
  simulateTouch: true,

  // чутливість
  touchRatio: 1,

  // кут спрацьовування свайпа
  touchAngel: 45,

  // курсор перетягування
  grabCursor: false,

  // переключення по кліку на слайд
  slideToClickedSlide: false,

  // управління клавіатурою
  keyboard: {
    // вкл\викл
    enable: true,
    // вкл\викл
    // тільки коли слайдер в межах вюпорта
    onlyInViewport: true,
    // вкл\викл
    // управління клавішами PgUp, PgDown
    pageUpDown: true,
  },

  // автовисота
  autoHeight: false,

  // кількість слайдів для показу
  slidesPerView: 1,

  // відключення функції slidesPerView
  // якщо слайдів менше ніж треба
  watchOverflow: true,

  // відступи між слайдами
  spaceBetween: 0,

  // кількість пролистуваних слайдів
  slidesPerGroup: 1,

  // активний слайд по центру
  centeredSlides: true,

  // стартовий слайд
  initialSlide: 0,

  // нескінечний слайдер
  loop: true,

  // вільний режим перегортання слайдів
  freeMode: false,

  // скорість переключення слайдів
  speed: 300,

  // автопрограння слайдів
  autoplay: {
    delay: 5000,
  },

});
// =====================================================================================
new Swiper('.seventh-slider',{

  navigation: {
    nextEl: '.seventh__button-next',
    prevEl: '.seventh__button-prev',
  },

  // включення/виключення
  // свайп
  simulateTouch: true,

  // чутливість
  touchRatio: 1,

  // кут спрацьовування свайпа
  touchAngel: 45,

  // курсор перетягування
  grabCursor: false,

  // переключення по кліку на слайд
  slideToClickedSlide: false,

  // управління клавіатурою
  keyboard: {
    // вкл\викл
    enable: true,
    // вкл\викл
    // тільки коли слайдер в межах вюпорта
    onlyInViewport: true,
    // вкл\викл
    // управління клавішами PgUp, PgDown
    pageUpDown: true,
  },

  // автовисота
  autoHeight: false,

  // кількість слайдів для показу
  slidesPerView: 1,

  // відключення функції slidesPerView
  // якщо слайдів менше ніж треба
  watchOverflow: true,

  // відступи між слайдами
  spaceBetween: 0,

  // кількість пролистуваних слайдів
  slidesPerGroup: 1,

  // активний слайд по центру
  centeredSlides: true,

  // стартовий слайд
  initialSlide: 0,

  // нескінечний слайдер
  loop: true,

  // вільний режим перегортання слайдів
  freeMode: false,

  // скорість переключення слайдів
  speed: 300,

  thumbs: {
    swiper: {
      el: '.seventh__mini-slider',
      // стартовий слайд
      initialSlide: 0,
      // відключення функції slidesPerView
      // якщо слайдів менше ніж треба
      watchOverflow: true,
      breakpoints: {
        320: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    }
  },

});