//Detect if the user is using a mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var typeSpeed = 1;
} else {
    //Particles loader
    particlesJS.load('particles-js', 'resources/particlesjs-config.json', function () {});
}

// Typed effect
var typed = new Typed('#typed1', {
    strings: ["Espace web en cours de construction"],
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

function h1Check() {
    var h1String = "Espace web en cours de construction";

    if (document.getElementById("typed1").innerHTML.length == h1String.length) {

        $("#typed2")[0].style.visibility = "visible";
        $("svg")[0].style.animationName = "flash";
        $("svg")[0].style.visibility = "visible";

    } else if (document.getElementById("typed1").innerHTML.length < h1String.length) {

        setTimeout(function () {
            h1Check();
        }, 1000);

    } else {

        console.log("FATAL ERROR h1Check FUNCTION SYSTEM ERROR BURN");
    }
}

h1Check()