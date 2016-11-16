const assert = require('assert');

var transportFee = function(shift){
    switch(shift) {
        case "morning":
            return "R20";
        case "afternoon":
            return "R10";
        default:
            return "You pay nothing";
    }
}


assert.equal(transportFee('morning'), 'R20');
assert.equal(transportFee('afternoon'), 'R10');
assert.equal(transportFee('nightshift'), 'You pay nothing');
