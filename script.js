document.getElementById('start-btn').addEventListener('click', function() {
    const datetimeInput = document.getElementById('datetime').value;
    if (!datetimeInput) return;

    const countdownDate = new Date(datetimeInput).getTime();
    const timerElement = document.createElement('div');
    timerElement.classList.add('timer');
    timerElement.innerHTML = `
        <div class="countdown-display"></div>
    `;
    document.getElementById('timers').appendChild(timerElement);

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(interval);
            timerElement.querySelector('.countdown-display').innerHTML = `<span class="time-up">Time's up!</span>`;
            document.getElementById('alarm-sound').play();
        } else {
            timerElement.querySelector('.countdown-display').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
});
