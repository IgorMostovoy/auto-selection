
function moveAnchors(){
const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach((anchor) =>{
  anchor.addEventListener('click', (e)=>{
    e.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector(''+ blockId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
})
}
moveAnchors();

const swiper = new Swiper(".check-swiper", {
  direction: "vertical",
  speed: 1600,
  loop: true,
  navigation: {
    nextEl: ".check-swiper__button-next",
    prevEl: ".check-swiper__button-prev",
  },
  pagination: {
    el: ".check-swiper__pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 4000,
    reverseDirection: true,
  },

  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
});

const reviewsSwiper = new Swiper(".reviews-slider", {
  speed: 500,
  loop: true,
  spaceBetween:25,
  navigation: {
    nextEl: ".reviews-swiper__button-next",
    prevEl: ".reviews-swiper__button-prev",
  },
  pagination: {
    el: ".reviews-slider__pagination",
    type: "bullets",
    dynamicBullets: true,
  },
});

const doneSwiper = new Swiper(".done-slider", {
  navigation: {
    nextEl: ".done-slider__button-next",
    prevEl: ".done-slider__button-prev",
  },
  effect: "cards",
  speed: 700,
  
  
});

const doneSwiperMoble = new Swiper(".done-slider-mobile", {
 effect:'coverflow',
 grabCursor: true,
 coverflowEffect:{
rotate: 0,
stretch: 0,
depth: 100,
modifier: 5,
slideShadows: true,
 },
  speed: 700,
    slidesPerView: 'auto',
    centeredSlides: true,
 spaceBetween:15,
 initialSlide:1,
});

const costSwiperMobile = new Swiper('.cost__swiper',{
  speed: 700,
  slidesPerView: 2,
  
spaceBetween:15,
pagination: {
  el: ".cost__swiper-pagination",
  type: "bullets",
  dynamicBullets: true,
  followFinger: true,
},
breakpoints: {
  665:{
    slidesPerView: 2,
  },



  320: {
    slidesPerView: 1,
    spaceBetween: 20,
    // centeredSlidesBounds: true,
  },

}

});


  

//Функция анимации диаграмм;
function animateDiagram() {
  const sections = document.querySelector(".diagram-pie__items");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const square = entry.target.querySelectorAll(".diagram-pie__item");
      if (entry.isIntersecting) {
        square.forEach((el) => {
          el.classList.add("animate");
        });
        return;
      }
      square.forEach((el) => {
        el.classList.remove("animate");
      });
    });
  });

  observer.observe(sections);
}
animateDiagram();

//Функция input номера телефона
document.addEventListener("DOMContentLoaded", function () {
  let phoneInputs = document.querySelectorAll("input[data-tel-input]");

  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, "");
  };

  let onPhoneInput = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = "";
    selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return (input.value = "");
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9")
        inputNumbersValue = "7" + inputNumbersValue;
      let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };

  let = onPhoneKeyDown = function (e) {
    let input = e.target;
    if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
      input.value = ";";
    }
  };

  let onPhonePaste = function (e) {
    let pasted = e.clipboardData || window.clipboardData,
      input = e.target,
      inputNumbersValue = getInputNumbersValue(input);

    if (pasted) {
      let pastedText = pasted.getData("Text");
      if (!/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };
  for (i = 0; i < phoneInputs.length; i++) {
    let input = phoneInputs[i];
    input.addEventListener("input", onPhoneInput);
    input.addEventListener("keydown", onPhoneKeyDown);
    input.addEventListener("paste", onPhonePaste);
  }
});

//popup
function openPopup(){
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.popup__button');
const popupClose = document.querySelector('.popup__close');

openPopupButtons.forEach((button) =>{
  button.addEventListener('click',(e) =>{
    e.preventDefault();
  
  popupBg.classList.add('active');
  popup.classList.add('active');
 }) 
});

popupClose.addEventListener('click', (e) => {
  e.preventDefault();
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
if(e.target === popupBg){
  popupBg.classList.remove('active');
  popup.classList.remove('active');
}

});
};
openPopup();

//Бургер меню
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('.header__burger-btn').addEventListener('click',function(){
    document.querySelector('.header').classList.toggle('open')
  })
  document.querySelector('.menu').addEventListener('click',(e)=>{
    e._isClickWithInMenu = true;
  });

})