const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backEnd] = fullStack;

const names = [undefined, 'Brook', 'David'];

let [
    firstPerson = 'Prashant',
    secondPerson,
    thirdPerson,
    fourthPerson = "Devid"
] = names


const nums = [1,2,3,4,5,6,7,8,9,10];
let [num1,num2,num3,...rest] = nums 

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// for(const [country,city] of countries){
//     console.log(country,city)
// }

// for(const [first,second, third] of fullStack){
//     console.log(first,second,third)
// }

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

let {width, height, area, perimeter} = rectangle;


const person = {
    firstName: 'Prashant',
    lastName: 'Singh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}

// const getPersonInfo = obj => {
//     const skills = obj.skills;
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages;
//     const formattedLanguage = languages.slice(0, -1).join(', ')

//     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length -1]}. He speaks ${formattedLanguage} and a little bit of ${languages[2]}.`

//     return personInfo
// }

// console.log(getPersonInfo(person))

const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguage = languages.slice(0, -1).join(', ')


    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length -1]}. He speaks ${formattedLanguage} and a little bit of ${languages[2]}.`

    return personInfo;
}
console.warn(getPersonInfo(person))