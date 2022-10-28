
const challenge = '30 Days of JavaScript';


console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 21));
console.log(challenge.slice(3,21));

console.log(challenge.includes('Script'));
const array = challenge.split('');
console.log(array);

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(string.split(', '));

console.log(challenge.replace("JavaScript","Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt());
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
const challenge2 = ' You cannot end a sentence with because because because is a conjunction';
const index = challenge2.indexOf("because");
const lastIndex = challenge2.lastIndexOf("because");
console.log(index);
console.log(lastIndex);
console.log(challenge2.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith(" JavaScript"));
console.log(challenge.match(/a/gi));
const string2 = '30 Days of';
console.log(string2.concat('JavaScript'));
console.log(challenge.repeat(2));


// EXERCISE: Level 2

const quote = 'There is no exercise better for the heart than reaching down and lifting people up.';
const quote2 = 
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(quote, quote2);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

const number = 10;
console.log(typeof(number) == typeof(10))


// Check if 'on' is found in both python and jargon

const lang = ['python', 'jargon'];

for(let i=0; i<lang.length; i++){
    console.log(lang[i].includes('on'));
}

const string3 = 'I hope this course is not full of jargon';

console.log(string3.includes('jargon'));

const random = Math.floor(Math.random() * 101);
console.log(random);

const random2 = Math.floor(Math.random() * (100 - 50) + 50);
console.log(random2);
const random3 = Math.floor(Math.random() * 256);
console.log(random3);

const JavaScript = 'JavaScript';
console.log(JavaScript[Math.floor(Math.random() * JavaScript.length)]);

console.log('1\t1\t1\t1\t1\t');
console.log('2\t1\t2\t4\t8\t16\t');
console.log('3\t1\t3\t9\t27\t81\t');
console.log('4\t1\t4\t16\t64\t256\t');
console.log('5\t1\t5\t25\t125\t625\t');


const string5 = 'You cannot end a sentence with because because because is a conjunction';

console.log(string5.slice(31, 38));

const string6 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log(string6.match(/love/ig).length);

console.log(string5.match(/because/ig));

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// creating a function with regex meta characters

console.log(sentence.replace(/[^a-zA-Z0-9 _]/g, ""))

const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

var salaries = income.match(/-?\d*[0-9](?:[.,]\d{0,2})?/g).map(function(v) { return v.replace(',', '.'); });

const summationOfNumbers = salaries.reduce((sum, salary) => {
    return sum + parseFloat(salary);
}
, 0);
console.log(summationOfNumbers);


