/*----------------------------------- 

			плавный скролл

-----------------------------------*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}







// Получаем элемент, до которого нужно доскроллить страницу
const targetElement = document.getElementById('order-list');

// Функция, которую нужно вызвать при достижении элемента
function myFunction() {
  console.log('Элемент достигнут!');
}

// Обработчик события скролла страницы
window.addEventListener('scroll', function() {
  // Получаем положение элемента относительно верхней границы окна просмотра
  const targetPosition = targetElement.getBoundingClientRect().top;
  // Получаем высоту окна просмотра
  const windowHeight = window.innerHeight;
  // Если элемент находится в видимой области окна просмотра
  if (targetPosition < windowHeight) {
    // Вызываем нужную функцию
    myFunction();
  }
});