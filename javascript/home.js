var imgMyIndex = 0;
var capMyIndex = 0;
carousel();
slideCaption();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideImage");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    imgMyIndex++;
    if (imgMyIndex > x.length) { imgMyIndex = 1 }
    x[imgMyIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
}


function slideCaption() {
    var i;
    var x = document.getElementsByClassName("slideCaptions");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    capMyIndex++;
    if (capMyIndex > x.length) { capMyIndex = 1 }
    x[capMyIndex - 1].style.display = "block";
    setTimeout(slideCaption, 5000);
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideImage");
    var y = document.getElementsByClassName("slideCaptions");
    if (n > x.length && n > y.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    y[slideIndex - 1].style.display = "block";
}