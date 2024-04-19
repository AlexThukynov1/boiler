
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
// Отримати посилання на елементи DOM
var modal = document.getElementById("contactFormModal");
var openBtn = document.getElementById("openFormBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var form = document.getElementById("contactForm");

// Відкриття форми при кліку на кнопку
openBtn.onclick = function() {
  modal.style.display = "block";
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
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Створення об'єкту FormData для відправки даних на сервер
  var formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  // Відправлення POST-запиту на сервер PHP
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'send_email.php', true);
  xhr.onload = function() {
    // Додаткові дії після успішної відправки форми, якщо потрібно
    modal.style.display = "none"; // Закриття форми
    alert('Your message has been sent successfully.');
  };
  xhr.onerror = function() {
    // Обробка помилки відправки
    alert('Error sending your message. Please try again later.');
  };
  xhr.send(formData);
}




