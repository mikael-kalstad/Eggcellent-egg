let wrapper = document.getElementById("wrapper");

// Function that will load a html file on the page
export function changePage(fileName) {
    // Error check
    if (fileName === null || fileName === "" || wrapper === null) return false;

    // Load html file in div on page
    wrapper.innerHTML = 
    '<object type="text/html" data=' + '"' + fileName + '"' + ' width="100%" height="100%"></object>';
};

changePage("pages/timer.html")