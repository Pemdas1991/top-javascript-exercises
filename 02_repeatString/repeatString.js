const repeatString = function(inputText, inputNumber) {
    let repeatedString = "";

    if (inputNumber < 0) {
        return "ERROR";
    };

    for (i = 0; i < inputNumber; i++){
        repeatedString += inputText;
    };

    return repeatedString
    
};

// Do not edit below this line
module.exports = repeatString;
