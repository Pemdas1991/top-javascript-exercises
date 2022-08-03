
const findTheOldest = function(people) {
    oldest = people.reduce((lastPerson, nextPerson) => {
        if (!nextPerson.yearOfDeath){
            nextPerson.yearOfDeath = new Date().getFullYear()
        } 
        if (!lastPerson) {
            return nextPerson;
        } 
        let lastAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
        let nextAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;

        return lastAge > nextAge ? lastPerson : nextPerson;

    }, 0)

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
