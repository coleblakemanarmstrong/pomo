const startTime = 25; // Default time in minutes
let time = startTime * 60

const timerEl = document.getElementById("timer")

let isOn = false;
let intervalId = null;

updateTimeEl();

function playPause() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        intervalId = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    time--;
    updateTimeEl();
}

function updateTimeEl() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerEl.innerHTML = `${minutes}:${seconds}`;
}