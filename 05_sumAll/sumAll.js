const sumAll = function(first, last) {
    let sum = 0;
    let big = 0;
    let small = 0;
    
    if (typeof(first) != "number" || typeof(last) != "number"  || first < 0 || last < 0){
        return "ERROR";
    }

    if (first > last) {
        big = first;
        small = last;
    }
    else {
        small = first;
        big = last;
    }  

    for (i = small; i <= big; i++ ){
        sum += i;
    };

    return sum

};

// Do not edit below this line
module.exports = sumAll;
