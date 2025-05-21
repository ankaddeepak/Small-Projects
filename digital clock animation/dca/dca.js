const hoursCircle = document.getElementById("hh");
const minutesCircle = document.getElementById("mm");
const secondsCircle = document.getElementById("ss");

const hrsText = document.getElementById("hrs");
const minsText = document.getElementById("mins");
const secsText = document.getElementById("secs");
const ampmText = document.getElementById("ampm");

function updateClock() {
    const now = new Date();

    const hrs = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    const hoursForClock = hrs % 12 || 12; // Convert 24-hour format to 12-hour
    const ampm = hrs >= 12 ? "PM" : "AM";

    const hoursPercent = (hoursForClock / 12) * 440;
    const minutesPercent = (mins / 60) * 440;
    const secondsPercent = (secs / 60) * 440;

    // Update circles
    hoursCircle.style.strokeDashoffset = 440 - hoursPercent;
    minutesCircle.style.strokeDashoffset = 440 - minutesPercent;
    secondsCircle.style.strokeDashoffset = 440 - secondsPercent;

    // Update text
    hrsText.textContent = String(hoursForClock).padStart(2, "0");
    minsText.textContent = String(mins).padStart(2, "0");
    secsText.textContent = String(secs).padStart(2, "0");
    ampmText.textContent = ampm;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
