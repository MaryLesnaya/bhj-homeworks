const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    // Код для проверки, когда блок должен появиться
    reveals.forEach(function(reveal) {
        let top = reveal.getBoundingClientRect().top;
        let height = window.innerHeight;
    
        if (top < height) {
            reveal.classList.add('reveal_active'); // Добавляем класс для отображения блока
        }
    });
});

