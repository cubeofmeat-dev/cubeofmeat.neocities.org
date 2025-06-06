/* MAIN FUNCTIONS */
function handleMinimize(clickedId) {
    console.log('Minimizing:', clickedId);
    var prefix = clickedId.substring(0, clickedId.indexOf('-'));
    document.getElementById(prefix + '-body').style.display = 'none';
}

function handleRestore(clickedId) {
    console.log('Restoring:', clickedId);
    var prefix = clickedId.substring(0, clickedId.indexOf('-'));
    document.getElementById(prefix + '-body').style.display = 'block';
}

function handleClose(clickedId) {
    console.log('Closing:', clickedId);
    var prefix = clickedId.substring(0, clickedId.indexOf('-'));
    document.getElementById(prefix + '-window').remove();
}

/* NAVIGATION FUNCTIONS */
function handleTabClicked(clickedId) {
    console.log('Tab clicked:', clickedId);
    var prefix = clickedId.substring(0, clickedId.indexOf('-'));
    var tab = document.getElementById(prefix + '-article');
    var tabs = document.querySelectorAll('article');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('hidden', true);
    }
    tab.removeAttribute('hidden');
}

/* DRAGGABLE ELEMENT */
dragElement(document.querySelector('.window'));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}