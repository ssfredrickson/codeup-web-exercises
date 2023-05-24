"use strict";

let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', "Enter"]
let current = 0;

// Handler function
function cheatCode(event) {
    console.log(event.key);

    // If event does not match value of index OR position within the array doesn't match the current value of the "current" variable

    if (konamiCode.indexOf(event.key) < 0 || event.key !== konamiCode[current]) {
        current = 0;
        return;
    }

    // Update current variable if event matches indexOf array

    current++;

    // If length of array matches value of "current" variable reset "current" value and manipulate the HTML w/ JQuery

    if (konamiCode.length === current) {
        current = 0;
        $('#main-title').html("WELCOME BACK")
        $("#lives").html("30")
        $('#lives').toggleClass('zero-lives lives')
        $('#game-over').css("display", "none")
        $('#combatText').html("&#9798 LOOKS LIKE SOMEONE IS WATCHING OUT FOR YOU &#9798")
        $('#continue').html("PRESS <span class=\"material-symbols-outlined\">\n" +
            "space_bar\n" +
            "</span> TO CONTINUE")
        $('#continue').css("margin-top", "20px")

    }

}

// ------------- JQuery Event Listener on "keyup" -----------------
$(document).on('keyup', cheatCode);