  /* этот код помечает картинки, для удобства разработки */
  var lis = document.querySelectorAll('js-slide');
  for (var i = 0; i < lis.length; i++) {
  lis[i].style.position = 'relative';
  var span = document.createElement('span');
  // обычно лучше использовать CSS-классы,
  // но этот код - для удобства разработки, так что не будем трогать стили
  span.style.cssText = 'position:absolute;left:0;top:0';
  span.innerHTML = i + 1;
  lis[i].appendChild(span);
  }

  /* конфигурация */
  var width = 320; // ширина изображения
  var count = 3; // количество изображений

  var slider = document.querySelector('.js-slider');
  var slides = slider.querySelector('.js-slides');
  var slide = slides.querySelectorAll('.js-slide');

  var position = 0; // текущий сдвиг влево

  slider.querySelector('.js-prev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width, 0)
    slides.style.marginLeft = position + 'px';
  };

  slider.querySelector('.js-next').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position - width, -width * (slide.length - count));
    slides.style.marginLeft = position + 'px';
  };

  var linkJennifer = document.querySelector(".js-jennifer");
  var popupJennifer = document.querySelector(".modal-jennifer");

  if (linkJennifer && popupJennifer) {
    var closeJennifer = popupJennifer.querySelector(".modal-close");
    linkJennifer.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupJennifer.classList.add("modal-show");
    });
    closeJennifer.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupJennifer.classList.remove("modal-show");
    });
    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (popupJennifer.classList.contains("modal-show")) {
          popupJennifer.classList.remove("modal-show");
        }
      }
    });
  }
