/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

const isUnderFive = number => number < 5;
const isEven = number => !number % 2;
const startsWithJ = string => string[0] === 'J';
const isOldEnoughToDrink = person => person.age > 20;
const isOldEnoughToDrive = person => person.age > 15;
const isOldEnoughToDrinkAndDrive = _ => false;
const categorizeAcidity = pH => pH === 7 ? 'neutral' : pH >= 0 && pH < 7 ? 'acid' : pH <= 14 && pH > 7 ? 'base' : 'invalid pH level';
const introduceWarnerBro = name => name === 'yakko' || name === 'wakko' ? 'We\'re the warner brothers!' : name === 'dot' ? 'I\'m cute~' : 'Goodnight everybody!';
