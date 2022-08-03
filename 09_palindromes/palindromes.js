const palindromes = function (string) {
    let stringArray = [...string.toLowerCase()];
    let newString = stringArray.reverse().toString().replace(/[^a-zA-Z0-9]/g, "");;
    return newString === string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") ? true : false
};

// Do not edit below this line
module.exports = palindromes;
