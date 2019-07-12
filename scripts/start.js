// Get type and name value from url
let values = window.location.search.slice(1).split('&');
let type = values[0].split('=')[1];
let name = values[1].split('=')[1].replace(/%20/g, ' ');

// Reference to text element
let text = document.getElementsByTagName('p')[0];

// Set text
text.textContent = name;

// Set font weigth
switch(type) {
    case '1':
        text.style.fontWeight = '100';
        break;
    case '2': 
        text.style.fontWeight = '300';
        break;
    case '3': 
        text.style.fontWeight = '400';
        break;
    case '4': 
        text.style.fontWeight = '500';
        break;
    case '5': 
        text.style.fontWeight = '700';
        break;
}

// Start timer
document.getElementById('btn-left').onclick = () => {
    window.location.href = "timer.html?type=" + type;
}

// Go back to start menu
document.getElementById('btn-right').onclick = () => {
    window.location.href = "../index.html";
}
