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
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// for(let i=0; i<countries.length; i++){
//     console.log(countries[i]);
// }
// console.log("\n")

// let i = 0;
// while(i < countries.length){
//   console.log(countries[i]);
//   i++;
// }
// console.log("\n")

// // do{
// //   console.log(countries[i]);
// //   i++;
// // }while(i < countries.length)

// console.log("\n")

// // iterate 10 to 0

// for(let i=countries.length; i>= 0; i--){
//   console.log(countries[i]);
// }
// console.log("\n")

// i = countries.length;

// while(i >= 0){
//   console.log(countries[i]);
//   i--;
// }

// do{
//   console.log(countries[i]);
//   i--;
// } while(i>= 0);

n = 10;

// for(let i=0; i<= n; i++){
//   console.log(i);
// }

// i =0;
// let string = ''
// while(i <= n){

//   let j = 0;
//   while(j<= i){
//     string += '#';
//     j++;
//   }
//   string += '\n';
//   i++;
// }

// console.log(string)

// console.log('\n');


// i =0;
// while(i <= n){
//   console.log(`${i} x ${i} = ${i*i}`);
//   i++;
// }

// console.log('\n');
// console.log(`i  i^2   i^3`)
// i = 0;
// while(i <= n){
//   console.log(`${i}   ${i*i}      ${i*i*i}`);
//   i++;
// }

// n = 100;
// while (i <=n){
//   if(i % 2 == 0){
//     console.log(i)
//   }
//   i++;
// }

// console.log('\n')
// n = 100
// i = 0
// while(i <=n){
//   if(i%2 != 0){
//     console.log(i);
//   }
//   i++;
// }


// let count = 0;
// i = 1;
// while(i <= n){
//   count += i;
//   i++;
  
// }
// console.log(`The sum of all numbers from 0 to 100 is ${count}`);

// console.log('\n')

// i = 0;
// let even = 0;
// let odd = 0;
// while(i <= n){
//   if(i % 2 == 0){
//     even += i;
//   }
//   else{
//     odd += i;
//   }
//   i++;
// }
// console.log(`The sum of all even numbers from 0 to 100 is ${even}`);
// console.log(`The sum of all odd numbers from 0 to 100 is ${odd}`);


// console.log('\n')


// let randomArray = [];
// i = 0;
// while(i<= 5){
//   randomArray.push(Math.floor(Math.random() * 100));
//   i++;
// }
// console.log(randomArray);

// console.log('\n')


// let randomArray1 = [];
// i = 0;
// while(i <= 5){
//   let randomNumber = Math.floor(Math.random() * 100);
//   if(!randomArray1.includes(randomNumber)){
//     randomArray1.push(randomNumber);
//   }
//   i++;
// }
// console.log(randomArray1);

// console.log('\n')

// let result = '';
// let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// // generate a six characters random id

// i = 0;

// while(i <= 5){

//   let random = characters.charAt(Math.floor(Math.random() * characters.length));
//   result += random;
//   i++;

// }
// console.log(result);

// console.log('\n')

// let num = Math.floor(Math.random() * 100);
// i = 0;
// result = '';
// while(i <= num){
//   let random = characters.charAt(Math.floor(Math.random() * characters.length));
//   result += random;
//   i++;
// }

// console.log(result);
// console.log('\n');

// // Write a script which generates a random hexadecimal number.

// let hex = '0123456789ABCDEF';
// let hexResult = '#';
// i = 0;
// while(i <= 5){
//   let random = hex.charAt(Math.floor(Math.random() * hex.length));
//   hexResult += random;
//   i++;
// }

// console.log(hexResult);

// // Write a script which generates a random rgb color number.

// let rgb = '0123456789';
// let rgbResult = 'rgb(';
// i = 0;
// while(i <= 2){
//   let random = rgb.charAt(Math.floor(Math.random() * rgb.length));
//   rgbResult += random;
//   if(i < 2){
//     rgbResult += ',';
//   }
//   i++;
// }
// rgbResult += ')';

// console.log(rgbResult);

// console.log('\n');

// // countries array to uppercase 

// let newArray = [];
// i = 0;
// while(i < countries.length){
//   newArray.push(countries[i].toUpperCase());
//   i++;
// }
// console.log(newArray);

// console.log('\n');

// let countryLengthArray = [];
// i = 0;
// while(i < countries.length){
//   countryLengthArray.push(countries[i].length);
//   i++;
// }
// console.log(countryLengthArray);

// console.log('\n');

// let countriesArray = [];
// i = 0;
// while(i < countries.length){
//   let newArray = [];
//   newArray.push(countries[i]);
//   newArray.push(countries[i].slice(0, 3).toUpperCase());
//   newArray.push(countries[i].length);
//   countriesArray.push(newArray);
//   i++;
// }
// console.log(countriesArray);

// console.log('\n');

// let countriesArray1 = [];
// i = 0;
// while(i < countries.length){
//   if(countries[i].includes('land')){
//     countriesArray1.push(countries[i]);
//   }
//   i++;
// }

// if(countriesArray1.length > 0){
//   console.log(countriesArray1);
// }else{
//   console.log('No country contains land');
// }

console.log('\n');






// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

console.log(countries[1].substring(countries[1].length -2).split("").reverse().join(""));

let countriesArray2 = [];
i = 0;
while (i < countries.length){
  if(countries[i].substring(countries[i].length -2).split("").reverse().join("") == 'ai'){
    countriesArray2.push(countries[i]);
  }
  i++;
}

if(countriesArray2.length > 0){
  console.log(countriesArray2);
}else{
  console.log('These are countries ends without ia');
}

let countriesArray3 = [];
i = 0;
while(i < countries.length){
  if(countries[i].length == 5){
    countriesArray3.push(countries[i]);

  }
  i++;
}
if(countriesArray3.length > 0){
  console.log(countriesArray3);
}else{
  console.log('There are no countries with exactly 5 characters');
}

console.log('\n');

let countriesArray4 = [];
i = 0;
while(i < countries.length){
  if(countries[i].length >= 6){
    countriesArray4.push(countries[i]);
  }
  i++;
}
if(countriesArray4.length > 0){
  console.log(countriesArray4);
}else{
  console.log('There are no countries with 6 or more characters');
}

// Find the longest word in the webTechs array

let webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
let longestWord = '';
i = 0;
while(i < webTechs.length){
  if(webTechs[i].length > longestWord.length){
    longestWord = webTechs[i];
  }
  i++;
}

console.log(longestWord);

console.log('\n');

let arrayOfArrays =[];
i = 0;
while(i < webTechs.length){
  let newArray = [];
  newArray.push(webTechs[i], webTechs[i].length);
  arrayOfArrays.push(newArray);
  i++;
}

console.log(arrayOfArrays);

console.log('\n');

for(let i = 0; i< webTechs.length; i++){
  console.log(webTechs[i]);
}

console.log('\n');


let fruit = ['banana', 'orange', 'mango', 'lemon'];
let reverseFruit = [];

for(let i=fruit.length-1; i>= 0; i--){
  reverseFruit.push(fruit[i]);
}

console.log(reverseFruit);

console.log('\n');

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(let i = 0; i < fullStack.length; i++){
  for(let j = 0; j < fullStack[i].length; j++){
    console.log(fullStack[i][j]);
  }
}