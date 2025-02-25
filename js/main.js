
// THEME SWITCHER
// ==================================================================================================
const themeSwitcher = document.querySelectorAll('.themeSwitcher');
const logos = document.querySelectorAll('.logo');
const themeSwitchElements = document.querySelectorAll('.themeHandler');
const phoneHead = document.querySelector('.phone-head');
const footerContacts = document.querySelector('.footer-contacts-wrapper');
const navUnit = document.querySelectorAll('.nav-unit');
const contImg = document.querySelectorAll('.cont-img');
const contantUs = document.querySelectorAll('.button-wrapper-fixed');
const footerNav = document.querySelectorAll('.footer-nav');
const cards = document.querySelectorAll('.card'); //Все карточки цен
const priceBorder = document.querySelectorAll('.card-price')//полоса над ценой
const priceBox = document.getElementById('priceBox');


const themeSwitch = (e) => {
    themeSwitcher.forEach(e => e.classList.toggle('hidden')) //Скрытие кнопки день-ночь
    themeSwitchElements.forEach(e => e.classList.toggle('darkTheme')) //Применение темной темы
    logos.forEach(e => e.classList.toggle('hidden')) // Смена логотипа день-ночь
    phoneHead.classList.toggle('darkTheme') // Переключение телефона
    footerContacts.classList.toggle('darkTheme') // Переключение телефона
    navUnit.forEach(e => e.classList.toggle('darkTheme')) // Пункты навиг
    contantUs.forEach(e => e.classList.toggle('darkTheme'))
    contImg.forEach(e => e.classList.toggle('invert')) // Иконки в футере
    footerNav.forEach(e => e.classList.toggle('invert'))
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
// Отримати посилання на елементи DOM
var modal = document.getElementById("contactFormModal");
var openBtn = document.querySelector(".themeHandler");
var closeBtn = document.getElementsByClassName("close")[0];
var form = document.getElementById("contactForm");
console.log(priceBox)
// Відкриття форми при кліку на кнопку
openBtn.onclick = function(e) {
  if(e.target.id === 'openFormBtn'){
    modal.style.display = "block";
  }
  
}
priceBox.onclick = function(e) {
  if (e.target !== cards) {
    modal.style.display = "block";
  }
}
// Закриття форми при кліку на хрестик
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Закриття форми, якщо користувач клікнув поза неї
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Відправка форми на сервер
function submitForm() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var address = document.getElementById("address").value;

  if (name.trim() === "" || phone.trim() === "" || message.trim() === "") {
    alert("Please fill out all fields.");
    return;
  }


  // Створення об'єкту FormData для відправки даних на сервер
  var formData = new FormData();
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('message', message);
  formData.append('address', address);

  // Відправлення POST-запиту на сервер PHP
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'send_emailS.php', true);
  xhr.onload = function() {
    // Додаткові дії після успішної відправки форми, якщо потрібно
    modal.style.display = "none"; // Закриття форми
  };
  xhr.onerror = function() {
    // Обробка помилки відправки
    alert('Error sending your message. Please try again later.');
  };
  xhr.send(formData);
  form.reset()
}




