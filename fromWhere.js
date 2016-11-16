const assert = require('assert');

var fromWhere = function(carReg){

  if (carReg.startsWith('CY')){
      return "Bellville"
  }
  else if (carReg.startsWith('CJ')){
      return "Paarl"
  }
  else if (carReg.startsWith('CA')){
      return "Cape Town"
    }
  else{
  return "Some other place!";
    }
};


assert.equal(fromWhere('CY 458985'), 'Bellville');
assert.equal(fromWhere('CJ 546625'), 'Paarl');
assert.equal(fromWhere('CA 125573'), 'Cape Town');
assert.equal(fromWhere('GP 466878'), "Some other place!");
