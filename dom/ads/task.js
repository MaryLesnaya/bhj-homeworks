const rotators = document.querySelectorAll('.rotator');

// Функция для смены активного класса внутри rotator
function changeRotator(rotator) {
    const rotatorCases = rotator.querySelectorAll('.rotator__case');
    const currentActiveIndex = Array.from(rotatorCases).findIndex(c => c.classList.contains('rotator__case_active'));
    const nextActiveIndex = (currentActiveIndex + 1) % rotatorCases.length;

    rotatorCases[currentActiveIndex].classList.remove('rotator__case_active');
    rotatorCases[nextActiveIndex].classList.add('rotator__case_active');
}

// Цикл для смены rotator каждую секунду
rotators.forEach((rotator) => {
    setInterval(() => {
        changeRotator(rotator);
    }, 1000);
});