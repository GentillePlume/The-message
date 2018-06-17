//Particles loader
particlesJS.load('particles-js', 'resources/particlesjs-config.json', function () {});

var typeSpeed = 100;

//Detect if the user is using a mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 var typeSpeed = 25;
    alert("MOBILE BROWSER DETECTED");
}

// Typed effect
var typed = new Typed('#typed1', {
    strings: ["Espace web en cours de construction"],
    typeSpeed: typeSpeed,
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
    var string = "Espace web en cours de construction";
    var charCount = Array.from(string).length;
    
    var wait = charCount * 150;
    console.log("wait time : " + wait);

    setTimeout(function () {
        $("#typed2")[0].style.visibility = "visible";
    }, wait);

}