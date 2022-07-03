const ctof = function(degreesC) {
  let degreesF = 0

  degreesF = (degreesC * (9/5)) + 32;

  return Math.round(degreesF * 10) / 10;
};

const ftoc = function(degreesF) {

  let degreesC = 0

  degreesC = (degreesF - 32) * (5/9)

  return Math.round(degreesC * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
