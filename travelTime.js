const assert = require('assert');

var travelTime = function(time){
    switch(time) {
        case "Woodstocktaxi":
            return "09H00";
        case "Cape Town Station":
            return "09H10";
        case "Waterfront":
            return  "09H15"
        default:
            return "Walk to school";
    }
}


assert.equal(travelTime('Woodstocktaxi'), '09H00');
assert.equal(travelTime('Cape Town Station'), '09H10');
assert.equal(travelTime('Waterfront'), '09H15');
assert.equal(travelTime('Notaxi'), 'Walk to school');
