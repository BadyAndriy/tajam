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
$(document).ready(function(){
    $("#header__menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
});
// =====================================================================================
// Проверка видимости элемента (в видимой части страницы)Достаточно,
// чтобы верхний или нижний край элемента был виден
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  // видны верхний ИЛИ нижний край элемента
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}
function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;
    if (isVisible(img)) {
      // отключение кеширования
      // эта строка должна быть удалена в "боевом" коде
      realSrc += '?nocache=' + Math.random();
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
}
window.addEventListener('scroll', showVisible);
showVisible();
// =====================================================================================
gsap.timeline({
	scrollTrigger: {
		trigger: ".first",
		start: "center 100%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('.first', {
  opacity: 0,
  duration: 1
})
.to('.first', {
  opacity: 1
})

gsap.timeline({
	scrollTrigger: {
		trigger: ".second",
		start: "top 80%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('.second', {
  opacity: 0,
  duration: 1
})
.to('.second', {
  opacity: 1
})

gsap.timeline({
	scrollTrigger: {
		trigger: ".third",
		start: "top 80%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('.third', {
  opacity: 0,
  duration: 1
})
.to('.third', {
  opacity: 1
})

gsap.timeline({
	scrollTrigger: {
		trigger: ".fourth",
		start: "top 80%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('.fourth', {
  opacity: 0,
  duration: 1
})
.to('.fourth', {
  opacity: 1
})

gsap.timeline({
	scrollTrigger: {
		trigger: ".fifth",
		start: "top 80%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('.fifth', {
  opacity: 0,
  duration: 1
})
.to('.fifth', {
  opacity: 1
})

gsap.timeline({
	scrollTrigger: {
		trigger: ".sixth",
		start: "top 80%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('.sixth', {
  opacity: 0,
  duration: 1
})
.to('.sixth', {
  opacity: 1
})

gsap.timeline({
	scrollTrigger: {
		trigger: ".seventh",
		start: "top 80%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('.seventh', {
  opacity: 0,
  duration: 1
})
.to('.seventh', {
  opacity: 1
})

gsap.timeline({
	scrollTrigger: {
		trigger: ".eighth",
		start: "top 80%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('.eighth', {
  opacity: 0,
  duration: 1
})
.to('.eighth', {
  opacity: 1
})

gsap.timeline({
	scrollTrigger: {
		trigger: ".footer",
		start: "top 200%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('.footer', {
  opacity: 0,
  duration: 1
})
.to('.footer', {
  opacity: 1
})
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

  // зміна прозорості
  effect: 'fade',
  fadeEffect: {
    // паралельна зміна прозорості
    crossFade: true,
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

   // зміна прозорості
   effect: 'fade',
   fadeEffect: {
     // паралельна зміна прозорості
     crossFade: true,
   },

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