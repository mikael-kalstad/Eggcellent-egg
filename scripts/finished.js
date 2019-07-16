let svg = document.getElementById('pot');
let element = document.getElementById('XMLID_1_');

element.style.transition = 'transform 300ms ease';

// Water bouncing effect
setTimeout(() => {
    element.style.transform = 'translateY(-5px)';
}, 2000);

setTimeout(() => {
    element.style.transform = 'translateY(5px)';
}, 2400);

setTimeout(() => {
    element.style.transform = 'translateY(-3px)';
}, 2800);

setTimeout(() => {
    element.style.transform = 'translateY(3px)';
}, 3200);


// Find how much the egg must move
let y = window.innerHeight / 3;
console.log("y-move: " + y);

// Menu btn 
document.getElementById('btn-menu').onclick = () => {
    window.location.href = "../index.html";
}

// Text dissappear
setTimeout(() => {
    document.getElementById('text').style.display = 'none';
}, 7000)