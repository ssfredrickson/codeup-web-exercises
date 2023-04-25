(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray = planetsString.split('|')

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */




    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * */
    let brPlanets = planetsArray.join('<br>')
    document.getElementById("planets").innerHTML = brPlanets

// * BONUS:
    // * Create another string that would display your planets in an undordered
    // * list. You will need an opening AND closing <ul> tags around the entire
    // * string, and <li> tags around each planet.


    let planetsList = "<ul><li>" + planetsArray.join('</li><li>') + "</li></ul>"


    document.getElementById("planets-ul").innerHTML = planetsList


})();