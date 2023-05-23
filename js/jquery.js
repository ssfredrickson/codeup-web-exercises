"use strict";



let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', "Enter"]

let current = 0;

function cheatCode(event) {
    console.log(event.key);
    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (konamiCode.indexOf(event.key) < 0 || event.key !== konamiCode[current]) {
        current = 0;
        return;
    }

    // Update how much of the pattern is complete
    current++;

    // If complete, alert and reset
    if (konamiCode.length === current) {
        current = 0;
        $('#main-title').html("WELCOME BACK")
        $("#lives").html("30")
        $('#lives').toggleClass('zero-lives lives')
        $('#game-over').css("display", "none")
        $('#combatText').html("&#9798 SOMEONE HAS BEEN LOOKING OUT FOR YOU &#9798")
        $('#continue').html("PRESS <span class=\"material-symbols-outlined\">\n" +
            "space_bar\n" +
            "</span> TO CONTINUE")

    }

}

// Listen for keydown events
$(document).on('keyup', cheatCode);