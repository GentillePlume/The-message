/* particles loader */
particlesJS.load('particles-js', 'resources/particlesjs-config.json', function () {});

// Typed effect
var typed = new Typed('#typed1', {
    strings: ["Espace web en cours d'installation"],
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
    var string = "Espace web en cours d'installation";
    var charCount = Array.from(string).length;
    
    var wait = charCount * 150;
    console.log("wait time : " + wait);

    setTimeout(function () {
        $("#typed2")[0].style.visibility = "visible";
    }, wait);

}