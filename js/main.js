
// THEME SWITCHER
// ==================================================================================================
const themeSwitcher = document.querySelectorAll('.themeSwitcher');
const logos = document.querySelectorAll('.logo');
const themeSwitchElements = document.querySelectorAll('.themeHandler');
const phoneHead = document.querySelector('.phone-head');
const navUnit = document.querySelectorAll('.nav-unit');
const contImg = document.querySelectorAll('.cont-img');
const cards = document.querySelectorAll('.card'); //Все карточки цен
const priceBorder = document.querySelectorAll('.card-price')//полоса над ценой


const themeSwitch = (e) => {
    themeSwitcher.forEach(e => e.classList.toggle('hidden')) //Скрытие кнопки день-ночь
    themeSwitchElements.forEach(e => e.classList.toggle('darkTheme')) //Применение темной темы
    logos.forEach(e => e.classList.toggle('hidden')) // Смена логотипа день-ночь
    phoneHead.classList.toggle('darkTheme') // Переключение телефона
    navUnit.forEach(e => e.classList.toggle('darkTheme')) // Пункты навиг
    contImg.forEach(e => e.classList.toggle('invert')) // Иконки в футере
    cards.forEach(e => e.classList.toggle('cardDark')) // Переключаем карточки на темную тему
    priceBorder.forEach(e => e.classList.toggle('priceDark')) // Переключаем прайс модуль на темную тему
}
themeSwitcher.forEach(e => e.addEventListener('click', () => (themeSwitch(e))))
// ==================================================================================================

// owlCarousel
// ==================================================================================================
$('#slider-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// SLOW SCROLL
// ==================================================================================================
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.3;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
// ==================================================================================================

// REQUEST FORM
   (function (d, w, c) {
       (w[c] = w[c] || []).push({formId:189483,host:"formdesigner.com.ua",formHeight:100, el: "form_189483_1",center: 1,scroll: 0});
       var s = d.createElement("script"), g = "getElementsByTagName";
       s.type = "text/javascript"; s.charset="UTF-8"; s.async = true;
       s.src = (d.location.protocol == "https:" ? "https:" : "http:")+"//formdesigner.com.ua/js/iform.js?v=0.0.3";
       var h=d[g]("head")[0] || d[g]("body")[0];
       h.appendChild(s);
   })(document, window, "fdforms");
// ==================================================================================================




