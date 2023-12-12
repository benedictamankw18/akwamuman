/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
var closedrop = false;

function activiesDrop() {
    if (closedrop) {
        document.getElementById("clubs").classList.remove('show');
        document.getElementById("houses").classList.remove('show');
        document.getElementById("department").classList.remove('show');
    }
    document.getElementById("activies").classList.toggle('show');
    closedrop = true;
}

function clubdrop() {
    if (closedrop) {
        document.getElementById("activies").classList.remove('show');
        document.getElementById("houses").classList.remove('show');
        document.getElementById("department").classList.remove('show');
    }
    document.getElementById("clubs").classList.toggle('show');
    closedrop = true;
}

function housedrop() {
    if (closedrop) {
        document.getElementById("activies").classList.remove('show');
        document.getElementById("clubs").classList.remove('show');
        document.getElementById("department").classList.remove('show');
    }
    document.getElementById("houses").classList.toggle('show');
    closedrop = true;
}

function departmentdrop() {
    if (closedrop) {
        document.getElementById("activies").classList.remove('show');
        document.getElementById("clubs").classList.remove('show');
        document.getElementById("houses").classList.remove('show');
    }
    document.getElementById("department").classList.toggle('show');
    closedrop = true;
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-click");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const hamMenu = document.querySelector('.ham-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hamMenu.classList.add('span');

})