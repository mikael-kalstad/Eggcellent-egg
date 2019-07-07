// Constants for different egg boiling times
const times = [1, 3, 2, 4, 1];

let time = 55;

// Function that will increase time with one second
let count = () => {
    time++;
    document.getElementById("title").innerHTML = formatTime(time);
}

// Function for formatting seconds into minutes and seconds
let formatTime = (num) => {
    let minutes = Math.floor(num/60);
    let seconds = num - minutes*60;

    if (minutes === 0) minutes = "00"; 
    else if (minutes < 10) minutes = "0" + minutes;

    if (seconds === 0) seconds = "00";
    else if (seconds < 10) seconds = "0" + seconds;
    
    return minutes + " : " + seconds;
}

// Run count function each second
setInterval(count, 1000)