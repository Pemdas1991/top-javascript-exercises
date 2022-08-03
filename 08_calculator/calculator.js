const initialValue = 0;

const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(input) {
  array = [...input]
  let total = 0
  array.forEach(num => {
    total += num
  });
  return total;
};

//Sum can also be done as
  // const sum = function(array) {
  // return array.reduce((total, current) => total + current, 0);
  // };

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1 )

};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
  let output = 1;
  for (i=1; i<=num; i++){
    output *= i;
  }
  return output;
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
