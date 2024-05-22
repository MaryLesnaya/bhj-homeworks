const editor = document.getElementById('editor');

// Сохранение текста в локальное хранилище при изменении
editor.addEventListener('input', () => {
    localStorage.setItem('editor-text', editor.value);
});

// Загрузка текста из локального хранилища
const savedText = localStorage.getItem('editor-text');
if (savedText) {
  editor.value = savedText;
}
