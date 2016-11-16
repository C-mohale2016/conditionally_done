const assert = require('assert');

var weekOrWeekend = function(day){


  if (day.startsWith('S')){
      // execute this code if weekDay
      return "weekend";
  }
  else{
      //execute this code if it's not weekDay
      return "week";
  }
};
// defining my assert values
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');
assert.equal(weekOrWeekend('Monday'), 'week');
