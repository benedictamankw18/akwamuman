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

// Drop function for moblie


function mobileActiviesDrop() {
    if (closedrop) {
        document.getElementById("mobileClubs").classList.remove('show');
        document.getElementById("mobileHouses").classList.remove('show');
        document.getElementById("mobileDepartment").classList.remove('show');
    }
    document.getElementById("mobileActivies").classList.toggle('show');
    closedrop = true;
}


function mobileClubdrop() {
    if (closedrop) {
        document.getElementById("mobileActivies").classList.remove('show');
        document.getElementById("mobileHouses").classList.remove('show');
        document.getElementById("mobileDepartment").classList.remove('show');
    }
    document.getElementById("mobileClubs").classList.toggle('show');
    closedrop = true;
}


function mobileHousedrop() {
    if (closedrop) {
        document.getElementById("mobileActivies").classList.remove('show');
        document.getElementById("mobileClubs").classList.remove('show');
        document.getElementById("mobileDepartment").classList.remove('show');
    }
    document.getElementById("mobileHouses").classList.toggle('show');

    closedrop = true;
}


function mobileDepartmentdrop() {
    if (closedrop) {
        document.getElementById("mobileActivies").classList.remove('show');
        document.getElementById("mobileClubs").classList.remove('show');
        document.getElementById("mobileHouses").classList.remove('show');
    }
    document.getElementById("mobileDepartment").classList.toggle('show');

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

function openNav() {
    document.getElementById("moblieNav").style.display = "block";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("close").style.transition = "display 0.50s";
}

function closeNav() {
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.transition = "display 0.50s";
}

function classSession() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function sport() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function afterClass() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function drama() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function cadet() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function NSMQ() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function dance() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function huzOneBoys() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function huzOneGirls() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function huzTwoBoys() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function huzTwoGirls() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function huzThreeBoys() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function huzThreeGirls() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function huzFourBoys() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function huzFourGirls() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function science() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function homeEcons() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function generalArt() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function visualArt() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function Business() {
    document.getElementById("open").style.display = "block";
    document.getElementById("moblieNav").style.display = "none";
    document.getElementById("close").style.display = "none";
}