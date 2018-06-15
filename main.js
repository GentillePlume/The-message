/* particles loader */
particlesJS.load('particles-js', 'resources/particlesjs-config.json', function () {});

// Typed effect
var typed = new Typed('#typed1', {
    strings: ["Website is being installed"],
    typeSpeed: 100,
    showCursor: false
});

var typed = new Typed('#typed2', {
    strings: ["..."],
    typeSpeed: 200,
    startDelay: 100,
    backSpeed: 200,
    showCursor: false,
    loop: true
});

$(document).ready(points());
$(window).resize(points());

function points() {
    setTimeout(function () {
        $("#typed2")[0].style.visibility = "visible";
    }, 4500);

}