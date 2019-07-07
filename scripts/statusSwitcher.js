// --- Status List ---

let statusValues = ["Soft", "Medium", "Hard", "Finished"];
let statusIndex = 0;


let opacityValue = 0.3;
let spacing = 1.7;

// Container element for status values
let container = document.getElementById("status");

let addToList = value => {
    // Create new p element 
    let p = document.createElement('p');
    p.style.position = 'absolute';
    p.style.transform = 'translateY('+ spacing * container.getElementsByTagName('p').length +'em)';
    
    // Add p elemenet to container
    p.appendChild(document.createTextNode(value));
    container.appendChild(p);
}

let removeFirst = () => container.removeChild(container.getElementsByTagName('p')[0]);

// Function that will move the list to fit the next item
let moveList = () => {
    let items = container.getElementsByTagName('p');

    if (items.length >= 1) {
        items[0].style.opacity = opacityValue;
        items[0].style.transform = 'translateY(-' + spacing + 'em)';
    }

    if (items.length >= 2) {
        items[1].style.opacity = 1;
        items[1].style.transform = 'translateY(0em)';
    }

    if (items.length >= 3) {
        items[2].style.opacity = opacityValue;
        items[2].style.transform = 'translateY(' + spacing + 'em)';
    }
}

// Move to the next status value
let nextInList = () => {
    if (statusIndex > 0) removeFirst();

    if (statusValues[statusIndex] !== undefined) 
        addToList(statusValues[statusIndex]);
    
    moveList();

    statusIndex++; 
}

// Add the two first in the list and set opacity for start
addToList(statusValues[0]);
addToList(statusValues[1]);

container.getElementsByTagName('p')[1].style.opacity = opacityValue;


// --- Timer ---

// Different egg boiling times
const times = [118, 114, 112, 109, 106];

let timeIndex = 0;
let time = 5;
let overtime = false;

// Function that will increase time every second
let count = () => {
    // Check if overtime is activated
    overtime ? time++ : time--;

    // Update time on page
    document.getElementById("time").innerHTML = 
    overtime? "+ " + formatTime(time) : "" + formatTime(time);

    // Check if list should update
    if (time <= times[timeIndex] && timeIndex !== times.length) {
        nextInList();
        timeIndex++;
    }

    // Activate overtime if time hits zero
    if (time === 0) {
        overtime = true;
        // document.getElementById('time').style = "color: var(--main-red)";
        
        // Start warning 
        showWarning();
    }
}

let showWarning = () => {
    // Change background color
    let body = document.getElementsByTagName('body')[0];
    body.style.transition = "all 500ms ease";
    body.style.backgroundColor = "var(--main-red)";
    
    changeBtn("btn-left", "Okay", "green");
    changeBtn("btn-right", "Continue", "yellow");

    document.getElementById("time").style.opacity = 0;
    document.getElementById("bell").style.opacity = 1;

    leftBtn.onclick = () => {
        // Change to menu...
        console.log("something");
    }

    rightBtn.onclick = () => {
        hideWarning();
    }
}

let hideWarning = () => {
    // Opposite of above... uuhh
}

let changeBtn = (id, msg, color) => {
    let btn = document.getElementById(id);
    btn.style.backgroundColor = "var(--main-" + color + ")";
    btn.textContent = msg;
}

// Format seconds into minutes and seconds
let formatTime = (num) => {
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

// --- Button stop/resume ---
let btn = document.getElementById("btn-left");
let stop = false;

btn.onclick = () => {
    // Stop timer and change btn
    if (!stop) {
        clearInterval(intervalId);
        stop = true;
        changeBtn("btn-left", "Resume", "green");
    } 
    // Resume timer and change btn
    else {
        intervalId = setInterval(count, 1000);
        stop = false;
        changeBtn("btn-left", "Stop", "red");
    }
   
}