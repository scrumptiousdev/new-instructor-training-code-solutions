const convertMinutesToSeconds = minutes => minutes * 60;
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

const greet = name => 'Hey, ' + name;
const greetResult = greet('Beavis');

console.log('greetResult:', greetResult);

const getArea = (width, height) => width * height;
const getAreaResult = getArea(17, 42);

console.log('getAreaResult:', getAreaResult);

const getFirstName = person => person.firstName;
const getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('getFirstNameResult:', getFirstNameResult);

const getLastElement = array => array[array.length - 1];
const getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElementResult:', getLastElementResult);
