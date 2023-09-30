function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Форматируем часы
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Форматируем минуты
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Форматируем секунды
    const currentTime = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = currentTime;
}

// Обновляем время сразу после загрузки страницы
updateTime();

// Обновляем время каждую минуту
setInterval(updateTime, 60000);

