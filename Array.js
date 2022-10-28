const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  let webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// webTechs = webTechs.map((tech) => tech.toUpperCase());

// const tech = webTechs.forEach((tech) => {
//     console.log(tech);
// });

// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// let array = txt.split(' ');
// let words = array.join(' ');
// console.log(array);

// console.log(words);

let emptyArray = [];
console.log(emptyArray);
console.log(webTechs);
console.log(webTechs.length);
console.log(webTechs[0]);
console.log(webTechs[webTechs.length - 1]);
//get middle element of array

console.log(webTechs[Math.floor(webTechs.length / 2)]);

let mixArray = new Array('HTML', 'CSS', 3, 4, 5, true, false, 'JavaScript');

console.log(mixArray);

const itCompany = new Array('Facebook', 'Google', 'MicroSoft', 'Apple', 'IBM', 'Oracle', 'Amazon');
console.log(itCompany);
console.log(itCompany.length);
console.log(itCompany[0], itCompany[Math.floor(itCompany.length / 2)], itCompany[itCompany.length - 1]);

// for(let i=0; i<itCompany.length; i++){
//   console.log(itCompany[i]);
// }

//filter out companies which have more than one 'o' without the filter method

if(itCompany.includes('o')){
  console.log(itCompany);
}

let userInput = 'Google';

if(itCompany.includes(userInput)){
  console.log(`${userInput} is an IT company`);
}else{
  console.log(`${userInput} is not an IT company`)
}

console.log(itCompany.sort());
console.log(itCompany.reverse());
console.log(itCompany.slice(0,3));
console.log(itCompany.slice(4,7));



console.log(itCompany.slice(3,4));

console.log(itCompany.shift());
console.log(itCompany.pop());
console.log(itCompany.shift(4));
itCompany.splice();
console.log(itCompany);


// Level 2

require('./countries.js');

console.log(countries);

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(' ');
console.log(words)
console.log(words.length)

function list(array){
  array.unshift('Meat');
  array.push('Sugar');
  array.slice(1,4);
  

}

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

list(shoppingCart);
console.log(shoppingCart);

if(countries.includes('Ethiopia')){
  console.log('ETHIOPIA');
}


if(webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess');
}else{
  webTechs.push('Sass');
}


console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

console.log(ages[0], ages[ages.length-1]);

console.log(Math.floor(ages[ages.length-1] - ages[0] / ages.length));
// Find the average age(all items divided by number of items)

console.log(Math.floor(ages.reduce((a,b) => a + b) / ages.length));


console.log(Math.abs(ages[ages.length-1] - ages[0]));


