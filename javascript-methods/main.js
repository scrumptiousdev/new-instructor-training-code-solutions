const num1 = 3;
const num2 = 6;
const num3 = 9;
const maximumValue = Math.max(num1, num2, num3);

console.log(`maximumValue: ${maximumValue}`);

const heroes = ['Thor', 'Iron Man', 'Spiderman', 'Hulk'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log(`randomIndex: ${randomIndex}`);

const randomHero = heroes[randomIndex];

console.log(`randomHero: ${randomHero}`);

const library = [
  { title: 'Harry Potter', author: 'J. K. Rowling' },
  { title: 'The Lord of the Rings', author: 'J. R. R. Tolkien' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];
const lastBook = library.pop();

console.log('lastBook:', lastBook);

const firstBook = library.shift();

console.log('firstBook:', firstBook);

const js = { title: 'JavaScript for Impatient Programmers', author: 'Dr. Axel Rauschmayer' };
const css = { title: 'CSS Secrets', author: 'Lea Verou' };

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

const fullName = 'Ryan Choi';
const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log(`sayMyName: ${sayMyName}`);
