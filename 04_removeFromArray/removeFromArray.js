const removeFromArray = function(inputArray) {

    let args = Array.from(arguments);
    let newArray = [];

//For each object in the inputArray
    //if object matches argument[1] : continue
    //else pop to new array
     for (item in inputArray){
        let match = false;
        for (j =1; j < (args.length); j++)
            if (inputArray[item] === arguments[j]){
                match = true
            };

        if (match){
            continue;
        }
        else {
            newArray.push(inputArray[item]);
        };
    };

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
