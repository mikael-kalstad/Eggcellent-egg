// Get type value from url 
let type = window.location.search.slice(1).split('=')[1];

// Different egg boiling times
//240
const times = [6, 360, 480, 600, 720];

let timeIndex = 0;
let targetTime = times[type-1];
let time = 0;
let overtime = false;

// Function that will increase time every second
let count = () => {
    time++;

    // Check if overtime is activated
    overtime ? targetTime++ : targetTime--;

    // Update time on page
    document.getElementById("time").innerHTML = 
    overtime? "+ " + formatTime(targetTime) : "" + formatTime(targetTime);

    // Check if list should update
    if (time >= times[timeIndex] && timeIndex !== times.length) {
        nextInList();
        timeIndex++;
    }

    // Activate overtime if time hits zero
    if (targetTime === 0) {
        overtime = true;

        // Start warning 
        toggleWarning(true);
    }
}

// Format seconds into minutes and seconds
let formatTime = num => {
    let minutes = Math.floor(num/60);
    let seconds = num - minutes*60;

    if (minutes === 0) minutes = "00"; 
    else if (minutes < 10) minutes = "0" + minutes;

    if (seconds === 0) seconds = "00";
    else if (seconds < 10) seconds = "0" + seconds;
    
    return minutes + " : " + seconds;
}

// Run count function each second and save interval id for stop
let intervalId = setInterval(count, 1000);