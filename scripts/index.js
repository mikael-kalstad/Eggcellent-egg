let elements = document.getElementsByClassName('selection');

for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = () => {
        window.location.href = 
        'pages/start.html?' + 
        'type=' + elements[i].id + '&' +
        'name=' + elements[i].getElementsByTagName('p')[0].textContent;
    }
}
