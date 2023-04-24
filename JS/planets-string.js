(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planets = planetsString.split('|')
    planetsArray = Array.of(planets)
    console.log(planetsArray);

    console.log("-----------------------------------------");
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * */
    let breakPlanets = "Mercury<br>Venus<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune<br>"
    document.getElementById("planets").innerHTML = breakPlanets

// * BONUS:
    // * Create another string that would display your planets in an undordered
    // * list. You will need an opening AND closing <ul> tags around the entire
    // * string, and <li> tags around each planet.
    let planetsList = "<ul><li>Mercury</li><li>Venus</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>"
    document.getElementById("planets-ul").innerHTML = planetsList


})();