// 1. Инициализация переменной счетчика
let count = 0;

// 2. Выбор элементов DOM
const valueDisplay = document.querySelector('#value');
const stepInput = document.querySelector('#step');
const btnDecrease = document.querySelector('#btn-decrease');
const btnReset = document.querySelector('#btn-reset');
const btnIncrease = document.querySelector('#btn-increase');

// Функция для обновления отображения и цвета (Bonus часть)
function updateDisplay() {
    valueDisplay.textContent = count;

    // Меняем цвет в зависимости от значения
    if (count > 0) {
        valueDisplay.style.color = "green";
    } else if (count < 0) {
        valueDisplay.style.color = "red";
    } else {
        valueDisplay.style.color = "black";
    }
}

// 3. Добавление слушателей событий
btnIncrease.addEventListener('click', () => {
    const step = parseInt(stepInput.value) || 1; // Берем значение шага
    count += step;
    updateDisplay();
});

btnDecrease.addEventListener('click', () => {
    const step = parseInt(stepInput.value) || 1;
    count -= step;
    updateDisplay();
});

btnReset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});