// Status list constants
let statusValues = ["Raw", "Thick & Runny", "Set, but runny", "Set, but tender", "Fully set", "Well done"];
let opacityValue = 0.3;
let spacing = 1.7;

let statusIndex = 0;

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

    statusIndex++;
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
    if (statusIndex > 2) removeFirst();

    if (statusValues[statusIndex] !== undefined) 
        addToList(statusValues[statusIndex]);
    
    moveList();
}

// Add the two first in the list
addToList(statusValues[0]);
addToList(statusValues[1]);

// Set opacity for start
container.getElementsByTagName('p')[1].style.opacity = opacityValue;

// Redirect to menu on click
document.getElementById("btn-right").onclick = () => {
    window.location.href = "../index.html";
}

let toggleWarning = show => {
    // Change background color
    let body = document.getElementsByTagName('body')[0];
    body.style.transition = "all 500ms ease";
    body.style.backgroundColor = show? "var(--main-red)" : "var(--main-blue)";
    
    if (show) {
        convertSplitBtn("btn-left", false);
        changeBtn("btn-left", "Finish", "green");


        // Redirect to finished page on click
        document.getElementById("btn-left").onclick = () => {
            window.location.href = "finished.html";
        }
    } else {
        convertSplitBtn("btn-left", true);
        changeBtn("btn-left", "Stop", "red");
        changeBtn("btn-right", "Menu", "black");
    }

    // Show/hide time and bell icon
    document.getElementById("time").style.opacity = show? 0 : 1;
    document.getElementById("bell").style.opacity = show ? 1 : 0;

    show ? toogleStopResumeBtn(false) : toogleStopResumeBtn(true);
}

let changeBtn = (id, msg, color) => {
    let btn = document.getElementById(id);
    btn.style.backgroundColor = "var(--main-" + color + ")";
    btn.textContent = msg;
}

// Change between a full btn and a split btn
// False = no split, True = a split btn
let convertSplitBtn = (btn_left_id, split) => {
    let leftBtn = document.getElementById(btn_left_id);
    if (split) leftBtn.removeAttribute("style");
    else {
        leftBtn.style.width = leftBtn.offsetWidth*2;
        leftBtn.style.borderRadius = "30px";
    }
}

// --- Button stop/resume ---
let btn = document.getElementById("btn-left");
let stop = false;

let toogleStopResumeBtn = show => {
    if (show) {
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
    } else {
        // btn.onclick = () => {
        //     toggleWarning(false);
        // }
    }
}

// Default value on page load
toogleStopResumeBtn(true);

