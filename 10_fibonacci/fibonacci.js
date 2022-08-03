const fibonacci = function(num) {
    if(num <0 ){
        return "OOPS";
    }
    lastNumber = 0
    nextNumber = 1
    newNumber = 0
    for (i=1; i<num; ++i){
        newNumber = lastNumber + nextNumber;
        lastNumber = nextNumber;
        nextNumber = newNumber;
    }
    return nextNumber;
};

// Do not edit below this line
module.exports = fibonacci;
