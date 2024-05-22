// Добавляем класс signin_active к контейнеру формы
document.querySelector('.signin').classList.add('signin_active');

// Получаем форму авторизации
let form = document.getElementById('signin__form');

// Получаем кнопку входа
let submitButton = document.getElementById('signin__btn');

// Получаем блок приветствия
let welcome = document.getElementById('welcome');

// Получаем элемент для отображения ID пользователя
let userIdElement = document.getElementById('user_id');

// Проверяем наличие ID пользователя в локальном хранилище
let userId = localStorage.getItem('userId');
if (userId) {
  // Если ID пользователя есть, показываем блок приветствия
  document.querySelector('.signin').classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userIdElement.innerText = userId;
}

// Обработчик события отправки формы
form.addEventListener('submit', function(event) {
  // Отменяем стандартное поведение формы
  event.preventDefault();
  // Получаем данные формы
  let formData = new FormData(form);

  // Отправляем AJAX-запрос на сервер
  fetch('https://students.netoservices.ru/nestjs-backend/auth', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Если авторизация прошла успешно
      // Сохраняем ID пользователя в локальное хранилище
      localStorage.setItem('userId', data.user_id);

      // Показываем блок приветствия
      document.querySelector('.signin').classList.remove('signin_active');
      welcome.classList.add('welcome_active');
      userIdElement.innerText = data.user_id;
    } else {
      // Если авторизация не удалась
      alert('Неверный логин/пароль');
    }
  })
  .catch(error => {
    console.error('Ошибка при отправке запроса:', error);
    alert('Произошла ошибка при авторизации');
  });
});