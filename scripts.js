const newYears = "1 jan 2024"

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

function countDown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();


    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60
    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds)
    
}


function formatTime(time) {
    return time < 10 ? `0${time}`: time;
}


countDown()
setInterval(countDown, 1000)