const startTime = 25; // Default time in minutes
let time = startTime * 60

const alarm = new Audio('resources/audio/alarm.mp3');

const timerEl = document.getElementById("timer")

let studyTime = 25;
let shortTime = 5;
let longTime = 10;

let isOn = false;
let intervalId = null;

updateTimeEl();

function timerType(id) {
    clearActiveInterval();
    if (id == "study") {
        time = studyTime * 60;
    } else if (id == "short") {
        time = shortTime * 60;
    } else {
        time = longTime * 60;
    }
    updateTimeEl();
}

function playPause() {
    if (intervalId) {
        clearActiveInterval();
    } else {
        intervalId = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    if (time <= 0) {
        alarm.play()
        clearActiveInterval();
        return;
    }
    time--;
    updateTimeEl();
}

function updateTimeEl() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerEl.innerHTML = `${minutes}:${seconds}`;
}

function clearActiveInterval() {
    clearInterval(intervalId);
    intervalId = null;
}